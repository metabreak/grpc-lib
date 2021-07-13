import { Printer } from '../../misc/printer';
import { WKT } from '../wkt';
export declare class TimestampWKT implements WKT {
    printStaticMethods(printer: Printer): void;
    printMemberMethods(printer: Printer): void;
    printToProtobufJSON(printer: Printer): void;
    printAsProtobufJSON(printer: Printer): void;
}
