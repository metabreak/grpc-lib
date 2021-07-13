import { Proto } from '../../input/proto';
import { Printer } from '../misc/printer';
export declare class PbFile {
    private proto;
    constructor(proto: Proto);
    print(printer: Printer): void;
}
