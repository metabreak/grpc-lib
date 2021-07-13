import { Proto } from '../../input/proto';
import { ProtoService } from '../../input/proto-service';
import { Printer } from '../misc/printer';
export declare class ServiceClientConfig {
    private proto;
    private service;
    constructor(proto: Proto, service: ProtoService);
    getTokenName(): string;
    print(printer: Printer): void;
}
