"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrpcStatusEvent = exports.GrpcDataEvent = void 0;
class GrpcDataEvent {
    data;
    constructor(data) {
        this.data = data;
    }
}
exports.GrpcDataEvent = GrpcDataEvent;
class GrpcStatusEvent {
    statusCode;
    statusMessage;
    metadata;
    constructor(statusCode, statusMessage, metadata) {
        this.statusCode = statusCode;
        this.statusMessage = statusMessage;
        this.metadata = metadata;
    }
}
exports.GrpcStatusEvent = GrpcStatusEvent;
//# sourceMappingURL=grpc-event.js.map