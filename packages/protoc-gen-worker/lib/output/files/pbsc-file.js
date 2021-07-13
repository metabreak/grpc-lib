"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PbscFile = void 0;
const path_1 = require("path");
const services_1 = require("../../services");
const service_client_1 = require("../types/service-client");
class PbscFile {
    proto;
    constructor(proto) {
        this.proto = proto;
    }
    print(printer) {
        services_1.Services.Logger.debug(`Start printing pbsc for ${this.proto.name}`);
        const serviceClients = [];
        this.proto.serviceList.forEach((service) => {
            const serviceClient = new service_client_1.ServiceClient(this.proto, service);
            serviceClients.push(serviceClient);
        });
        const fileName = path_1.basename(this.proto.getGeneratedFileBaseName());
        printer.addLine(`import * as thisProto from './${fileName}';`);
        printer.add(this.proto.getImportedDependencies());
        serviceClients.forEach((serviceClient) => serviceClient.print(printer));
        services_1.Services.Logger.debug(`End printing pbsc for ${this.proto.name}`);
    }
}
exports.PbscFile = PbscFile;
//# sourceMappingURL=pbsc-file.js.map