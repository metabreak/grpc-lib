import { Printer } from '../../misc/printer';
import { WKT } from '../wkt';
export declare class StructWKT implements WKT {
    printToProtobufJSON(printer: Printer): void;
    printAsProtobufJSON(printer: Printer): void;
}
export declare class ValueWKT implements WKT {
    printToProtobufJSON(printer: Printer): void;
    printAsProtobufJSON(printer: Printer): void;
}
export declare class ListValueWKT implements WKT {
    printToProtobufJSON(printer: Printer): void;
    printAsProtobufJSON(printer: Printer): void;
}
