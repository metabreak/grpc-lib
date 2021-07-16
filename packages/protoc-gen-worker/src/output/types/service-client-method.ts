import { Proto } from '../../input/proto';
import { ProtoService } from '../../input/proto-service';
import { ServiceMethod } from '../../input/proto-service-method';
import { Services } from '../../services';
import { camelizeSafe } from '../../utils';
import { ExternalDependencies } from '../misc/dependencies';
import { Printer } from '../misc/printer';

export class ServiceClientMethod {
  private serviceUrlPrefix: string;
  private inputType: string;
  private outputType: string;
  private rpcPath: string;

  constructor(
    private proto: Proto,
    private service: ProtoService,
    private serviceMethod: ServiceMethod,
  ) {
    this.serviceUrlPrefix = this.proto.pb_package
      ? this.proto.pb_package + '.'
      : '';
    this.inputType = this.proto.getRelativeTypeName(
      this.serviceMethod.inputType,
      'thisProto',
    );
    this.outputType = this.proto.getRelativeTypeName(
      this.serviceMethod.outputType,
      'thisProto',
    );
    this.rpcPath = `/${this.serviceUrlPrefix}${this.service.name}/${this.serviceMethod.name}`;
  }

  printMethod(printer: Printer) {
    Services.Logger.debug(
      `Start printing service client method ${this.serviceMethod.name} @ ${this.service.name} in proto ${this.proto.name}`,
    );

    printer.addDeps(
      ExternalDependencies.GrpcMetadata,
      ExternalDependencies.GrpcEvent,
      ExternalDependencies.Observable,
    );

    const camelizeMethodName = camelizeSafe(this.serviceMethod.name);
    const callType = this.serviceMethod.serverStreaming
      ? 'Server streaming'
      : 'Unary';
    const clientCallType = this.serviceMethod.serverStreaming
      ? 'serverStream'
      : 'unary';
    const isDeprecated =
      !!this.serviceMethod.options && this.serviceMethod.options.deprecated;

    const typeDocString = [
      '/**',
      ` * ${callType} RPC for ${this.rpcPath}`,
      isDeprecated ? ' * @deprecated' : undefined,
      ' * @param requestData Request data',
      ' * @param requestMetadata Request metadata',
      ` * @returns Observable<${this.outputType}>`,
      ' */',
    ]
      .filter(Boolean)
      .join('\n');

    printer.add(`
      ${typeDocString}
      ${camelizeMethodName}(
        requestData?: ${this.inputType}.AsObject,
        requestMetadata: any = {}
      ): Observable<GrpcEvent<${this.outputType}>> {
        const grpcRequest = new ${this.inputType}(requestData);
        const grpcMetadata = new GrpcMetadata(requestMetadata);

        return this.client.${clientCallType}(
          '${this.rpcPath}',
          grpcRequest,
          grpcMetadata,
          ${this.inputType},
          ${this.outputType}
        );
      }
    `);

    Services.Logger.debug(
      `End printing service client method ${this.serviceMethod.name} @ ${this.service.name} in proto ${this.proto.name}`,
    );
  }
}
