"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtoServiceMethodOptions = void 0;
class ProtoServiceMethodOptions {
    deprecated;
    idempotencyLevel;
    uninterpretedOptionList;
    constructor(value) {
        this.deprecated = value.deprecated;
        this.idempotencyLevel = value.idempotencyLevel;
        this.uninterpretedOptionList = value.uninterpretedOptionList || [];
    }
}
exports.ProtoServiceMethodOptions = ProtoServiceMethodOptions;
//# sourceMappingURL=proto-service-method-options.js.map