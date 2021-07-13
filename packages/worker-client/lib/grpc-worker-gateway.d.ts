import { GrpcEvent, GrpcMessage } from '@metabreak/grpc-common';
import { Metadata } from 'grpc-web';
import { Observable } from 'rxjs';
import { GrpcWorkerClientSettings } from './grpc-worker-client';
export declare class GrpcWorkerGateway {
    private worker;
    private lastId;
    private connections;
    constructor(worker: Worker);
    configureServiceClient(serviceId: string, settings: GrpcWorkerClientSettings): void;
    callUnaryFromWorker<Q extends GrpcMessage, S extends GrpcMessage>(serviceId: string, path: string, request: Q, metadata: Metadata): Observable<GrpcEvent<S>>;
    callServerStreamFromWorker<Q extends GrpcMessage, S extends GrpcMessage>(serviceId: string, path: string, request: Q, metadata: Metadata): Observable<GrpcEvent<S>>;
    closeConnection(id: number): void;
    private createRequestId;
}
