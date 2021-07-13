"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimestampWKT = void 0;
class TimestampWKT {
    printStaticMethods(printer) {
        printer.addLine(`
      static fromDate(date: Date) {
        const timestamp = new Timestamp();

        timestamp.fromDate(date);

        return timestamp;
      }

      static fromISOString(isoDate: string) {
        const timestamp = new Timestamp();

        timestamp.fromISOString(isoDate);

        return timestamp;
      }
    `);
    }
    printMemberMethods(printer) {
        printer.addLine(`
      fromDate(date: Date) {
        this.seconds = ''+Math.floor(date.getTime() / 1e3);
        this.nanos = date.getMilliseconds() * 1e6;
      }

      toDate() {
        return new Date(parseInt(this.seconds || '0') * 1e3 + (this.nanos || 0) / 1e6);
      }

      fromISOString(isoDate: string) {
        this.fromDate(new Date(isoDate));
      }

      toISOString() {
        return this.toDate().toISOString();
      }
    `);
    }
    printToProtobufJSON(printer) {
        printer.addLine(`return this.toISOString();`);
    }
    printAsProtobufJSON(printer) {
        printer.addLine(`export type AsProtobufJSON = string;`);
    }
}
exports.TimestampWKT = TimestampWKT;
//# sourceMappingURL=timestamp.wkt.js.map