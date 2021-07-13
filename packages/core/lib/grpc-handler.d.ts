import { GrpcEvent, GrpcMessage, GrpcRequest } from '@metabreak/grpc-worker-common';
import { Observable } from 'rxjs';
import { GrpcInterceptor } from './grpc-interceptor';
export declare class GrpcHandler {
    private interceptors;
    constructor(configuredInterceptors: GrpcInterceptor | GrpcInterceptor[]);
    handle<Q extends GrpcMessage, S extends GrpcMessage>(request: GrpcRequest<Q, S>): Observable<GrpcEvent<S>>;
}
