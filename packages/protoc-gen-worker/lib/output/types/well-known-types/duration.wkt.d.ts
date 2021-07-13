import { Printer } from '../../misc/printer';
import { WKT } from '../wkt';
export declare class DurationWKT implements WKT {
    printToProtobufJSON(printer: Printer): void;
    printAsProtobufJSON(printer: Printer): void;
}
