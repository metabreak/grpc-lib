"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrpcWorkerClient = exports.GrpcWorkerClientFactory = void 0;
const grpc_worker_common_1 = require("@metabreak/grpc-worker-common");
const operators_1 = require("rxjs/operators");
class GrpcWorkerClientFactory {
    defaultSettings;
    gateway;
    constructor(defaultSettings, gateway) {
        this.defaultSettings = defaultSettings;
        this.gateway = gateway;
    }
    createClient(serviceId, customSettings) {
        const settings = customSettings || this.defaultSettings;
        if (!settings) {
            throw new Error(`Worker client factory: no settings provided for ${serviceId}`);
        }
        return new GrpcWorkerClient(serviceId, { ...settings }, this.gateway);
    }
}
exports.GrpcWorkerClientFactory = GrpcWorkerClientFactory;
class GrpcWorkerClient {
    serviceId;
    settings;
    gateway;
    constructor(serviceId, settings, gateway) {
        this.serviceId = serviceId;
        this.settings = settings;
        this.gateway = gateway;
        this.gateway.configureServiceClient(this.serviceId, this.settings);
    }
    getSettings() {
        return { ...this.settings };
    }
    unary(path, req, metadata, reqclss, resclss) {
        return this.gateway
            .callUnaryFromWorker(this.serviceId, path, req.toObject(), metadata?.toObject() ?? {})
            .pipe(operators_1.tap((res) => {
            if (res instanceof grpc_worker_common_1.GrpcDataEvent) {
                res.data = new resclss(res.data);
            }
        }));
    }
    serverStream(path, req, metadata, reqclss, resclss) {
        return this.gateway
            .callServerStreamFromWorker(this.serviceId, path, req.toObject(), metadata?.toObject() ?? {})
            .pipe(operators_1.tap((res) => {
            if (res instanceof grpc_worker_common_1.GrpcDataEvent) {
                res.data = new resclss(res.data);
            }
        }));
    }
}
exports.GrpcWorkerClient = GrpcWorkerClient;
//# sourceMappingURL=grpc-worker-client.js.map