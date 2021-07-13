"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrpcWorker = void 0;
const grpc_worker_common_1 = require("@metabreak/grpc-worker-common");
const grpc_web_1 = require("grpc-web");
const api_1 = require("./api");
class GrpcWorker {
    definitions = new Map();
    clients = new Map();
    requestCancelHandlers = new Map();
    register(...defs) {
        defs.forEach((def) => this.definitions.set(def.serviceId, def));
    }
    start() {
        addEventListener('message', ({ data, }) => {
            switch (data.type) {
                case api_1.GrpcWorkerApi.GrpcWorkerMessageType.serviceClientConfig:
                    this.configureServiceClient(data);
                    break;
                case api_1.GrpcWorkerApi.GrpcWorkerMessageType.rpcRequest:
                    this.handleRpc(data);
                    break;
                case api_1.GrpcWorkerApi.GrpcWorkerMessageType.rpcCancel:
                    this.cancelRpc(data);
                    break;
                default:
                    throw new Error(`Unknown incoming message type ${data.type}`);
            }
        });
    }
    configureServiceClient(message) {
        const def = this.definitions.get(message.serviceId);
        if (!def) {
            throw new Error(`Service client ${message.serviceId} is not registered in Worker`);
        }
        this.clients.set(message.serviceId, {
            settings: message.settings,
            client: new grpc_web_1.GrpcWebClientBase(message.settings),
        });
    }
    handleRpc(message) {
        const def = this.definitions.get(message.serviceId);
        if (!def) {
            throw new Error(`Service client ${message.serviceId} is not registered in Worker`);
        }
        const service = this.clients.get(message.serviceId);
        if (!service) {
            throw new Error(`Service client ${message.serviceId} is not configured in Worker`);
        }
        const respond = (msg) => postMessage({
            type: api_1.GrpcWorkerApi.GrpcWorkerMessageType.rpcResponse,
            id: message.id,
            ...msg,
        });
        const { type, reqclss, resclss } = def.methods[message.path];
        const request = new reqclss(message.request);
        const url = service.settings.host + message.path;
        const metadata = message.metadata || {};
        const descriptor = new grpc_web_1.MethodDescriptor(message.path, type === grpc_worker_common_1.GrpcCallType.unary ? 'unary' : 'server_streaming', reqclss, resclss, (req) => req.serializeBinary(), resclss.deserializeBinary);
        if (type === grpc_worker_common_1.GrpcCallType.unary) {
            const stream = service.client.rpcCall(url, request, metadata, descriptor, (error, response) => {
                if (error) {
                    this.requestCancelHandlers.delete(message.id);
                    respond({
                        responseType: api_1.GrpcWorkerApi.GrpcWorkerMessageRPCResponseType.error,
                        error,
                    });
                }
                else {
                    respond({
                        responseType: api_1.GrpcWorkerApi.GrpcWorkerMessageRPCResponseType.data,
                        response: response.toObject(),
                    });
                }
            });
            stream.on('status', (status) => status.code === 0
                ? respond({
                    responseType: api_1.GrpcWorkerApi.GrpcWorkerMessageRPCResponseType.status,
                    status,
                })
                : null);
            stream.on('end', () => {
                this.requestCancelHandlers.delete(message.id);
                respond({
                    responseType: api_1.GrpcWorkerApi.GrpcWorkerMessageRPCResponseType.end,
                });
            });
            this.requestCancelHandlers.set(message.id, () => stream.cancel());
        }
        else {
            const stream = service.client.serverStreaming(url, request, metadata, descriptor);
            stream.on('error', (error) => {
                this.requestCancelHandlers.delete(message.id);
                respond({
                    responseType: api_1.GrpcWorkerApi.GrpcWorkerMessageRPCResponseType.error,
                    error,
                });
            });
            stream.on('status', (status) => respond({
                responseType: api_1.GrpcWorkerApi.GrpcWorkerMessageRPCResponseType.status,
                status,
            }));
            stream.on('data', (response) => respond({
                responseType: api_1.GrpcWorkerApi.GrpcWorkerMessageRPCResponseType.data,
                response: response.toObject(),
            }));
            stream.on('end', () => {
                this.requestCancelHandlers.delete(message.id);
                respond({
                    responseType: api_1.GrpcWorkerApi.GrpcWorkerMessageRPCResponseType.end,
                });
            });
            this.requestCancelHandlers.set(message.id, () => stream.cancel());
        }
    }
    cancelRpc(message) {
        const cancel = this.requestCancelHandlers.get(message.id);
        if (cancel) {
            cancel();
            this.requestCancelHandlers.delete(message.id);
        }
    }
}
exports.GrpcWorker = GrpcWorker;
//# sourceMappingURL=grpc-worker.js.map