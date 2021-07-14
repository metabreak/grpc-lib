"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceMethod = void 0;
const proto_service_method_options_1 = require("./proto-service-method-options");
class ServiceMethod {
    name;
    inputType;
    outputType;
    clientStreaming;
    serverStreaming;
    options;
    constructor(value) {
        this.name = value.name;
        this.inputType = value.inputType;
        this.outputType = value.outputType;
        this.clientStreaming = value.clientStreaming;
        this.serverStreaming = value.serverStreaming;
        this.options = new proto_service_method_options_1.ProtoServiceMethodOptions(value.options ?? {});
    }
}
exports.ServiceMethod = ServiceMethod;
//# sourceMappingURL=proto-service-method.js.map