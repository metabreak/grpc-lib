"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrpcWorkerGateway = void 0;
const grpc_common_1 = require("@metabreak/grpc-common");
const grpc_worker_1 = require("@metabreak/grpc-worker");
const rxjs_1 = require("rxjs");
class GrpcWorkerGateway {
    worker;
    lastId = 0;
    connections = new Map();
    constructor(worker) {
        this.worker = worker;
        worker.onmessage = (event) => {
            const data = event.data;
            const connection = this.connections.get(data.id);
            if (connection &&
                data.type === grpc_worker_1.GrpcWorkerApi.GrpcWorkerMessageType.rpcResponse) {
                switch (data.responseType) {
                    case grpc_worker_1.GrpcWorkerApi.GrpcWorkerMessageRPCResponseType.error:
                        connection.next(new grpc_common_1.GrpcStatusEvent(data.error.code, data.error.message, data.error.metadata));
                        connection.complete();
                        this.connections.delete(data.id);
                        break;
                    case grpc_worker_1.GrpcWorkerApi.GrpcWorkerMessageRPCResponseType.status:
                        connection.next(new grpc_common_1.GrpcStatusEvent(data.status.code, data.status.details, new grpc_common_1.GrpcMetadata(data.status.metadata)));
                        break;
                    case grpc_worker_1.GrpcWorkerApi.GrpcWorkerMessageRPCResponseType.data:
                        connection.next(new grpc_common_1.GrpcDataEvent(data.response));
                        break;
                    case grpc_worker_1.GrpcWorkerApi.GrpcWorkerMessageRPCResponseType.end:
                        connection.complete();
                        this.connections.delete(data.id);
                        break;
                }
            }
        };
    }
    configureServiceClient(serviceId, settings) {
        this.worker.postMessage({
            type: grpc_worker_1.GrpcWorkerApi.GrpcWorkerMessageType.serviceClientConfig,
            serviceId,
            settings,
        });
    }
    callUnaryFromWorker(serviceId, path, request, metadata) {
        return new rxjs_1.Observable((observer) => {
            const id = this.createRequestId();
            this.connections.set(id, observer);
            this.worker.postMessage({
                type: grpc_worker_1.GrpcWorkerApi.GrpcWorkerMessageType.rpcRequest,
                id,
                serviceId,
                path,
                request,
                metadata,
            });
            return () => this.closeConnection(id);
        });
    }
    callServerStreamFromWorker(serviceId, path, request, metadata) {
        return new rxjs_1.Observable((observer) => {
            const id = this.createRequestId();
            this.connections.set(id, observer);
            this.worker.postMessage({
                type: grpc_worker_1.GrpcWorkerApi.GrpcWorkerMessageType.rpcRequest,
                id,
                serviceId,
                path,
                request,
                metadata,
            });
            return () => this.closeConnection(id);
        });
    }
    closeConnection(id) {
        this.worker.postMessage({
            type: grpc_worker_1.GrpcWorkerApi.GrpcWorkerMessageType.rpcCancel,
            id,
        });
        this.connections.delete(id);
    }
    createRequestId() {
        return this.lastId++;
    }
}
exports.GrpcWorkerGateway = GrpcWorkerGateway;
//# sourceMappingURL=grpc-worker-gateway.js.map