"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BytesMessageField = void 0;
const types_1 = require("../../../input/types");
const utils_1 = require("../../../utils");
const dependencies_1 = require("../../misc/dependencies");
const helpers_1 = require("../../misc/helpers");
class BytesMessageField {
    proto;
    message;
    messageField;
    oneOf;
    attributeName;
    dataType;
    isArray;
    constructor(proto, message, messageField, oneOf) {
        this.proto = proto;
        this.message = message;
        this.messageField = messageField;
        this.oneOf = oneOf;
        this.attributeName = utils_1.camelizeSafe(this.messageField.name);
        this.isArray =
            this.messageField.label === types_1.ProtoMessageFieldCardinality.repeated;
        this.dataType = helpers_1.getDataType(this.proto, this.messageField);
    }
    printDeserializeBinaryFromReader(printer) {
        const readerCall = '_reader.readBytes()';
        if (this.isArray) {
            printer.add(`case ${this.messageField.number}: (_instance.${this.attributeName} = _instance.${this.attributeName} ?? []).push(${readerCall});`);
        }
        else {
            printer.add(`case ${this.messageField.number}: _instance.${this.attributeName} = ${readerCall};`);
        }
        printer.add('break;');
    }
    printSerializeBinaryToWriter(printer) {
        if (this.messageField.proto3Optional) {
            printer.add(`if (_instance.${this.attributeName} !== undefined && _instance.${this.attributeName} !== null) {
        _writer.writeBytes(${this.messageField.number}, _instance.${this.attributeName});
      }`);
        }
        else {
            printer.add(`if (_instance.${this.attributeName} && _instance.${this.attributeName}.length) {
      _writer.write${this.isArray ? 'Repeated' : ''}Bytes(${this.messageField.number}, _instance.${this.attributeName});
    }`);
        }
    }
    printPrivateAttribute(printer) {
        printer.add(`private _${this.attributeName}?: ${this.dataType};`);
    }
    printInitializer(printer) {
        if (this.isArray) {
            printer.add(`this.${this.attributeName} = (_value.${this.attributeName} ?? []).map(b => b ? b.subarray(0) : new Uint8Array());`);
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
            printer.add(`_instance.${this.attributeName} = _instance.${this.attributeName} || new Uint8Array()`);
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
            printer.add(`${this.attributeName}: (this.${this.attributeName} ?? []).map(b => b ? b.subarray(0) : new Uint8Array()),`);
        }
        else {
            printer.add(`${this.attributeName}: this.${this.attributeName} ? this.${this.attributeName}.subarray(0) : ${this.messageField.proto3Optional ? 'undefined' : 'new Uint8Array()'},`);
        }
    }
    printAsObjectMapping(printer) {
        printer.add(`${this.attributeName}?: ${this.dataType};`);
    }
    printToProtobufJSONMapping(printer) {
        printer.addDeps(dependencies_1.ExternalDependencies.uint8ArrayToBase64);
        if (this.isArray) {
            printer.add(`${this.attributeName}: (this.${this.attributeName} ?? []).map(b => b ? uint8ArrayToBase64(b) : ''),`);
        }
        else {
            printer.add(`${this.attributeName}: this.${this.attributeName} ? uint8ArrayToBase64(this.${this.attributeName}) : ${this.messageField.proto3Optional ? 'null' : "''"},`);
        }
    }
    printAsJSONMapping(printer) {
        if (this.messageField.proto3Optional) {
            printer.add(`${this.attributeName}?: string | null;`);
        }
        else {
            printer.add(`${this.attributeName}?: string${this.isArray ? '[]' : ''};`);
        }
    }
}
exports.BytesMessageField = BytesMessageField;
//# sourceMappingURL=bytes-message-field.js.map