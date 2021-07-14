"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumMessageField = void 0;
const types_1 = require("../../../input/types");
const utils_1 = require("../../../utils");
const helpers_1 = require("../../misc/helpers");
class EnumMessageField {
    proto;
    message;
    messageField;
    oneOf;
    attributeName;
    dataType;
    notRepeatedDataType;
    isArray;
    isPacked;
    constructor(proto, message, messageField, oneOf) {
        this.proto = proto;
        this.message = message;
        this.messageField = messageField;
        this.oneOf = oneOf;
        this.attributeName = utils_1.camelizeSafe(this.messageField.name);
        this.isArray =
            this.messageField.label === types_1.ProtoMessageFieldCardinality.repeated;
        this.isPacked = helpers_1.isPacked(this.proto, this.messageField);
        this.dataType = helpers_1.getDataType(this.proto, this.messageField);
        this.notRepeatedDataType = helpers_1.getDataType(this.proto, this.messageField, {
            ignoreRepeating: true,
        });
    }
    printDeserializeBinaryFromReader(printer) {
        if (this.isPacked) {
            printer.add(`case ${this.messageField.number}: (_instance.${this.attributeName} = _instance.${this.attributeName} ?? []).push(...(_reader.readPackedEnum() ?? []));`);
        }
        else if (this.isArray) {
            printer.add(`case ${this.messageField.number}: (_instance.${this.attributeName} = _instance.${this.attributeName} ?? []).push(_reader.readEnum());`);
        }
        else {
            printer.add(`case ${this.messageField.number}: _instance.${this.attributeName} = _reader.readEnum();`);
        }
        printer.add('break;');
    }
    printSerializeBinaryToWriter(printer) {
        if (this.isPacked) {
            printer.add(`if (_instance.${this.attributeName} && _instance.${this.attributeName}.length) {
        _writer.writePackedEnum(${this.messageField.number}, _instance.${this.attributeName});
      }`);
        }
        else if (this.isArray) {
            printer.add(`if (_instance.${this.attributeName} && _instance.${this.attributeName}.length) {
        _writer.writeRepeatedEnum(${this.messageField.number}, _instance.${this.attributeName});
      }`);
        }
        else if (this.oneOf) {
            printer.add(`if (_instance.${this.attributeName} || _instance.${this.attributeName} === 0) {
        _writer.writeEnum(${this.messageField.number}, _instance.${this.attributeName});
      }`);
        }
        else if (this.messageField.proto3Optional) {
            printer.add(`if (_instance.${this.attributeName} !== undefined && _instance.${this.attributeName} !== null) {
        _writer.writeEnum(${this.messageField.number}, _instance.${this.attributeName});
      }`);
        }
        else {
            printer.add(`if (_instance.${this.attributeName}) {
        _writer.writeEnum(${this.messageField.number}, _instance.${this.attributeName});
      }`);
        }
    }
    printPrivateAttribute(printer) {
        printer.add(`private _${this.attributeName}?: ${this.dataType};`);
    }
    printInitializer(printer) {
        if (this.isArray) {
            printer.add(`this.${this.attributeName} = (_value.${this.attributeName} ?? []).slice();`);
        }
        else {
            printer.add(`this.${this.attributeName} = _value.${this.attributeName}`);
        }
    }
    printDefaultValueSetter(printer) {
        if (this.oneOf || this.messageField.proto3Optional) {
            return;
        }
        else if (this.isArray) {
            printer.add(`_instance.${this.attributeName} = _instance.${this.attributeName} ?? []`);
        }
        else {
            printer.add(`_instance.${this.attributeName} = _instance.${this.attributeName} || 0`);
        }
    }
    printGetter(printer) {
        printer.add(`get ${this.attributeName}(): ${this.dataType} | undefined { return this._${this.attributeName} }`);
    }
    printSetter(printer) {
        printer.add(`set ${this.attributeName}(value: ${this.dataType} | undefined) {
      ${this.oneOf ? this.oneOf.createFieldSetterAddon(this.messageField) : ''}
      this._${this.attributeName} = value;
    }`);
    }
    printToObjectMapping(printer) {
        if (this.isArray) {
            printer.add(`${this.attributeName}: (this.${this.attributeName} ?? []).slice(),`);
        }
        else {
            printer.add(`${this.attributeName}: this.${this.attributeName},`);
        }
    }
    printAsObjectMapping(printer) {
        printer.add(`${this.attributeName}?: ${this.dataType};`);
    }
    printToProtobufJSONMapping(printer) {
        if (this.isArray) {
            printer.add(`${this.attributeName}: (this.${this.attributeName} ?? []).map(v => ${this.notRepeatedDataType}[v]),`);
        }
        else {
            printer.add(`${this.attributeName}: ${this.oneOf || this.messageField.proto3Optional
                ? `this.${this.attributeName} === undefined ? null : `
                : ''}${this.notRepeatedDataType}[this.${this.attributeName} ?? 0],`);
        }
    }
    printAsJSONMapping(printer) {
        printer.add(`${this.attributeName}?: string${this.isArray ? '[]' : ''}${this.oneOf || this.messageField.proto3Optional ? ' | null' : ''};`);
    }
}
exports.EnumMessageField = EnumMessageField;
//# sourceMappingURL=enum-message-field.js.map