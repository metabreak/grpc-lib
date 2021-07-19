import {
  GrpcDataEvent,
  GrpcEvent,
  GrpcMessage,
  GrpcMetadata,
  GrpcStatusEvent,
  GrpcClientSettings,
} from '@metabreak/grpc-common';
import { GrpcWorkerApi } from '@metabreak/grpc-worker';
import { Metadata } from 'grpc-web';
import { Observable, Observer } from 'rxjs';

enum ConnectionType {
  Observable,
  Promise,
}

type ConnectionObservable = {
  type: ConnectionType.Observable;
  observer: Observer<any>;
};

type ConnectionPromise = {
  type: ConnectionType.Promise;
  promise: {
    resolve: (...args: any[]) => void;
    reject: (...args: any[]) => void;
  };
};

export class GrpcWorkerGateway {
  private lastId = 0;
  private connections = new Map<
    number,
    ConnectionObservable | ConnectionPromise
  >();

  constructor(private worker: Worker) {
    worker.onmessage = (event: MessageEvent) => {
      const data =
        event.data as GrpcWorkerApi.GrpcWorkerMessageRPCResponse<any>;
      const connection = this.connections.get(data.id);

      if (
        connection !== undefined &&
        data.type === GrpcWorkerApi.GrpcWorkerMessageType.rpcResponse
      ) {
        switch (data.responseType) {
          case GrpcWorkerApi.GrpcWorkerMessageRPCResponseType.error:
            const grpcError = new GrpcStatusEvent(
              data.error.code,
              data.error.message,
              new GrpcMetadata((data.error as any).metadata),
            );

            if (connection.type === ConnectionType.Observable) {
              connection.observer.next(grpcError);
              connection.observer.complete();
            } else {
              connection.promise.reject(grpcError);
            }
            this.connections.delete(data.id);
            break;

          case GrpcWorkerApi.GrpcWorkerMessageRPCResponseType.status:
            if (connection.type === ConnectionType.Observable) {
              connection.observer.next(
                new GrpcStatusEvent(
                  data.status.code,
                  data.status.details,
                  new GrpcMetadata(data.status.metadata),
                ),
              );
            }
            break;

          case GrpcWorkerApi.GrpcWorkerMessageRPCResponseType.data:
            const grpcData = new GrpcDataEvent(data.response);

            if (connection.type === ConnectionType.Observable) {
              connection.observer.next(grpcData);
            } else {
              // Promise should resolves only once
              // So, we delete this connection right after resolve
              connection.promise.resolve(grpcData);
              this.connections.delete(data.id);
            }
            break;

          case GrpcWorkerApi.GrpcWorkerMessageRPCResponseType.end:
            if (connection.type === ConnectionType.Observable) {
              connection.observer.complete();
            } else {
              connection.promise.reject();
            }
            this.connections.delete(data.id);
            break;
        }
      }
    };
  }

  private createRequestId() {
    return this.lastId++;
  }

  configureServiceClient(serviceId: string, settings: GrpcClientSettings) {
    this.worker.postMessage({
      type: GrpcWorkerApi.GrpcWorkerMessageType.serviceClientConfig,
      serviceId,
      settings,
    } as GrpcWorkerApi.GrpcWorkerMessageServiceClientConfig);
  }

  callUnaryFromWorkerAsObservable<Q extends GrpcMessage, S extends GrpcMessage>(
    serviceId: string,
    path: string,
    request: Q,
    metadata: Metadata,
  ): Observable<GrpcEvent<S>> {
    return new Observable((observer) => {
      const id = this.createRequestId();

      this.connections.set(id, { type: ConnectionType.Observable, observer });

      this.worker.postMessage({
        type: GrpcWorkerApi.GrpcWorkerMessageType.rpcRequest,
        id,
        serviceId,
        path,
        request,
        metadata,
      } as GrpcWorkerApi.GrpcWorkerMessageRPCRequest<Q>);

      return () => {
        this.closeConnection(id);
      };
    });
  }

  callUnaryFromWorkerAsPromise<Q extends GrpcMessage, S extends GrpcMessage>(
    serviceId: string,
    path: string,
    request: Q,
    metadata: Metadata,
  ): Promise<GrpcDataEvent<S>> {
    return new Promise((resolve, reject) => {
      const id = this.createRequestId();

      this.connections.set(id, {
        type: ConnectionType.Promise,
        promise: { resolve, reject },
      });

      this.worker.postMessage({
        type: GrpcWorkerApi.GrpcWorkerMessageType.rpcRequest,
        id,
        serviceId,
        path,
        request,
        metadata,
      } as GrpcWorkerApi.GrpcWorkerMessageRPCRequest<Q>);
    });
  }

  callServerStreamFromWorker<Q extends GrpcMessage, S extends GrpcMessage>(
    serviceId: string,
    path: string,
    request: Q,
    metadata: Metadata,
  ): Observable<GrpcEvent<S>> {
    return new Observable((observer) => {
      const id = this.createRequestId();

      this.connections.set(id, { type: ConnectionType.Observable, observer });

      this.worker.postMessage({
        type: GrpcWorkerApi.GrpcWorkerMessageType.rpcRequest,
        id,
        serviceId,
        path,
        request,
        metadata,
      } as GrpcWorkerApi.GrpcWorkerMessageRPCRequest<Q>);

      return () => this.closeConnection(id);
    });
  }

  closeConnection(id: number) {
    this.worker.postMessage({
      type: GrpcWorkerApi.GrpcWorkerMessageType.rpcCancel,
      id,
    } as GrpcWorkerApi.GrpcWorkerMessageRPCCancel);

    this.connections.delete(id);
  }
}
