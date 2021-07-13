import { GrpcClient, GrpcClientFactory, GrpcEvent, GrpcMessage, GrpcMessageClass, GrpcMetadata } from '@metabreak/grpc-common';
import { Observable } from 'rxjs';
export interface GrpcWebClientSettings {
    host: string;
    format?: string;
    suppressCorsPreflight?: boolean;
    withCredentials?: boolean;
}
export declare class GrpcWebClientFactory implements GrpcClientFactory<GrpcWebClientSettings> {
    private defaultSettings;
    constructor(defaultSettings: GrpcWebClientSettings);
    createClient(serviceId: string, customSettings: GrpcWebClientSettings): GrpcWebClient;
}
export declare class GrpcWebClient implements GrpcClient<GrpcWebClientSettings> {
    private settings;
    private client;
    constructor(settings: GrpcWebClientSettings);
    getSettings(): GrpcWebClientSettings;
    unary<Q extends GrpcMessage, S extends GrpcMessage>(path: string, req: Q, metadata: GrpcMetadata, reqclss: GrpcMessageClass<Q>, resclss: GrpcMessageClass<S>): Observable<GrpcEvent<S>>;
    serverStream<Q extends GrpcMessage, S extends GrpcMessage>(path: string, req: Q, metadata: GrpcMetadata, reqclss: GrpcMessageClass<Q>, resclss: GrpcMessageClass<S>): Observable<GrpcEvent<S>>;
}
