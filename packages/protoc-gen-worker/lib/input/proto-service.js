"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtoService = void 0;
const proto_service_method_1 = require("./proto-service-method");
class ProtoService {
    name;
    methodList;
    constructor(value) {
        this.name = value.name;
        this.methodList = (value.methodList ?? []).map((m) => new proto_service_method_1.ServiceMethod(m));
    }
}
exports.ProtoService = ProtoService;
//# sourceMappingURL=proto-service.js.map