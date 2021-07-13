import { Error, Metadata, Status } from 'grpc-web';
import { GrpcWorkerClientSettings } from './client-settings';
export declare namespace GrpcWorkerApi {
    enum GrpcWorkerMessageType {
        serviceClientConfig = 0,
        rpcRequest = 1,
        rpcCancel = 2,
        rpcResponse = 3
    }
    interface GrpcWorkerMessage {
        type: GrpcWorkerMessageType;
    }
    interface GrpcWorkerMessageServiceClientConfig extends GrpcWorkerMessage {
        type: GrpcWorkerMessageType.serviceClientConfig;
        serviceId: string;
        settings: GrpcWorkerClientSettings;
    }
    interface GrpcWorkerMessageRPCRequest<Q> extends GrpcWorkerMessage {
        type: GrpcWorkerMessageType.rpcRequest;
        id: number;
        serviceId: string;
        path: string;
        request: Q;
        metadata: Metadata;
    }
    interface GrpcWorkerMessageRPCCancel extends GrpcWorkerMessage {
        type: GrpcWorkerMessageType.rpcCancel;
        id: number;
    }
    enum GrpcWorkerMessageRPCResponseType {
        error = 0,
        status = 1,
        data = 2,
        end = 3
    }
    interface GrpcWorkerMessageRPCResponse<S> extends GrpcWorkerMessage {
        type: GrpcWorkerMessageType.rpcResponse;
        responseType: GrpcWorkerMessageRPCResponseType;
        id: number;
        error?: Error;
        status?: Status;
        response?: S;
    }
    interface WorkerMessageEvent<D> extends Event {
        data: D;
    }
}
