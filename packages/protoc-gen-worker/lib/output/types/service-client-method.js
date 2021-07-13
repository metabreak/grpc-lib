"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceClientMethod = void 0;
const services_1 = require("../../services");
const utils_1 = require("../../utils");
const dependencies_1 = require("../misc/dependencies");
class ServiceClientMethod {
    proto;
    service;
    serviceMethod;
    serviceUrlPrefix;
    inputType;
    outputType;
    rpcPath;
    constructor(proto, service, serviceMethod) {
        this.proto = proto;
        this.service = service;
        this.serviceMethod = serviceMethod;
        this.serviceUrlPrefix = this.proto.pb_package
            ? this.proto.pb_package + '.'
            : '';
        this.inputType = this.proto.getRelativeTypeName(this.serviceMethod.inputType, 'thisProto');
        this.outputType = this.proto.getRelativeTypeName(this.serviceMethod.outputType, 'thisProto');
        this.rpcPath = `/${this.serviceUrlPrefix}${this.service.name}/${this.serviceMethod.name}`;
    }
    printMethod(printer) {
        services_1.Services.Logger.debug(`Start printing service client method ${this.serviceMethod.name} @ ${this.service.name} in proto ${this.proto.name}`);
        printer.addDeps(dependencies_1.ExternalDependencies.GrpcMetadata, dependencies_1.ExternalDependencies.Observable, dependencies_1.ExternalDependencies.takeMessages, dependencies_1.ExternalDependencies.throwStatusErrors);
        printer.add(`
      /**
       * ${this.serviceMethod.serverStreaming ? 'Server streaming' : 'Unary'} RPC for ${this.rpcPath}
       * ${!!this.serviceMethod.options && this.serviceMethod.options.deprecated
            ? '@deprecated'
            : ''}
       * @param requestMessage Request message
       * @param requestMetadata Request metadata
       * @returns Observable<${this.outputType}>
       */
      ${utils_1.camelizeSafe(this.serviceMethod.name)}(requestData: ${this.inputType}, requestMetadata = new GrpcMetadata()): Observable<${this.outputType}> {
        return this.$raw.${utils_1.camelizeSafe(this.serviceMethod.name)}(requestData, requestMetadata).pipe(throwStatusErrors(), takeMessages());
      }
    `);
        services_1.Services.Logger.debug(`End printing service client method ${this.serviceMethod.name} @ ${this.service.name} in proto ${this.proto.name}`);
    }
    printRawMethod(printer) {
        services_1.Services.Logger.debug(`Start printing $raw service client method ${this.serviceMethod.name} @ ${this.service.name} in proto ${this.proto.name}`);
        printer.addDeps(dependencies_1.ExternalDependencies.GrpcCallType, dependencies_1.ExternalDependencies.GrpcEvent, dependencies_1.ExternalDependencies.GrpcMetadata, dependencies_1.ExternalDependencies.Observable);
        printer.add(`
      /**
       * ${this.serviceMethod.serverStreaming ? 'Server streaming' : 'Unary'} RPC for ${this.rpcPath}
       * ${!!this.serviceMethod.options && this.serviceMethod.options.deprecated
            ? '@deprecated'
            : ''}
       * @param requestMessage Request message
       * @param requestMetadata Request metadata
       * @returns Observable<GrpcEvent<${this.outputType}>>
       */
      ${utils_1.camelizeSafe(this.serviceMethod.name)}: (requestData: ${this.inputType}, requestMetadata = new GrpcMetadata()): Observable<GrpcEvent<${this.outputType}>> => {
        return this.handler.handle({
          type: GrpcCallType.${this.serviceMethod.serverStreaming ? 'serverStream' : 'unary'},
          client: this.client,
          path: '${this.rpcPath}',
          requestData,
          requestMetadata,
          requestClass: ${this.inputType},
          responseClass: ${this.outputType},
        });
      }
    `);
        services_1.Services.Logger.debug(`End printing $raw service client method ${this.serviceMethod.name} @ ${this.service.name} in proto ${this.proto.name}`);
    }
}
exports.ServiceClientMethod = ServiceClientMethod;
//# sourceMappingURL=service-client-method.js.map