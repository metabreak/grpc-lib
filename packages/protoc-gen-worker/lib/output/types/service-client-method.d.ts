import { Proto } from '../../input/proto';
import { ProtoService } from '../../input/proto-service';
import { ServiceMethod } from '../../input/proto-service-method';
import { Printer } from '../misc/printer';
export declare class ServiceClientMethod {
    private proto;
    private service;
    private serviceMethod;
    private serviceUrlPrefix;
    private inputType;
    private outputType;
    private rpcPath;
    constructor(proto: Proto, service: ProtoService, serviceMethod: ServiceMethod);
    printMethod(printer: Printer): void;
    printRawMethod(printer: Printer): void;
}
