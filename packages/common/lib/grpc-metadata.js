"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrpcMetadata = void 0;
class GrpcMetadata {
    constructor(initial = {}) {
        this.map = Object.keys(initial).reduce((m, k) => m.set(k, initial[k]), new Map());
    }
    set(name, value) {
        this.map.set(name, value);
    }
    get(name) {
        return this.map.get(name);
    }
    has(name) {
        return this.map.has(name);
    }
    clone() {
        return new GrpcMetadata(this.toObject());
    }
    toObject() {
        return [...this.map.keys()].reduce((o, k) => (Object.assign(Object.assign({}, o), { [k]: this.map.get(k) })), {});
    }
}
exports.GrpcMetadata = GrpcMetadata;
//# sourceMappingURL=grpc-metadata.js.map