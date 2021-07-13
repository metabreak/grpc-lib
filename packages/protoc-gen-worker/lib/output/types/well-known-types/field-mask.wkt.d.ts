import { Printer } from '../../misc/printer';
import { WKT } from '../wkt';
export declare class FieldMaskWKT implements WKT {
    printToProtobufJSON(printer: Printer): void;
    printAsProtobufJSON(printer: Printer): void;
}
