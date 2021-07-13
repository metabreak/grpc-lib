"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrpcWorkerApi = void 0;
var GrpcWorkerApi;
(function (GrpcWorkerApi) {
    let GrpcWorkerMessageType;
    (function (GrpcWorkerMessageType) {
        GrpcWorkerMessageType[GrpcWorkerMessageType["serviceClientConfig"] = 0] = "serviceClientConfig";
        GrpcWorkerMessageType[GrpcWorkerMessageType["rpcRequest"] = 1] = "rpcRequest";
        GrpcWorkerMessageType[GrpcWorkerMessageType["rpcCancel"] = 2] = "rpcCancel";
        GrpcWorkerMessageType[GrpcWorkerMessageType["rpcResponse"] = 3] = "rpcResponse";
    })(GrpcWorkerMessageType = GrpcWorkerApi.GrpcWorkerMessageType || (GrpcWorkerApi.GrpcWorkerMessageType = {}));
    let GrpcWorkerMessageRPCResponseType;
    (function (GrpcWorkerMessageRPCResponseType) {
        GrpcWorkerMessageRPCResponseType[GrpcWorkerMessageRPCResponseType["error"] = 0] = "error";
        GrpcWorkerMessageRPCResponseType[GrpcWorkerMessageRPCResponseType["status"] = 1] = "status";
        GrpcWorkerMessageRPCResponseType[GrpcWorkerMessageRPCResponseType["data"] = 2] = "data";
        GrpcWorkerMessageRPCResponseType[GrpcWorkerMessageRPCResponseType["end"] = 3] = "end";
    })(GrpcWorkerMessageRPCResponseType = GrpcWorkerApi.GrpcWorkerMessageRPCResponseType || (GrpcWorkerApi.GrpcWorkerMessageRPCResponseType = {}));
})(GrpcWorkerApi = exports.GrpcWorkerApi || (exports.GrpcWorkerApi = {}));
//# sourceMappingURL=api.js.map