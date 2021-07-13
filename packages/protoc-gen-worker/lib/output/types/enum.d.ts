import { Proto } from '../../input/proto';
import { ProtoEnum } from '../../input/proto-enum';
import { Printer } from '../misc/printer';
export declare class Enum {
    private proto;
    private protoEnum;
    constructor(proto: Proto, protoEnum: ProtoEnum);
    print(printer: Printer): void;
}
