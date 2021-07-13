"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OneOf = void 0;
const proto_enum_1 = require("../../input/proto-enum");
const utils_1 = require("../../utils");
const enum_1 = require("./enum");
class OneOf {
    proto;
    message;
    oneof;
    attributeName;
    enumName;
    index;
    fields;
    synthetic;
    constructor(proto, message, oneof) {
        this.proto = proto;
        this.message = message;
        this.oneof = oneof;
        this.attributeName = utils_1.camelizeSafe(this.oneof.name);
        this.enumName = utils_1.classify(this.oneof.name) + 'Case';
        this.index = message.oneofDeclList.indexOf(this.oneof);
        this.fields = message.fieldList.filter((f) => f.oneofIndex === this.index);
        this.synthetic = this.fields.every((field) => field.proto3Optional);
    }
    isSyntheticOneOf() {
        return this.synthetic;
    }
    printEnum(printer) {
        const protoEnum = new proto_enum_1.ProtoEnum({
            name: this.enumName,
            reservedNameList: [],
            reservedRangeList: [],
            valueList: [
                { name: 'none', number: 0 },
                ...this.fields.map((f, fi) => ({
                    name: utils_1.camelizeSafe(f.name),
                    number: fi + 1,
                })),
            ],
        });
        new enum_1.Enum(this.proto, protoEnum).print(printer);
    }
    printPrivateAttribute(printer) {
        const type = `${this.message.name}.${this.enumName}`;
        printer.add(`private _${this.attributeName}: ${type} = ${type}.none;`);
    }
    printGetter(printer) {
        printer.add(`get ${this.attributeName}() { return this._${this.attributeName}; }`);
    }
    createFieldSetterAddon(field) {
        const otherFields = this.message.fieldList
            .filter((ff) => ff.oneofIndex === field.oneofIndex && ff.name !== field.name)
            .map((ff) => `this._${utils_1.camelizeSafe(ff.name)}`);
        return `if (value !== undefined && value !== null) {
          ${otherFields.length ? [...otherFields, 'undefined'].join(' = ') : ''}
          this._${utils_1.camelizeSafe(this.attributeName)} = ${this.message.name}.${this.enumName}.${utils_1.camelizeSafe(field.name)};
        }`;
    }
}
exports.OneOf = OneOf;
//# sourceMappingURL=oneof.js.map