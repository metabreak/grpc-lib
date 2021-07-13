"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PbConfFile = void 0;
const services_1 = require("../../services");
const service_client_config_1 = require("../types/service-client-config");
class PbConfFile {
    proto;
    constructor(proto) {
        this.proto = proto;
    }
    print(printer) {
        services_1.Services.Logger.debug(`Start printing pbconf for ${this.proto.name}`);
        const serviceClientConfigs = [];
        this.proto.serviceList.forEach((service) => serviceClientConfigs.push(new service_client_config_1.ServiceClientConfig(this.proto, service)));
        serviceClientConfigs.forEach((serviceClientConfig) => serviceClientConfig.print(printer));
        services_1.Services.Logger.debug(`End printing pbconf for ${this.proto.name}`);
    }
}
exports.PbConfFile = PbConfFile;
//# sourceMappingURL=pbconf-file.js.map