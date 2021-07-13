"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapMessageField = void 0;
const types_1 = require("../../../input/types");
const utils_1 = require("../../../utils");
const helpers_1 = require("../../misc/helpers");
class MapMessageField {
    proto;
    message;
    messageField;
    oneOf;
    attributeName;
    dataType;
    keyField;
    valueField;
    mapMessageClassName;
    constructor(proto, message, messageField, oneOf) {
        this.proto = proto;
        this.message = message;
        this.messageField = messageField;
        this.oneOf = oneOf;
        this.attributeName = utils_1.camelizeSafe(this.messageField.name);
        [this.keyField, this.valueField] = helpers_1.getMapKeyValueFields(this.proto, this.messageField);
        this.dataType = helpers_1.getDataType(this.proto, this.messageField);
        this.mapMessageClassName = this.proto.getRelativeTypeName(this.messageField.typeName);
    }
    printDeserializeBinaryFromReader(printer) {
        const msgVarName = `msg_${this.messageField.number}`;
        const isStringKey = this.keyField.type === types_1.ProtoMessageFieldType.string ||
            helpers_1.isNumberString(this.keyField);
        const castedKey = isStringKey
            ? `${msgVarName}.key`
            : `Number(${msgVarName}.key)`;
        printer.add(`case ${this.messageField.number}:
        const ${msgVarName} = {} as any;
        _reader.readMessage(${msgVarName}, ${this.mapMessageClassName}.deserializeBinaryFromReader);
        _instance.${this.attributeName} = _instance.${this.attributeName} || {};
        _instance.${this.attributeName}[${castedKey}] = ${msgVarName}.value;
        break;`);
    }
    printSerializeBinaryToWriter(printer) {
        const varName = `_instance.${this.attributeName}`;
        const keysVarName = `keys_${this.messageField.number}`;
        const repeatedVarName = `repeated_${this.messageField.number}`;
        const isStringKey = this.keyField.type === types_1.ProtoMessageFieldType.string ||
            helpers_1.isNumberString(this.keyField);
        const castedKey = isStringKey ? 'key' : 'Number(key)';
        printer.add(`if (!!${varName}) {
      const ${keysVarName} = Object.keys(${varName} as any);

      if (${keysVarName}.length) {
        const ${repeatedVarName} = ${keysVarName}
          .map(key => ({ key: ${castedKey}, value: (${varName} as any)[key] }))
          .reduce((r, v) => [...r, v], [] as any[]);

        _writer.writeRepeatedMessage(${this.messageField.number}, ${repeatedVarName}, ${this.mapMessageClassName}.serializeBinaryToWriter);
      }
    }`);
    }
    printPrivateAttribute(printer) {
        printer.add(`private _${this.attributeName}?: ${this.dataType};`);
    }
    printInitializer(printer) {
        let cloneFn = `_value!.${this.attributeName}![k]`;
        if (helpers_1.isFieldMessage(this.valueField)) {
            cloneFn = `_value!.${this.attributeName}![k] ? new ${helpers_1.getDataType(this.proto, this.valueField)}(_value!.${this.attributeName}![k]) : undefined,`;
        }
        else if (this.valueField.type === types_1.ProtoMessageFieldType.bytes) {
            cloneFn = `_value!.${this.attributeName}![k] ? _value!.${this.attributeName}![k].subarray(0) : undefined`;
        }
        printer.add(`this.${this.attributeName} = _value!.${this.attributeName} ? Object.keys(_value!.${this.attributeName}).reduce((r, k) => ({ ...r, [k]: ${cloneFn} }), {}) : {},`);
    }
    printDefaultValueSetter(printer) {
        if (this.oneOf) {
            return;
        }
        else {
            printer.add(`_instance.${this.attributeName} = _instance.${this.attributeName} || {}`);
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
        let cloneFn = `this.${this.attributeName}![k]`;
        if (helpers_1.isFieldMessage(this.valueField)) {
            cloneFn = `this.${this.attributeName}![k] ? this.${this.attributeName}![k].toObject() : undefined`;
        }
        else if (this.valueField.type === types_1.ProtoMessageFieldType.bytes) {
            cloneFn = `this.${this.attributeName}![k] ? this.${this.attributeName}![k].subarray(0) : undefined`;
        }
        printer.add(`${this.attributeName}: this.${this.attributeName} ? Object.keys(this.${this.attributeName}).reduce((r, k) => ({ ...r, [k]: ${cloneFn} }), {}) : {},`);
    }
    printAsObjectMapping(printer) {
        printer.add(`${this.attributeName}?: ${this.dataType};`);
    }
    printToProtobufJSONMapping(printer) {
        let cloneFn = `this.${this.attributeName}![k]`;
        if (helpers_1.isFieldMessage(this.valueField)) {
            cloneFn = `this.${this.attributeName}![k] ? this.${this.attributeName}![k].toJSON() : null`;
        }
        else if (this.valueField.type === types_1.ProtoMessageFieldType.bytes) {
            cloneFn = `this.${this.attributeName}![k] ? this.${this.attributeName}![k].subarray(0) : null`;
        }
        printer.add(`${this.attributeName}: this.${this.attributeName} ? Object.keys(this.${this.attributeName}).reduce((r, k) => ({ ...r, [k]: ${cloneFn} }), {}) : {},`);
    }
    printAsJSONMapping(printer) {
        printer.add(`${this.attributeName}?: ${this.dataType};`);
    }
}
exports.MapMessageField = MapMessageField;
//# sourceMappingURL=map-message-field.js.map