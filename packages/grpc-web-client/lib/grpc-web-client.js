"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrpcWebClient = exports.GrpcWebClientFactory = void 0;
const grpc_worker_common_1 = require("@metabreak/grpc-worker-common");
const grpc_web_1 = require("grpc-web");
const rxjs_1 = require("rxjs");
class GrpcWebClientFactory {
    defaultSettings;
    constructor(defaultSettings) {
        this.defaultSettings = defaultSettings;
    }
    createClient(serviceId, customSettings) {
        const settings = customSettings || this.defaultSettings;
        if (!settings) {
            throw new Error(`grpc-web client factory: no settings provided for ${serviceId}`);
        }
        return new GrpcWebClient({ ...settings });
    }
}
exports.GrpcWebClientFactory = GrpcWebClientFactory;
class GrpcWebClient {
    settings;
    client;
    constructor(settings) {
        this.settings = settings;
        this.client = new grpc_web_1.GrpcWebClientBase(this.settings);
    }
    getSettings() {
        return { ...this.settings };
    }
    unary(path, req, metadata, reqclss, resclss) {
        const descriptor = new grpc_web_1.MethodDescriptor(path, 'unary', reqclss, resclss, (request) => request.serializeBinary(), resclss.deserializeBinary);
        return new rxjs_1.Observable((obs) => {
            const stream = this.client.rpcCall(this.settings.host + path, req, metadata?.toObject() ?? {}, descriptor, (error, data) => {
                if (error) {
                    obs.next(new grpc_worker_common_1.GrpcStatusEvent(error.code, error.message, new grpc_worker_common_1.GrpcMetadata(error.metadata)));
                    obs.complete();
                }
                else {
                    obs.next(new grpc_worker_common_1.GrpcDataEvent(data));
                }
            });
            stream.on('status', (status) => status.code === 0
                ? obs.next(new grpc_worker_common_1.GrpcStatusEvent(status.code, status.details, new grpc_worker_common_1.GrpcMetadata(status.metadata)))
                : null);
            stream.on('end', () => obs.complete());
            return () => stream.cancel();
        });
    }
    serverStream(path, req, metadata, reqclss, resclss) {
        const descriptor = new grpc_web_1.MethodDescriptor(path, 'server_streaming', reqclss, resclss, (request) => request.serializeBinary(), resclss.deserializeBinary);
        return new rxjs_1.Observable((obs) => {
            const stream = this.client.serverStreaming(this.settings.host + path, req, metadata?.toObject() ?? {}, descriptor);
            stream.on('status', (status) => obs.next(new grpc_worker_common_1.GrpcStatusEvent(status.code, status.details, new grpc_worker_common_1.GrpcMetadata(status.metadata))));
            stream.on('error', (error) => {
                obs.next(new grpc_worker_common_1.GrpcStatusEvent(error.code, error.message, new grpc_worker_common_1.GrpcMetadata(error.metadata)));
                obs.complete();
            });
            stream.on('data', (data) => obs.next(new grpc_worker_common_1.GrpcDataEvent(data)));
            stream.on('end', () => obs.complete());
            return () => stream.cancel();
        });
    }
}
exports.GrpcWebClient = GrpcWebClient;
//# sourceMappingURL=grpc-web-client.js.map