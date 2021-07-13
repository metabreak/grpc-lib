import { Observable } from 'rxjs';
import { GrpcEvent } from './grpc-event';
import { GrpcMessage } from './grpc-message';
import { GrpcMessageClass } from './grpc-message-class';
import { GrpcMetadata } from './grpc-metadata';
export interface GrpcClientFactory<ST> {
    createClient(serviceId: string, settings: ST): GrpcClient<ST>;
}
export interface GrpcClient<ST> {
    getSettings(): ST;
    unary<Q extends GrpcMessage, S extends GrpcMessage>(path: string, req: Q, metadata: GrpcMetadata, reqclss: GrpcMessageClass<Q>, resclss: GrpcMessageClass<S>): Observable<GrpcEvent<S>>;
    serverStream<Q extends GrpcMessage, S extends GrpcMessage>(path: string, req: Q, metadata: GrpcMetadata, reqclss: GrpcMessageClass<Q>, resclss: GrpcMessageClass<S>): Observable<GrpcEvent<S>>;
}
export declare enum GrpcCallType {
    unary = 0,
    serverStream = 1
}
export interface GrpcRequest<Q extends GrpcMessage, S extends GrpcMessage> {
    path: string;
    client: GrpcClient<any>;
    type: GrpcCallType;
    requestData: Q;
    requestMetadata: GrpcMetadata;
    requestClass: GrpcMessageClass<Q>;
    responseClass: GrpcMessageClass<S>;
}
//# sourceMappingURL=grpc-client.d.ts.map