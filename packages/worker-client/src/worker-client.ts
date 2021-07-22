import {
  GrpcClient,
  GrpcEvent,
  GrpcMessage,
  GrpcMessageClass,
  GrpcMetadata,
  GrpcClientSettings,
} from '@metabreak/grpc-common';
import { GrpcWorkerGateway } from '@metabreak/grpc-worker-gateway';
import type { Observable } from 'rxjs';

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
    const meta = metadata?.toObject() ?? {};

    return this.gateway.callUnaryFromWorkerAsPromise<Q, S>(
      this.serviceId,
      path,
      req.toObject(),
      meta,
    );
  }

  unaryAsObservable<Q extends GrpcMessage, S extends GrpcMessage>(
    path: string,
    req: Q,
    metadata: GrpcMetadata,
    reqclss: GrpcMessageClass<Q>,
    resclss: GrpcMessageClass<S>,
  ): Observable<GrpcEvent<S>> {
    const meta = metadata?.toObject() ?? {};

    return this.gateway.callUnaryFromWorkerAsObservable<Q, S>(
      this.serviceId,
      path,
      req.toObject(),
      meta,
    );
  }

  serverStream<Q extends GrpcMessage, S extends GrpcMessage>(
    path: string,
    req: Q,
    metadata: GrpcMetadata,
    reqclss: GrpcMessageClass<Q>,
    resclss: GrpcMessageClass<S>,
  ): Observable<GrpcEvent<S>> {
    const meta = metadata?.toObject() ?? {};

    return this.gateway.callServerStreamFromWorker<Q, S>(
      this.serviceId,
      path,
      req.toObject(),
      meta,
    );
  }
}
