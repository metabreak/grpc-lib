"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrpcMessagePool = void 0;
class GrpcMessagePool {
    index = new Map();
    constructor(messages) {
        this.add(messages);
    }
    add(messages) {
        messages.forEach((m) => this.index.set(m.id, m));
    }
    get(id) {
        return this.index.get(id);
    }
}
exports.GrpcMessagePool = GrpcMessagePool;
//# sourceMappingURL=grpc-message-pool.js.map