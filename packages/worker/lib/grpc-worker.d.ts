import { GrpcWorkerServiceClientDef } from './service-client-def';
export declare class GrpcWorker {
    private definitions;
    private clients;
    private requestCancelHandlers;
    register(...defs: GrpcWorkerServiceClientDef[]): void;
    start(): void;
    private configureServiceClient;
    private handleRpc;
    private cancelRpc;
}
