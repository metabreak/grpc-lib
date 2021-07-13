"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceClientConfig = void 0;
const utils_1 = require("../../utils");
class ServiceClientConfig {
    proto;
    service;
    constructor(proto, service) {
        this.proto = proto;
        this.service = service;
    }
    getTokenName() {
        return `GRPC_${utils_1.pascalize(this.service.name)}_CLIENT_SETTINGS`;
    }
    print(printer) {
        printer.addLine(`
      /**
       * Specific GrpcClientSettings for ${utils_1.classify(this.service.name)}.
       * Use it only if your default settings are not set or the service requires other settings.
       */
      export const ${this.getTokenName()} = new InjectionToken<any>('${this.getTokenName()}');
    `);
    }
}
exports.ServiceClientConfig = ServiceClientConfig;
//# sourceMappingURL=service-client-config.js.map