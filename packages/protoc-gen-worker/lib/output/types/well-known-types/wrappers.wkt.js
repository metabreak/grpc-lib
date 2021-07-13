"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UInt64ValueWKT = exports.UInt32ValueWKT = exports.StringValueWKT = exports.Int64ValueWKT = exports.Int32ValueWKT = exports.FloatValueWKT = exports.DoubleValueWKT = exports.BytesValueWKT = exports.BoolValueWKT = void 0;
const dependencies_1 = require("../../misc/dependencies");
class BoolValueWKT {
    printToProtobufJSON(printer) {
        printer.addLine(`return this.value;`);
    }
    printAsProtobufJSON(printer) {
        printer.addLine(`export type AsProtobufJSON = boolean;`);
    }
}
exports.BoolValueWKT = BoolValueWKT;
class BytesValueWKT {
    printToProtobufJSON(printer) {
        printer.addDeps(dependencies_1.ExternalDependencies.uint8ArrayToBase64);
        printer.addLine(`return this.value ? uint8ArrayToBase64(this.value) : '';`);
    }
    printAsProtobufJSON(printer) {
        printer.addLine(`export type AsProtobufJSON = string;`);
    }
}
exports.BytesValueWKT = BytesValueWKT;
class DoubleValueWKT {
    printToProtobufJSON(printer) {
        printer.addLine(`return this.value;`);
    }
    printAsProtobufJSON(printer) {
        printer.addLine(`export type AsProtobufJSON = number;`);
    }
}
exports.DoubleValueWKT = DoubleValueWKT;
class FloatValueWKT {
    printToProtobufJSON(printer) {
        printer.addLine(`return this.value;`);
    }
    printAsProtobufJSON(printer) {
        printer.addLine(`export type AsProtobufJSON = number;`);
    }
}
exports.FloatValueWKT = FloatValueWKT;
class Int32ValueWKT {
    printToProtobufJSON(printer) {
        printer.addLine(`return this.value;`);
    }
    printAsProtobufJSON(printer) {
        printer.addLine(`export type AsProtobufJSON = number;`);
    }
}
exports.Int32ValueWKT = Int32ValueWKT;
class Int64ValueWKT {
    printToProtobufJSON(printer) {
        printer.addLine(`return this.value;`);
    }
    printAsProtobufJSON(printer) {
        printer.addLine(`export type AsProtobufJSON = string;`);
    }
}
exports.Int64ValueWKT = Int64ValueWKT;
class StringValueWKT {
    printToProtobufJSON(printer) {
        printer.addLine(`return this.value;`);
    }
    printAsProtobufJSON(printer) {
        printer.addLine(`export type AsProtobufJSON = string;`);
    }
}
exports.StringValueWKT = StringValueWKT;
class UInt32ValueWKT {
    printToProtobufJSON(printer) {
        printer.addLine(`return this.value;`);
    }
    printAsProtobufJSON(printer) {
        printer.addLine(`export type AsProtobufJSON = number;`);
    }
}
exports.UInt32ValueWKT = UInt32ValueWKT;
class UInt64ValueWKT {
    printToProtobufJSON(printer) {
        printer.addLine(`return this.value;`);
    }
    printAsProtobufJSON(printer) {
        printer.addLine(`export type AsProtobufJSON = string;`);
    }
}
exports.UInt64ValueWKT = UInt64ValueWKT;
//# sourceMappingURL=wrappers.wkt.js.map