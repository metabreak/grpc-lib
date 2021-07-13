import { Proto } from '../../input/proto';
import { ProtoService } from '../../input/proto-service';
import { Printer } from '../misc/printer';
export declare class ServiceClient {
    private proto;
    private service;
    constructor(proto: Proto, service: ProtoService);
    print(printer: Printer): void;
}
