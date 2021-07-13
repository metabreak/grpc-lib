"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PbwscFile = void 0;
const path_1 = require("path");
const services_1 = require("../../services");
const worker_service_client_1 = require("../types/worker-service-client");
class PbwscFile {
    proto;
    constructor(proto) {
        this.proto = proto;
    }
    print(printer) {
        services_1.Services.Logger.debug(`Start printing pbwsc for ${this.proto.name}`);
        const fileName = path_1.basename(this.proto.getGeneratedFileBaseName());
        printer.addLine(`import * as thisProto from './${fileName}';`);
        printer.add(this.proto.getImportedDependencies());
        this.proto.serviceList.forEach((service) => new worker_service_client_1.WorkerServiceClient(this.proto, service).print(printer));
        services_1.Services.Logger.debug(`End printing pbwsc for ${this.proto.name}`);
    }
}
exports.PbwscFile = PbwscFile;
//# sourceMappingURL=pbwsc-file.js.map