import {
  GrpcCallType,
  GrpcMessage,
  GrpcMessageClass,
  GrpcClientSettings,
} from '@metabreak/grpc-common';
import { Error, GrpcWebClientBase, MethodDescriptor, Status } from 'grpc-web';
import {
  GrpcWorkerMessage,
  GrpcWorkerMessageRPCCancel,
  GrpcWorkerMessageRPCRequest,
  GrpcWorkerMessageServiceClientConfig,
  GrpcWorkerMessageType,
  WorkerMessageEvent,
  GrpcWorkerMessageRPCResponseType,
} from './types';

/**
 * Generated service client method definition
 */
export interface GrpcWorkerRPCDef {
  type: GrpcCallType;
  reqclss: GrpcMessageClass<any>;
  resclss: GrpcMessageClass<any>;
}

/**
 * Generated service client definition
 */
export interface GrpcWorkerServiceClientDef {
  serviceId: string;
  methods: Record<string, GrpcWorkerRPCDef>;
}

/**
 * A worker-side service of worker client implementation based on grpc-web
 *
 * Example:
 *
 * ```
 * /// <reference lib="webworker" />
 *
 * import { GrpcWorker } from '@metabreak/grpc-worker';
 * import { GrpcWorkerEchoServiceClientDef } from '../proto/echo.pbwsc';
 *
 * const worker = new GrpcWorker();
 *
 * worker.register(
 *   // register here all the service clients definitions
 *   GrpcWorkerEchoServiceClientDef,
 * );
 *
 * worker.start();
 * ```
 */
export class GrpcWorker {
  private definitions = new Map<string, GrpcWorkerServiceClientDef>();
  private clients = new Map<
    string,
    {
      settings: GrpcClientSettings;
      client: GrpcWebClientBase;
    }
  >();
  private requestCancelHandlers = new Map<number, () => void>();

  /**
   * Register one or more service clients.
   * Add here only the services you use, otherwise the worker size can explode.
   * @param defs generated service client definitions to register
   */
  register(...defs: GrpcWorkerServiceClientDef[]): void {
    defs.forEach((def) => {
      return this.definitions.set(def.serviceId, def);
    });
  }

  /**
   * Start the service
   */
  start(): void {
    addEventListener(
      'message',
      ({ data }: WorkerMessageEvent<GrpcWorkerMessage>) => {
        switch (data.type) {
          case GrpcWorkerMessageType.serviceClientConfig:
            this.configureServiceClient(
              data as GrpcWorkerMessageServiceClientConfig,
            );
            break;
          case GrpcWorkerMessageType.rpcRequest:
            this.handleRpc(data as GrpcWorkerMessageRPCRequest<any>);
            break;
          case GrpcWorkerMessageType.rpcCancel:
            this.cancelRpc(data as GrpcWorkerMessageRPCCancel);
            break;
          default:
            throw new Error(`Unknown incoming message type ${data.type}`);
        }
      },
    );
  }

  private configureServiceClient({
    serviceId,
    settings,
  }: GrpcWorkerMessageServiceClientConfig): void {
    const def = this.definitions.get(serviceId);

    if (!def) {
      throw new Error(
        `Service client ${serviceId} is not registered in Worker`,
      );
    }

    const client = new GrpcWebClientBase(settings);

    this.clients.set(serviceId, { settings, client });
  }

  private rpcRespond(requestId: number, msg: Record<string, unknown>): void {
    postMessage({
      type: GrpcWorkerMessageType.rpcResponse,
      id: requestId,
      ...msg,
    });
  }

  private handleRpc(message: GrpcWorkerMessageRPCRequest<any>): void {
    const def = this.definitions.get(message.serviceId);

    if (!def) {
      throw new Error(
        `Service client ${message.serviceId} is not registered in Worker`,
      );
    }

    const service = this.clients.get(message.serviceId);

    if (!service) {
      throw new Error(
        `Service client ${message.serviceId} is not configured in Worker`,
      );
    }

    const { type, reqclss, resclss } = def.methods[message.path];
    const request = new reqclss(message.request);
    const url = service.settings.host + message.path;
    const metadata = message.metadata ?? {};
    const descriptor = new MethodDescriptor<any, any>(
      message.path,
      type === GrpcCallType.unary ? 'unary' : 'server_streaming',
      reqclss,
      resclss,
      (req: GrpcMessage) => {
        return req.serializeBinary();
      },
      resclss.deserializeBinary,
    );

    if (type === GrpcCallType.unary) {
      const stream = service.client.rpcCall(
        url,
        request,
        metadata,
        descriptor,
        (error, response: GrpcMessage) => {
          if (error) {
            this.requestCancelHandlers.delete(message.id);
            this.rpcRespond(message.id, {
              responseType: GrpcWorkerMessageRPCResponseType.error,
              error,
            });
          } else {
            this.rpcRespond(message.id, {
              responseType: GrpcWorkerMessageRPCResponseType.data,
              response: response.toObject(),
            });
          }
        },
      );

      // take only status 0 because unary error already includes non-zero statuses
      stream.on('status', (status: Status) =>
        status.code === 0
          ? this.rpcRespond(message.id, {
              responseType: GrpcWorkerMessageRPCResponseType.status,
              status,
            })
          : null,
      );

      stream.on('end', () => {
        this.requestCancelHandlers.delete(message.id);
        this.rpcRespond(message.id, {
          responseType: GrpcWorkerMessageRPCResponseType.end,
        });
      });

      this.requestCancelHandlers.set(message.id, () => stream.cancel());
    } else {
      const stream = service.client.serverStreaming(
        url,
        request,
        metadata,
        descriptor,
      );

      stream.on('error', (error: Error) => {
        this.requestCancelHandlers.delete(message.id);
        this.rpcRespond(message.id, {
          responseType: GrpcWorkerMessageRPCResponseType.error,
          error,
        });
      });

      stream.on('status', (status: Status) =>
        this.rpcRespond(message.id, {
          responseType: GrpcWorkerMessageRPCResponseType.status,
          status,
        }),
      );

      stream.on('data', (response: GrpcMessage) =>
        this.rpcRespond(message.id, {
          responseType: GrpcWorkerMessageRPCResponseType.data,
          response: response.toObject(),
        }),
      );

      stream.on('end', () => {
        this.requestCancelHandlers.delete(message.id);
        this.rpcRespond(message.id, {
          responseType: GrpcWorkerMessageRPCResponseType.end,
        });
      });

      this.requestCancelHandlers.set(message.id, () => stream.cancel());
    }
  }

  private cancelRpc(message: GrpcWorkerMessageRPCCancel) {
    const cancel = this.requestCancelHandlers.get(message.id);

    if (cancel) {
      cancel();
      this.requestCancelHandlers.delete(message.id);
    }
  }
}
