"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkerServiceClient = void 0;
const dependencies_1 = require("../misc/dependencies");
class WorkerServiceClient {
    proto;
    service;
    constructor(proto, service) {
        this.proto = proto;
        this.service = service;
    }
    print(printer) {
        printer.addDeps(dependencies_1.ExternalDependencies.GrpcCallType, dependencies_1.ExternalDependencies.GrpcWorkerServiceClientDef);
        const serviceName = (this.proto.pb_package ? this.proto.pb_package + '.' : '') +
            this.service.name;
        const serviceId = (this.proto.pb_package ? this.proto.pb_package + '.' : '') +
            this.service.name;
        const methods = this.service.methodList.map((method) => {
            const callType = method.serverStreaming ? 'serverStream' : 'unary';
            const inputType = this.proto.getRelativeTypeName(method.inputType, 'thisProto');
            const outputType = this.proto.getRelativeTypeName(method.outputType, 'thisProto');
            return `'/${serviceName}/${method.name}': { type: GrpcCallType.${callType}, reqclss: ${inputType}, resclss: ${outputType} }`;
        });
        printer.add(`
      /**
       * Client definition for use in worker
       */
      export const GrpcWorker${this.service.name}ClientDef: GrpcWorkerServiceClientDef = {
        serviceId: '${serviceId}',
        methods: {
          ${methods.join(',\n')}
        },
      };
    `);
    }
}
exports.WorkerServiceClient = WorkerServiceClient;
//# sourceMappingURL=worker-service-client.js.map