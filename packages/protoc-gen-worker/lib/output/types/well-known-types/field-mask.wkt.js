"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldMaskWKT = void 0;
class FieldMaskWKT {
    printToProtobufJSON(printer) {
        printer.addLine(`return this.paths.join(',');`);
    }
    printAsProtobufJSON(printer) {
        printer.addLine(`export type AsProtobufJSON = string;`);
    }
}
exports.FieldMaskWKT = FieldMaskWKT;
//# sourceMappingURL=field-mask.wkt.js.map