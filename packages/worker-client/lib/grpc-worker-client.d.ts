import { GrpcClient, GrpcClientFactory, GrpcEvent, GrpcMessage, GrpcMessageClass, GrpcMetadata } from '@metabreak/grpc-common';
import { Observable } from 'rxjs';
import { GrpcWorkerGateway } from './grpc-worker-gateway';
export interface GrpcWorkerClientSettings {
    host: string;
    format?: string;
    suppressCorsPreflight?: boolean;
    withCredentials?: boolean;
}
export declare class GrpcWorkerClientFactory implements GrpcClientFactory<GrpcWorkerClientSettings> {
    private defaultSettings;
    private gateway;
    constructor(defaultSettings: GrpcWorkerClientSettings, gateway: GrpcWorkerGateway);
    createClient(serviceId: string, customSettings: GrpcWorkerClientSettings): GrpcWorkerClient;
}
export declare class GrpcWorkerClient implements GrpcClient<GrpcWorkerClientSettings> {
    private serviceId;
    private settings;
    private gateway;
    constructor(serviceId: string, settings: GrpcWorkerClientSettings, gateway: GrpcWorkerGateway);
    getSettings(): GrpcWorkerClientSettings;
    unary<Q extends GrpcMessage, S extends GrpcMessage>(path: string, req: Q, metadata: GrpcMetadata, reqclss: GrpcMessageClass<Q>, resclss: GrpcMessageClass<S>): Observable<GrpcEvent<S>>;
    serverStream<Q extends GrpcMessage, S extends GrpcMessage>(path: string, req: Q, metadata: GrpcMetadata, reqclss: GrpcMessageClass<Q>, resclss: GrpcMessageClass<S>): Observable<GrpcEvent<S>>;
}
