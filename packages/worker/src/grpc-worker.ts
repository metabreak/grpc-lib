import {
  GrpcCallType,
  GrpcMessage,
  GrpcMessageClass,
  GrpcClientSettings,
} from '@metabreak/grpc-common';
import { Error, GrpcWebClientBase, MethodDescriptor, Status } from 'grpc-web';
import { GrpcWorkerApi } from './api';

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
  methods: { [path: string]: GrpcWorkerRPCDef };
}

/**
 * A worker-side service of worker client implementation based on grpc-web
 *
 * Example:
 *
 * ```
 * /// <reference lib="webworker" />
 *
 * import { GrpcWorker } from '@ngx-grpc/worker';
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
  register(...defs: GrpcWorkerServiceClientDef[]) {
    defs.forEach((def) => this.definitions.set(def.serviceId, def));
  }

  /**
   * Start the service
   */
  start() {
    addEventListener(
      'message',
      ({
        data,
      }: GrpcWorkerApi.WorkerMessageEvent<GrpcWorkerApi.GrpcWorkerMessage>) => {
        switch (data.type) {
          case GrpcWorkerApi.GrpcWorkerMessageType.serviceClientConfig:
            this.configureServiceClient(
              data as GrpcWorkerApi.GrpcWorkerMessageServiceClientConfig,
            );
            break;
          case GrpcWorkerApi.GrpcWorkerMessageType.rpcRequest:
            this.handleRpc(
              data as GrpcWorkerApi.GrpcWorkerMessageRPCRequest<any>,
            );
            break;
          case GrpcWorkerApi.GrpcWorkerMessageType.rpcCancel:
            this.cancelRpc(data as GrpcWorkerApi.GrpcWorkerMessageRPCCancel);
            break;
          default:
            throw new Error(`Unknown incoming message type ${data.type}`);
        }
      },
    );
  }

  private configureServiceClient(
    message: GrpcWorkerApi.GrpcWorkerMessageServiceClientConfig,
  ) {
    const def = this.definitions.get(message.serviceId);

    if (!def) {
      throw new Error(
        `Service client ${message.serviceId} is not registered in Worker`,
      );
    }

    this.clients.set(message.serviceId, {
      settings: message.settings,
      client: new GrpcWebClientBase(message.settings),
    });
  }

  private handleRpc(message: GrpcWorkerApi.GrpcWorkerMessageRPCRequest<any>) {
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

    function respond(msg: any) {
      postMessage({
        type: GrpcWorkerApi.GrpcWorkerMessageType.rpcResponse,
        id: message.id,
        ...msg,
      });
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
            respond({
              responseType:
                GrpcWorkerApi.GrpcWorkerMessageRPCResponseType.error,
              error,
            });
          } else {
            respond({
              responseType: GrpcWorkerApi.GrpcWorkerMessageRPCResponseType.data,
              response: response.toObject(),
            });
          }
        },
      );

      // take only status 0 because unary error already includes non-zero statuses
      stream.on('status', (status: Status) =>
        status.code === 0
          ? respond({
              responseType:
                GrpcWorkerApi.GrpcWorkerMessageRPCResponseType.status,
              status,
            })
          : null,
      );

      stream.on('end', () => {
        this.requestCancelHandlers.delete(message.id);
        respond({
          responseType: GrpcWorkerApi.GrpcWorkerMessageRPCResponseType.end,
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
        respond({
          responseType: GrpcWorkerApi.GrpcWorkerMessageRPCResponseType.error,
          error,
        });
      });

      stream.on('status', (status: Status) =>
        respond({
          responseType: GrpcWorkerApi.GrpcWorkerMessageRPCResponseType.status,
          status,
        }),
      );

      stream.on('data', (response: GrpcMessage) =>
        respond({
          responseType: GrpcWorkerApi.GrpcWorkerMessageRPCResponseType.data,
          response: response.toObject(),
        }),
      );

      stream.on('end', () => {
        this.requestCancelHandlers.delete(message.id);
        respond({
          responseType: GrpcWorkerApi.GrpcWorkerMessageRPCResponseType.end,
        });
      });

      this.requestCancelHandlers.set(message.id, () => stream.cancel());
    }
  }

  private cancelRpc(message: GrpcWorkerApi.GrpcWorkerMessageRPCCancel) {
    const cancel = this.requestCancelHandlers.get(message.id);

    if (cancel) {
      cancel();
      this.requestCancelHandlers.delete(message.id);
    }
  }
}
