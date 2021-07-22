import { Printer } from '../../misc/printer';
import { WKT } from '../wkt';

export class DurationWKT implements WKT {
  printToProtobufJSON(printer: Printer): void {
    // TODO big math
    printer.addLine(
      `return (parseInt(this.seconds || '0') + (this.nanos || 0) / 1e9) + 's';`,
    );
  }

  printAsProtobufJSON(printer: Printer): void {
    printer.addLine(`export type AsProtobufJSON = string;`);
  }
}
