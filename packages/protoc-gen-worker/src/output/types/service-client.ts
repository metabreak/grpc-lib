import { Proto } from '../../input/proto';
import { ProtoService } from '../../input/proto-service';
import { Services } from '../../services';
import { ExternalDependencies } from '../misc/dependencies';
import { Printer } from '../misc/printer';
import { ServiceClientMethod } from './service-client-method';

export class ServiceClient {
  constructor(private proto: Proto, private service: ProtoService) {}

  print(printer: Printer) {
    Services.Logger.debug(
      `Start printing service client ${this.service.name} in proto ${this.proto.name}`,
    );

    printer.addDeps(ExternalDependencies.GrpcClient);

    const serviceId =
      (this.proto.pb_package ? this.proto.pb_package + '.' : '') +
      this.service.name;

    printer.add(`
      /**
       * Service client implementation for ${serviceId}
       */
      export class ${this.service.name}Service {
        constructor(private client: GrpcClient<unknown>) {}
    `);

    printer.newLine();

    this.service.methodList.forEach((method) => {
      const serviceClientMethod = new ServiceClientMethod(
        this.proto,
        this.service,
        method,
      );

      serviceClientMethod.printMethod(printer);

      printer.newLine();
    });

    printer.add('}');

    Services.Logger.debug(
      `End printing service client ${this.service.name} in proto ${this.proto.name}`,
    );
  }
}
