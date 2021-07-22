import {
  GrpcClient,
  GrpcDataEvent,
  GrpcEvent,
  GrpcMessage,
  GrpcMessageClass,
  GrpcMetadata,
  GrpcStatusEvent,
  GrpcClientSettings,
} from '@metabreak/grpc-common';
import { GrpcWebClientBase, MethodDescriptor } from 'grpc-web';
import { Observable } from 'rxjs';

/**
 * GrpcClient implementation based on grpc-web
 */
export class GrpcWebClient implements GrpcClient<GrpcClientSettings> {
  private client: GrpcWebClientBase;

  constructor(private settings: GrpcClientSettings) {
    this.client = new GrpcWebClientBase(this.settings);
  }

  getSettings(): GrpcClientSettings {
    return { ...this.settings };
  }

  unaryAsPromise<Q extends GrpcMessage, S extends GrpcMessage>(
    path: string,
    req: Q,
    metadata: GrpcMetadata,
    reqclss: GrpcMessageClass<Q>,
    resclss: GrpcMessageClass<S>,
  ): Promise<GrpcEvent<S>> {
    const meta = metadata?.toObject() ?? {};
    const descriptor = new MethodDescriptor<Q, S>(
      path,
      'unary',
      reqclss,
      resclss,
      (request: Q) => {
        return request.serializeBinary();
      },
      resclss.deserializeBinary,
    );

    return new Promise((resolve, reject) => {
      const stream = this.client.rpcCall<Q, S>(
        this.settings.host + path,
        req,
        meta,
        descriptor,
        (error, data) => {
          if (error) {
            reject(
              new GrpcStatusEvent(
                error.code,
                error.message,
                new GrpcMetadata((error as any).metadata),
              ),
            );
          } else {
            resolve(new GrpcDataEvent(data));
          }
        },
      );

      stream.on('end', () => {
        reject();
      });
    });
  }

  unaryAsObservable<Q extends GrpcMessage, S extends GrpcMessage>(
    path: string,
    req: Q,
    metadata: GrpcMetadata,
    reqclss: GrpcMessageClass<Q>,
    resclss: GrpcMessageClass<S>,
  ): Observable<GrpcEvent<S>> {
    const meta = metadata?.toObject() ?? {};
    const descriptor = new MethodDescriptor<Q, S>(
      path,
      'unary',
      reqclss,
      resclss,
      (request: Q) => {
        return request.serializeBinary();
      },
      resclss.deserializeBinary,
    );

    return new Observable((observer) => {
      const stream = this.client.rpcCall<Q, S>(
        this.settings.host + path,
        req,
        meta,
        descriptor,
        (error, data) => {
          if (error) {
            observer.next(
              new GrpcStatusEvent(
                error.code,
                error.message,
                new GrpcMetadata((error as any).metadata),
              ),
            );
            observer.complete();
          } else {
            observer.next(new GrpcDataEvent(data));
          }
        },
      );

      // take only status 0 because unary error already includes non-zero statuses
      stream.on('status', (status) => {
        return status.code === 0
          ? observer.next(
              new GrpcStatusEvent(
                status.code,
                status.details,
                new GrpcMetadata(status.metadata),
              ),
            )
          : null;
      });

      stream.on('end', () => {
        observer.complete();
      });

      return () => {
        stream.cancel();
      };
    });
  }

  serverStream<Q extends GrpcMessage, S extends GrpcMessage>(
    path: string,
    req: Q,
    metadata: GrpcMetadata,
    reqclss: GrpcMessageClass<Q>,
    resclss: GrpcMessageClass<S>,
  ): Observable<GrpcEvent<S>> {
    const descriptor = new MethodDescriptor<Q, S>(
      path,
      'server_streaming',
      reqclss,
      resclss,
      (request: Q) => {
        return request.serializeBinary();
      },
      resclss.deserializeBinary,
    );

    return new Observable((observer) => {
      const stream = this.client.serverStreaming<Q, S>(
        this.settings.host + path,
        req,
        metadata?.toObject() ?? {},
        descriptor,
      );

      stream.on('status', (status) => {
        observer.next(
          new GrpcStatusEvent(
            status.code,
            status.details,
            new GrpcMetadata(status.metadata),
          ),
        );
      });

      stream.on('error', (error) => {
        observer.next(
          new GrpcStatusEvent(
            error.code,
            error.message,
            new GrpcMetadata((error as any).metadata),
          ),
        );

        observer.complete();
      });

      stream.on('data', (data) => {
        observer.next(new GrpcDataEvent(data));
      });

      stream.on('end', () => {
        observer.complete();
      });

      return () => {
        stream.cancel();
      };
    });
  }
}
