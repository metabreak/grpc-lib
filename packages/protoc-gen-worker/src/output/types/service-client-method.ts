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

  private getMethodTypeDef(isUnary: boolean, isPromise = false): string {
    const callTypeDoc = isUnary ? 'Server streaming' : 'Unary';
    const isDeprecated =
      !!this.serviceMethod.options && this.serviceMethod.options.deprecated;
    const typeDocString = [
      '/**',
      ` * ${callTypeDoc} RPC for ${this.rpcPath}`,
      isDeprecated ? ' * @deprecated' : undefined,
      ' * @param requestData Request data',
      ' * @param requestMetadata Request metadata',
      ` * @returns ${isPromise ? 'Promise' : 'Observable'}<${this.outputType}>`,
      ' */',
    ]
      .filter(Boolean)
      .join('\n');

    return typeDocString;
  }

  printMethod(printer: Printer): void {
    Services.Logger.debug(
      `Start printing service client method ${this.serviceMethod.name} @ ${this.service.name} in proto ${this.proto.name}`,
    );

    printer.addDeps(
      ExternalDependencies.GrpcMetadata,
      ExternalDependencies.GrpcEvent,
      ExternalDependencies.Observable,
    );

    const camelizeMethodName = camelizeSafe(this.serviceMethod.name);
    const clientCallType = this.serviceMethod.serverStreaming
      ? 'serverStream'
      : 'unary';

    if (this.serviceMethod.serverStreaming) {
      printer.add(`
        ${this.getMethodTypeDef(!this.serviceMethod.serverStreaming)}
        ${camelizeMethodName}(
          requestData: ${this.inputType}.AsObject = {},
          requestMetadata: Record<string, string> = {},
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
    } else {
      printer.add(`
        ${this.getMethodTypeDef(this.serviceMethod.serverStreaming)}
        ${camelizeMethodName}AsObservable(
          grpcRequest: ${this.inputType},
          grpcMetadata: GrpcMetadata
        ): Observable<GrpcEvent<${this.outputType}>> {
          return this.client.${clientCallType}AsObservable(
            '${this.rpcPath}',
            grpcRequest,
            grpcMetadata,
            ${this.inputType},
            ${this.outputType}
          );
        }
      `);

      printer.add(`
        ${this.getMethodTypeDef(this.serviceMethod.serverStreaming, true)}
        ${camelizeMethodName}AsPromise(
          grpcRequest: ${this.inputType},
          grpcMetadata: GrpcMetadata
        ): Promise<GrpcEvent<${this.outputType}>> {
          return this.client.${clientCallType}AsPromise(
            '${this.rpcPath}',
            grpcRequest,
            grpcMetadata,
            ${this.inputType},
            ${this.outputType}
          );
        }
      `);

      printer.add(`
        ${camelizeMethodName}(
          requestData: ${this.inputType}.AsObject,
          requestMetadata: Record<string, string>,
          asPromise: true
        ): Promise<GrpcEvent<${this.outputType}>>
        ${camelizeMethodName}(
          requestData: ${this.inputType}.AsObject,
          requestMetadata: Record<string, string>,
          asPromise: false
        ): Observable<GrpcEvent<${this.outputType}>>
        ${camelizeMethodName}(
          requestData: ${this.inputType}.AsObject = {},
          requestMetadata: Record<string, string> = {},
          asPromise = false
        ) {
          const grpcRequest = new ${this.inputType}(requestData);
          const grpcMetadata = new GrpcMetadata(requestMetadata);

          if (asPromise) {
            return this.${camelizeMethodName}AsPromise(grpcRequest, grpcMetadata);
          }

          return this.${camelizeMethodName}AsObservable(grpcRequest, grpcMetadata);
        }
      `);
    }

    Services.Logger.debug(
      `End printing service client method ${this.serviceMethod.name} @ ${this.service.name} in proto ${this.proto.name}`,
    );
  }
}
