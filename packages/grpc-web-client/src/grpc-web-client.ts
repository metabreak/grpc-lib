import {
  GrpcClient,
  GrpcClientFactory,
  GrpcDataEvent,
  GrpcEvent,
  GrpcMessage,
  GrpcMessageClass,
  GrpcMetadata,
  GrpcStatusEvent,
} from '@metabreak/grpc-worker-common';
import { GrpcWebClientBase, MethodDescriptor } from 'grpc-web';
import { Observable } from 'rxjs';

/**
 * Settings for the chosen implementation of GrpcClient
 */
export interface GrpcWebClientSettings {
  host: string;
  format?: string;
  suppressCorsPreflight?: boolean;
  withCredentials?: boolean;
}

/**
 * GrpcClientFactory implementation based on grpc-web
 */

export class GrpcWebClientFactory
  implements GrpcClientFactory<GrpcWebClientSettings>
{
  constructor(private defaultSettings: GrpcWebClientSettings) {}

  createClient(serviceId: string, customSettings: GrpcWebClientSettings) {
    const settings = customSettings || this.defaultSettings;

    if (!settings) {
      throw new Error(
        `grpc-web client factory: no settings provided for ${serviceId}`,
      );
    }

    return new GrpcWebClient({ ...settings });
  }
}

/**
 * GrpcClient implementation based on grpc-web
 */
export class GrpcWebClient implements GrpcClient<GrpcWebClientSettings> {
  private client: GrpcWebClientBase;

  constructor(private settings: GrpcWebClientSettings) {
    this.client = new GrpcWebClientBase(this.settings);
  }

  getSettings(): GrpcWebClientSettings {
    return { ...this.settings };
  }

  unary<Q extends GrpcMessage, S extends GrpcMessage>(
    path: string,
    req: Q,
    metadata: GrpcMetadata,
    reqclss: GrpcMessageClass<Q>,
    resclss: GrpcMessageClass<S>,
  ): Observable<GrpcEvent<S>> {
    const descriptor = new MethodDescriptor(
      path,
      'unary',
      reqclss,
      resclss,
      (request: Q) => request.serializeBinary(),
      resclss.deserializeBinary,
    );

    return new Observable((obs) => {
      const stream = this.client.rpcCall(
        this.settings.host + path,
        req,
        metadata?.toObject() ?? {},
        descriptor,
        (error, data) => {
          if (error) {
            obs.next(
              new GrpcStatusEvent(
                error.code,
                error.message,
                new GrpcMetadata((error as any).metadata),
              ),
            );
            obs.complete();
          } else {
            obs.next(new GrpcDataEvent(data as any));
          }
        },
      );

      // take only status 0 because unary error already includes non-zero statuses
      stream.on('status', (status) =>
        status.code === 0
          ? obs.next(
              new GrpcStatusEvent(
                status.code,
                status.details,
                new GrpcMetadata(status.metadata),
              ),
            )
          : null,
      );
      stream.on('end', () => obs.complete());

      return () => stream.cancel();
    });
  }

  serverStream<Q extends GrpcMessage, S extends GrpcMessage>(
    path: string,
    req: Q,
    metadata: GrpcMetadata,
    reqclss: GrpcMessageClass<Q>,
    resclss: GrpcMessageClass<S>,
  ): Observable<GrpcEvent<S>> {
    const descriptor = new MethodDescriptor(
      path,
      'server_streaming',
      reqclss,
      resclss,
      (request: Q) => request.serializeBinary(),
      resclss.deserializeBinary,
    );

    return new Observable((obs) => {
      const stream = this.client.serverStreaming(
        this.settings.host + path,
        req,
        metadata?.toObject() ?? {},
        descriptor,
      );

      stream.on('status', (status) =>
        obs.next(
          new GrpcStatusEvent(
            status.code,
            status.details,
            new GrpcMetadata(status.metadata),
          ),
        ),
      );
      stream.on('error', (error) => {
        obs.next(
          new GrpcStatusEvent(
            error.code,
            error.message,
            new GrpcMetadata((error as any).metadata),
          ),
        );
        obs.complete();
      });
      stream.on('data', (data) => obs.next(new GrpcDataEvent(data as any)));
      stream.on('end', () => obs.complete());

      return () => stream.cancel();
    });
  }
}
