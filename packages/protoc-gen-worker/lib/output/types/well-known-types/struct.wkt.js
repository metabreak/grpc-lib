"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListValueWKT = exports.ValueWKT = exports.StructWKT = void 0;
class StructWKT {
    printToProtobufJSON(printer) {
        printer.addLine(`return this.fields ? Object.keys(this.fields).reduce((r, k) => ({ ...r, [k]: this.fields![k] ? this.fields![k].toProtobufJSON(options) : {} }), {}) : {};`);
    }
    printAsProtobufJSON(printer) {
        printer.addLine(`export type AsProtobufJSON = { [prop: string]: Value.AsProtobufJSON; };`);
    }
}
exports.StructWKT = StructWKT;
class ValueWKT {
    printToProtobufJSON(printer) {
        printer.addLine(`
      switch(this.kind) {
        case Value.KindCase.nullValue: return null;
        case Value.KindCase.numberValue: return this.numberValue!;
        case Value.KindCase.stringValue: return this.stringValue!;
        case Value.KindCase.boolValue: return this.boolValue!;
        case Value.KindCase.structValue: return this.structValue ? this.structValue.toProtobufJSON(options) : null;
        case Value.KindCase.listValue: return this.listValue ? this.listValue.toProtobufJSON(options) : null;
        default: return null; // yes, according to standard should throw error, but no, it's not going to happen here
      }
    `);
    }
    printAsProtobufJSON(printer) {
        printer.addLine(`export type AsProtobufJSON = null | string | number | boolean | Struct.AsProtobufJSON | Value.AsProtobufJSON[];`);
    }
}
exports.ValueWKT = ValueWKT;
class ListValueWKT {
    printToProtobufJSON(printer) {
        printer.addLine(`return (this.values ?? []).map(v => v?.toProtobufJSON(options) ?? null);`);
    }
    printAsProtobufJSON(printer) {
        printer.addLine(`export type AsProtobufJSON = Value.AsProtobufJSON[];`);
    }
}
exports.ListValueWKT = ListValueWKT;
//# sourceMappingURL=struct.wkt.js.map