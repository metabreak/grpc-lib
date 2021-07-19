import {
  GrpcClient,
  GrpcDataEvent,
  GrpcEvent,
  GrpcMessage,
  GrpcMessageClass,
  GrpcMetadata,
  GrpcClientSettings,
} from '@metabreak/grpc-common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { GrpcWorkerGateway } from '@metabreak/grpc-worker-gateway';

/**
 * GrpcClient implementation based on grpc-web running in worker
 */
export class GrpcWorkerClient implements GrpcClient<GrpcClientSettings> {
  constructor(
    private serviceId: string,
    private settings: GrpcClientSettings,
    private gateway: GrpcWorkerGateway,
  ) {
    this.gateway.configureServiceClient(this.serviceId, this.settings);
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
    return this.gateway.callUnaryFromWorkerAsPromise<Q, S>(
      this.serviceId,
      path,
      req.toObject(),
      metadata?.toObject() ?? {},
    );
  }

  unaryAsObservable<Q extends GrpcMessage, S extends GrpcMessage>(
    path: string,
    req: Q,
    metadata: GrpcMetadata,
    reqclss: GrpcMessageClass<Q>,
    resclss: GrpcMessageClass<S>,
  ): Observable<GrpcEvent<S>> {
    return this.gateway.callUnaryFromWorkerAsObservable<Q, S>(
      this.serviceId,
      path,
      req.toObject(),
      metadata?.toObject() ?? {},
    );
  }

  serverStream<Q extends GrpcMessage, S extends GrpcMessage>(
    path: string,
    req: Q,
    metadata: GrpcMetadata,
    reqclss: GrpcMessageClass<Q>,
    resclss: GrpcMessageClass<S>,
  ): Observable<GrpcEvent<S>> {
    return this.gateway.callServerStreamFromWorker<Q, S>(
      this.serviceId,
      path,
      req.toObject(),
      metadata?.toObject() ?? {},
    );
  }
}
