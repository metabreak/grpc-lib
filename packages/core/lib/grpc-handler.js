"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrpcHandler = void 0;
const grpc_common_1 = require("@metabreak/grpc-common");
class GrpcHandler {
    interceptors;
    constructor(configuredInterceptors) {
        this.interceptors = !configuredInterceptors
            ? []
            : Array.isArray(configuredInterceptors)
                ? configuredInterceptors
                : [configuredInterceptors];
    }
    handle(request) {
        const interceptors = (this.interceptors || []).slice();
        const interceptor = interceptors.shift();
        if (interceptor) {
            return interceptor.intercept(request, new GrpcHandler(interceptors));
        }
        if (request.type === grpc_common_1.GrpcCallType.unary) {
            return request.client.unary(request.path, request.requestData, request.requestMetadata, request.requestClass, request.responseClass);
        }
        return request.client.serverStream(request.path, request.requestData, request.requestMetadata, request.requestClass, request.responseClass);
    }
}
exports.GrpcHandler = GrpcHandler;
//# sourceMappingURL=grpc-handler.js.map