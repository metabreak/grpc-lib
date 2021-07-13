"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrpcStatusEvent = exports.GrpcDataEvent = void 0;
class GrpcDataEvent {
    constructor(data) {
        this.data = data;
    }
}
exports.GrpcDataEvent = GrpcDataEvent;
class GrpcStatusEvent {
    constructor(statusCode, statusMessage, metadata) {
        this.statusCode = statusCode;
        this.statusMessage = statusMessage;
        this.metadata = metadata;
    }
}
exports.GrpcStatusEvent = GrpcStatusEvent;
//# sourceMappingURL=grpc-event.js.map