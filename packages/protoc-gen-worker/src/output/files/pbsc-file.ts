import { basename } from 'path';
import { Proto } from '../../input/proto';
import { Services } from '../../services';
import { Printer } from '../misc/printer';
import { ServiceClient } from '../types/service-client';

export class PbscFile {
  constructor(private proto: Proto) {}

  print(printer: Printer): void {
    Services.Logger.debug(`Start printing pbsc for ${this.proto.name}`);

    const serviceClients: ServiceClient[] = [];

    this.proto.serviceList.forEach((service) => {
      const serviceClient = new ServiceClient(this.proto, service);

      serviceClients.push(serviceClient);
    });

    const fileName = basename(this.proto.getGeneratedFileBaseName());

    printer.addLine(`import * as thisProto from './${fileName}';`);

    printer.add(this.proto.getImportedDependencies());

    printer.addLine('\n');

    serviceClients.forEach((serviceClient) => {
      serviceClient.print(printer);
    });

    Services.Logger.debug(`End printing pbsc for ${this.proto.name}`);
  }
}
