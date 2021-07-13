import { GrpcEvent, GrpcMessage, GrpcRequest } from '@metabreak/grpc-common';
import { Observable } from 'rxjs';
import { GrpcHandler } from './grpc-handler';
import { GrpcInterceptor } from './grpc-interceptor';
export interface GrpcLoggerSettings {
    enabled?: boolean;
    logClientSettings?: boolean;
    logMetadata?: boolean;
    logStatusCodeOk?: boolean;
    requestMapper?: (msg: GrpcMessage) => any;
    responseMapper?: (msg: GrpcMessage) => any;
}
export declare class GrpcLoggerInterceptor implements GrpcInterceptor {
    private dataStyle;
    private errorStyle;
    private statusOkStyle;
    private settings;
    constructor(settings?: GrpcLoggerSettings);
    intercept<Q extends GrpcMessage, S extends GrpcMessage>(request: GrpcRequest<Q, S>, next: GrpcHandler): Observable<GrpcEvent<S>>;
}
