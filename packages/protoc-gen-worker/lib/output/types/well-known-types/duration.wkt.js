"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DurationWKT = void 0;
class DurationWKT {
    printToProtobufJSON(printer) {
        printer.addLine(`return (parseInt(this.seconds || '0') + (this.nanos || 0) / 1e9) + 's';`);
    }
    printAsProtobufJSON(printer) {
        printer.addLine(`export type AsProtobufJSON = string;`);
    }
}
exports.DurationWKT = DurationWKT;
//# sourceMappingURL=duration.wkt.js.map