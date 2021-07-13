"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enum = void 0;
const utils_1 = require("../../utils");
class Enum {
    proto;
    protoEnum;
    constructor(proto, protoEnum) {
        this.proto = proto;
        this.protoEnum = protoEnum;
    }
    print(printer) {
        printer.add(`export enum ${utils_1.classify(this.protoEnum.name)} {
      ${this.protoEnum.valueList
            .map((v) => `${utils_1.preserveCaseSafe(v.name)} = ${v.number}`)
            .join(',')}
    }`);
    }
}
exports.Enum = Enum;
//# sourceMappingURL=enum.js.map