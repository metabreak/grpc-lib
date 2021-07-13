import { GrpcEvent, GrpcMessage, GrpcRequest } from '@metabreak/grpc-worker-common';
import { Observable } from 'rxjs';
import { GrpcHandler } from './grpc-handler';
export interface GrpcInterceptor {
    intercept<Q extends GrpcMessage, S extends GrpcMessage>(request: GrpcRequest<Q, S>, next: GrpcHandler): Observable<GrpcEvent<S>>;
}
