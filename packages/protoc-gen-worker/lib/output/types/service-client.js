"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceClient = void 0;
const services_1 = require("../../services");
const dependencies_1 = require("../misc/dependencies");
const service_client_method_1 = require("./service-client-method");
class ServiceClient {
    proto;
    service;
    constructor(proto, service) {
        this.proto = proto;
        this.service = service;
    }
    print(printer) {
        services_1.Services.Logger.debug(`Start printing service client ${this.service.name} in proto ${this.proto.name}`);
        printer.addDeps(dependencies_1.ExternalDependencies.GrpcClient, dependencies_1.ExternalDependencies.GrpcHandler, dependencies_1.ExternalDependencies.GrpcClientFactory);
        const serviceId = (this.proto.pb_package ? this.proto.pb_package + '.' : '') +
            this.service.name;
        printer.add(`
      /**
       * Service client implementation for ${serviceId}
       */
      export class ${this.service.name}Client {
        private client: GrpcClient<any>;

        /**
         * Raw RPC implementation for each service client method.
         * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status \`OK\` metadata.
         * Attention: these methods do not throw errors when non-zero status codes are received.
         */
        $raw = {`);
        this.service.methodList.forEach((method) => {
            const serviceClientMethod = new service_client_method_1.ServiceClientMethod(this.proto, this.service, method);
            serviceClientMethod.printRawMethod(printer);
            printer.add(',');
            printer.newLine();
            printer.newLine();
        });
        printer.add(`
        };

        constructor(
          settings: any,
          clientFactory: GrpcClientFactory<any>,
          private handler: GrpcHandler,
        ) {
          this.client = clientFactory.createClient('${serviceId}', settings);
        }
    `);
        this.service.methodList.forEach((method) => {
            const serviceClientMethod = new service_client_method_1.ServiceClientMethod(this.proto, this.service, method);
            serviceClientMethod.printMethod(printer);
            printer.newLine();
            printer.newLine();
        });
        printer.add('}');
        services_1.Services.Logger.debug(`End printing service client ${this.service.name} in proto ${this.proto.name}`);
    }
}
exports.ServiceClient = ServiceClient;
//# sourceMappingURL=service-client.js.map