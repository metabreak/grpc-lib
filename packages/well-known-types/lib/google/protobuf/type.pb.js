"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Option = exports.EnumValue = exports.Enum = exports.Field = exports.Type = exports.Syntax = void 0;
const google_protobuf_1 = require("google-protobuf");
const googleProtobuf000 = __importStar(require("../../google/protobuf/any.pb"));
const googleProtobuf001 = __importStar(require("../../google/protobuf/source-context.pb"));
var Syntax;
(function (Syntax) {
    Syntax[Syntax["SYNTAX_PROTO2"] = 0] = "SYNTAX_PROTO2";
    Syntax[Syntax["SYNTAX_PROTO3"] = 1] = "SYNTAX_PROTO3";
})(Syntax = exports.Syntax || (exports.Syntax = {}));
class Type {
    static id = 'google.protobuf.Type';
    static deserializeBinary(bytes) {
        const instance = new Type();
        Type.deserializeBinaryFromReader(instance, new google_protobuf_1.BinaryReader(bytes));
        return instance;
    }
    static refineValues(_instance) {
        _instance.name = _instance.name || '';
        _instance.fields = _instance.fields ?? [];
        _instance.oneofs = _instance.oneofs ?? [];
        _instance.options = _instance.options ?? [];
        _instance.sourceContext = _instance.sourceContext || undefined;
        _instance.syntax = _instance.syntax || 0;
    }
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.name = _reader.readString();
                    break;
                case 2:
                    const messageInitializer2 = new Field();
                    _reader.readMessage(messageInitializer2, Field.deserializeBinaryFromReader);
                    (_instance.fields = _instance.fields ?? []).push(messageInitializer2);
                    break;
                case 3:
                    (_instance.oneofs = _instance.oneofs ?? []).push(_reader.readString());
                    break;
                case 4:
                    const messageInitializer4 = new Option();
                    _reader.readMessage(messageInitializer4, Option.deserializeBinaryFromReader);
                    (_instance.options = _instance.options ?? []).push(messageInitializer4);
                    break;
                case 5:
                    _instance.sourceContext = new googleProtobuf001.SourceContext();
                    _reader.readMessage(_instance.sourceContext, googleProtobuf001.SourceContext.deserializeBinaryFromReader);
                    break;
                case 6:
                    _instance.syntax = _reader.readEnum();
                    break;
                default:
                    _reader.skipField();
            }
        }
        Type.refineValues(_instance);
    }
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.name) {
            _writer.writeString(1, _instance.name);
        }
        if (_instance.fields && _instance.fields.length) {
            _writer.writeRepeatedMessage(2, _instance.fields, Field.serializeBinaryToWriter);
        }
        if (_instance.oneofs && _instance.oneofs.length) {
            _writer.writeRepeatedString(3, _instance.oneofs);
        }
        if (_instance.options && _instance.options.length) {
            _writer.writeRepeatedMessage(4, _instance.options, Option.serializeBinaryToWriter);
        }
        if (_instance.sourceContext) {
            _writer.writeMessage(5, _instance.sourceContext, googleProtobuf001.SourceContext.serializeBinaryToWriter);
        }
        if (_instance.syntax) {
            _writer.writeEnum(6, _instance.syntax);
        }
    }
    _name;
    _fields;
    _oneofs;
    _options;
    _sourceContext;
    _syntax;
    constructor(_value) {
        _value = _value ?? {};
        this.name = _value.name;
        this.fields = (_value.fields ?? []).map((m) => new Field(m));
        this.oneofs = (_value.oneofs ?? []).slice();
        this.options = (_value.options ?? []).map((m) => new Option(m));
        this.sourceContext = _value.sourceContext
            ? new googleProtobuf001.SourceContext(_value.sourceContext)
            : undefined;
        this.syntax = _value.syntax;
        Type.refineValues(this);
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get fields() {
        return this._fields;
    }
    set fields(value) {
        this._fields = value;
    }
    get oneofs() {
        return this._oneofs;
    }
    set oneofs(value) {
        this._oneofs = value;
    }
    get options() {
        return this._options;
    }
    set options(value) {
        this._options = value;
    }
    get sourceContext() {
        return this._sourceContext;
    }
    set sourceContext(value) {
        this._sourceContext = value;
    }
    get syntax() {
        return this._syntax;
    }
    set syntax(value) {
        this._syntax = value;
    }
    serializeBinary() {
        const writer = new google_protobuf_1.BinaryWriter();
        Type.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    toObject() {
        return {
            name: this.name,
            fields: (this.fields ?? []).map((m) => m.toObject()),
            oneofs: (this.oneofs ?? []).slice(),
            options: (this.options ?? []).map((m) => m.toObject()),
            sourceContext: this.sourceContext
                ? this.sourceContext.toObject()
                : undefined,
            syntax: this.syntax,
        };
    }
    toJSON() {
        return this.toObject();
    }
    toProtobufJSON(options) {
        return {
            name: this.name,
            fields: (this.fields ?? []).map((m) => m.toProtobufJSON(options)),
            oneofs: (this.oneofs ?? []).slice(),
            options: (this.options ?? []).map((m) => m.toProtobufJSON(options)),
            sourceContext: this.sourceContext
                ? this.sourceContext.toProtobufJSON(options)
                : null,
            syntax: Syntax[this.syntax ?? 0],
        };
    }
}
exports.Type = Type;
class Field {
    static id = 'google.protobuf.Field';
    static deserializeBinary(bytes) {
        const instance = new Field();
        Field.deserializeBinaryFromReader(instance, new google_protobuf_1.BinaryReader(bytes));
        return instance;
    }
    static refineValues(_instance) {
        _instance.kind = _instance.kind || 0;
        _instance.cardinality = _instance.cardinality || 0;
        _instance.number = _instance.number || 0;
        _instance.name = _instance.name || '';
        _instance.typeUrl = _instance.typeUrl || '';
        _instance.oneofIndex = _instance.oneofIndex || 0;
        _instance.packed = _instance.packed ?? false;
        _instance.options = _instance.options ?? [];
        _instance.jsonName = _instance.jsonName || '';
        _instance.defaultValue = _instance.defaultValue || '';
    }
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.kind = _reader.readEnum();
                    break;
                case 2:
                    _instance.cardinality = _reader.readEnum();
                    break;
                case 3:
                    _instance.number = _reader.readInt32();
                    break;
                case 4:
                    _instance.name = _reader.readString();
                    break;
                case 6:
                    _instance.typeUrl = _reader.readString();
                    break;
                case 7:
                    _instance.oneofIndex = _reader.readInt32();
                    break;
                case 8:
                    _instance.packed = _reader.readBool();
                    break;
                case 9:
                    const messageInitializer9 = new Option();
                    _reader.readMessage(messageInitializer9, Option.deserializeBinaryFromReader);
                    (_instance.options = _instance.options ?? []).push(messageInitializer9);
                    break;
                case 10:
                    _instance.jsonName = _reader.readString();
                    break;
                case 11:
                    _instance.defaultValue = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        Field.refineValues(_instance);
    }
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.kind) {
            _writer.writeEnum(1, _instance.kind);
        }
        if (_instance.cardinality) {
            _writer.writeEnum(2, _instance.cardinality);
        }
        if (_instance.number) {
            _writer.writeInt32(3, _instance.number);
        }
        if (_instance.name) {
            _writer.writeString(4, _instance.name);
        }
        if (_instance.typeUrl) {
            _writer.writeString(6, _instance.typeUrl);
        }
        if (_instance.oneofIndex) {
            _writer.writeInt32(7, _instance.oneofIndex);
        }
        if (_instance.packed) {
            _writer.writeBool(8, _instance.packed);
        }
        if (_instance.options && _instance.options.length) {
            _writer.writeRepeatedMessage(9, _instance.options, Option.serializeBinaryToWriter);
        }
        if (_instance.jsonName) {
            _writer.writeString(10, _instance.jsonName);
        }
        if (_instance.defaultValue) {
            _writer.writeString(11, _instance.defaultValue);
        }
    }
    _kind;
    _cardinality;
    _number;
    _name;
    _typeUrl;
    _oneofIndex;
    _packed;
    _options;
    _jsonName;
    _defaultValue;
    constructor(_value) {
        _value = _value ?? {};
        this.kind = _value.kind;
        this.cardinality = _value.cardinality;
        this.number = _value.number;
        this.name = _value.name;
        this.typeUrl = _value.typeUrl;
        this.oneofIndex = _value.oneofIndex;
        this.packed = _value.packed;
        this.options = (_value.options ?? []).map((m) => new Option(m));
        this.jsonName = _value.jsonName;
        this.defaultValue = _value.defaultValue;
        Field.refineValues(this);
    }
    get kind() {
        return this._kind;
    }
    set kind(value) {
        this._kind = value;
    }
    get cardinality() {
        return this._cardinality;
    }
    set cardinality(value) {
        this._cardinality = value;
    }
    get number() {
        return this._number;
    }
    set number(value) {
        this._number = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get typeUrl() {
        return this._typeUrl;
    }
    set typeUrl(value) {
        this._typeUrl = value;
    }
    get oneofIndex() {
        return this._oneofIndex;
    }
    set oneofIndex(value) {
        this._oneofIndex = value;
    }
    get packed() {
        return this._packed;
    }
    set packed(value) {
        this._packed = value;
    }
    get options() {
        return this._options;
    }
    set options(value) {
        this._options = value;
    }
    get jsonName() {
        return this._jsonName;
    }
    set jsonName(value) {
        this._jsonName = value;
    }
    get defaultValue() {
        return this._defaultValue;
    }
    set defaultValue(value) {
        this._defaultValue = value;
    }
    serializeBinary() {
        const writer = new google_protobuf_1.BinaryWriter();
        Field.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    toObject() {
        return {
            kind: this.kind,
            cardinality: this.cardinality,
            number: this.number,
            name: this.name,
            typeUrl: this.typeUrl,
            oneofIndex: this.oneofIndex,
            packed: this.packed,
            options: (this.options ?? []).map((m) => m.toObject()),
            jsonName: this.jsonName,
            defaultValue: this.defaultValue,
        };
    }
    toJSON() {
        return this.toObject();
    }
    toProtobufJSON(options) {
        return {
            kind: Field.Kind[this.kind ?? 0],
            cardinality: Field.Cardinality[this.cardinality ?? 0],
            number: this.number,
            name: this.name,
            typeUrl: this.typeUrl,
            oneofIndex: this.oneofIndex,
            packed: this.packed,
            options: (this.options ?? []).map((m) => m.toProtobufJSON(options)),
            jsonName: this.jsonName,
            defaultValue: this.defaultValue,
        };
    }
}
exports.Field = Field;
(function (Field) {
    let Kind;
    (function (Kind) {
        Kind[Kind["TYPE_UNKNOWN"] = 0] = "TYPE_UNKNOWN";
        Kind[Kind["TYPE_DOUBLE"] = 1] = "TYPE_DOUBLE";
        Kind[Kind["TYPE_FLOAT"] = 2] = "TYPE_FLOAT";
        Kind[Kind["TYPE_INT64"] = 3] = "TYPE_INT64";
        Kind[Kind["TYPE_UINT64"] = 4] = "TYPE_UINT64";
        Kind[Kind["TYPE_INT32"] = 5] = "TYPE_INT32";
        Kind[Kind["TYPE_FIXED64"] = 6] = "TYPE_FIXED64";
        Kind[Kind["TYPE_FIXED32"] = 7] = "TYPE_FIXED32";
        Kind[Kind["TYPE_BOOL"] = 8] = "TYPE_BOOL";
        Kind[Kind["TYPE_STRING"] = 9] = "TYPE_STRING";
        Kind[Kind["TYPE_GROUP"] = 10] = "TYPE_GROUP";
        Kind[Kind["TYPE_MESSAGE"] = 11] = "TYPE_MESSAGE";
        Kind[Kind["TYPE_BYTES"] = 12] = "TYPE_BYTES";
        Kind[Kind["TYPE_UINT32"] = 13] = "TYPE_UINT32";
        Kind[Kind["TYPE_ENUM"] = 14] = "TYPE_ENUM";
        Kind[Kind["TYPE_SFIXED32"] = 15] = "TYPE_SFIXED32";
        Kind[Kind["TYPE_SFIXED64"] = 16] = "TYPE_SFIXED64";
        Kind[Kind["TYPE_SINT32"] = 17] = "TYPE_SINT32";
        Kind[Kind["TYPE_SINT64"] = 18] = "TYPE_SINT64";
    })(Kind = Field.Kind || (Field.Kind = {}));
    let Cardinality;
    (function (Cardinality) {
        Cardinality[Cardinality["CARDINALITY_UNKNOWN"] = 0] = "CARDINALITY_UNKNOWN";
        Cardinality[Cardinality["CARDINALITY_OPTIONAL"] = 1] = "CARDINALITY_OPTIONAL";
        Cardinality[Cardinality["CARDINALITY_REQUIRED"] = 2] = "CARDINALITY_REQUIRED";
        Cardinality[Cardinality["CARDINALITY_REPEATED"] = 3] = "CARDINALITY_REPEATED";
    })(Cardinality = Field.Cardinality || (Field.Cardinality = {}));
})(Field = exports.Field || (exports.Field = {}));
class Enum {
    static id = 'google.protobuf.Enum';
    static deserializeBinary(bytes) {
        const instance = new Enum();
        Enum.deserializeBinaryFromReader(instance, new google_protobuf_1.BinaryReader(bytes));
        return instance;
    }
    static refineValues(_instance) {
        _instance.name = _instance.name || '';
        _instance.enumvalue = _instance.enumvalue ?? [];
        _instance.options = _instance.options ?? [];
        _instance.sourceContext = _instance.sourceContext || undefined;
        _instance.syntax = _instance.syntax || 0;
    }
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.name = _reader.readString();
                    break;
                case 2:
                    const messageInitializer2 = new EnumValue();
                    _reader.readMessage(messageInitializer2, EnumValue.deserializeBinaryFromReader);
                    (_instance.enumvalue = _instance.enumvalue ?? []).push(messageInitializer2);
                    break;
                case 3:
                    const messageInitializer3 = new Option();
                    _reader.readMessage(messageInitializer3, Option.deserializeBinaryFromReader);
                    (_instance.options = _instance.options ?? []).push(messageInitializer3);
                    break;
                case 4:
                    _instance.sourceContext = new googleProtobuf001.SourceContext();
                    _reader.readMessage(_instance.sourceContext, googleProtobuf001.SourceContext.deserializeBinaryFromReader);
                    break;
                case 5:
                    _instance.syntax = _reader.readEnum();
                    break;
                default:
                    _reader.skipField();
            }
        }
        Enum.refineValues(_instance);
    }
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.name) {
            _writer.writeString(1, _instance.name);
        }
        if (_instance.enumvalue && _instance.enumvalue.length) {
            _writer.writeRepeatedMessage(2, _instance.enumvalue, EnumValue.serializeBinaryToWriter);
        }
        if (_instance.options && _instance.options.length) {
            _writer.writeRepeatedMessage(3, _instance.options, Option.serializeBinaryToWriter);
        }
        if (_instance.sourceContext) {
            _writer.writeMessage(4, _instance.sourceContext, googleProtobuf001.SourceContext.serializeBinaryToWriter);
        }
        if (_instance.syntax) {
            _writer.writeEnum(5, _instance.syntax);
        }
    }
    _name;
    _enumvalue;
    _options;
    _sourceContext;
    _syntax;
    constructor(_value) {
        _value = _value ?? {};
        this.name = _value.name;
        this.enumvalue = (_value.enumvalue ?? []).map((m) => new EnumValue(m));
        this.options = (_value.options ?? []).map((m) => new Option(m));
        this.sourceContext = _value.sourceContext
            ? new googleProtobuf001.SourceContext(_value.sourceContext)
            : undefined;
        this.syntax = _value.syntax;
        Enum.refineValues(this);
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get enumvalue() {
        return this._enumvalue;
    }
    set enumvalue(value) {
        this._enumvalue = value;
    }
    get options() {
        return this._options;
    }
    set options(value) {
        this._options = value;
    }
    get sourceContext() {
        return this._sourceContext;
    }
    set sourceContext(value) {
        this._sourceContext = value;
    }
    get syntax() {
        return this._syntax;
    }
    set syntax(value) {
        this._syntax = value;
    }
    serializeBinary() {
        const writer = new google_protobuf_1.BinaryWriter();
        Enum.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    toObject() {
        return {
            name: this.name,
            enumvalue: (this.enumvalue ?? []).map((m) => m.toObject()),
            options: (this.options ?? []).map((m) => m.toObject()),
            sourceContext: this.sourceContext
                ? this.sourceContext.toObject()
                : undefined,
            syntax: this.syntax,
        };
    }
    toJSON() {
        return this.toObject();
    }
    toProtobufJSON(options) {
        return {
            name: this.name,
            enumvalue: (this.enumvalue ?? []).map((m) => m.toProtobufJSON(options)),
            options: (this.options ?? []).map((m) => m.toProtobufJSON(options)),
            sourceContext: this.sourceContext
                ? this.sourceContext.toProtobufJSON(options)
                : null,
            syntax: Syntax[this.syntax ?? 0],
        };
    }
}
exports.Enum = Enum;
class EnumValue {
    static id = 'google.protobuf.EnumValue';
    static deserializeBinary(bytes) {
        const instance = new EnumValue();
        EnumValue.deserializeBinaryFromReader(instance, new google_protobuf_1.BinaryReader(bytes));
        return instance;
    }
    static refineValues(_instance) {
        _instance.name = _instance.name || '';
        _instance.number = _instance.number || 0;
        _instance.options = _instance.options ?? [];
    }
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.name = _reader.readString();
                    break;
                case 2:
                    _instance.number = _reader.readInt32();
                    break;
                case 3:
                    const messageInitializer3 = new Option();
                    _reader.readMessage(messageInitializer3, Option.deserializeBinaryFromReader);
                    (_instance.options = _instance.options ?? []).push(messageInitializer3);
                    break;
                default:
                    _reader.skipField();
            }
        }
        EnumValue.refineValues(_instance);
    }
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.name) {
            _writer.writeString(1, _instance.name);
        }
        if (_instance.number) {
            _writer.writeInt32(2, _instance.number);
        }
        if (_instance.options && _instance.options.length) {
            _writer.writeRepeatedMessage(3, _instance.options, Option.serializeBinaryToWriter);
        }
    }
    _name;
    _number;
    _options;
    constructor(_value) {
        _value = _value ?? {};
        this.name = _value.name;
        this.number = _value.number;
        this.options = (_value.options ?? []).map((m) => new Option(m));
        EnumValue.refineValues(this);
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get number() {
        return this._number;
    }
    set number(value) {
        this._number = value;
    }
    get options() {
        return this._options;
    }
    set options(value) {
        this._options = value;
    }
    serializeBinary() {
        const writer = new google_protobuf_1.BinaryWriter();
        EnumValue.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    toObject() {
        return {
            name: this.name,
            number: this.number,
            options: (this.options ?? []).map((m) => m.toObject()),
        };
    }
    toJSON() {
        return this.toObject();
    }
    toProtobufJSON(options) {
        return {
            name: this.name,
            number: this.number,
            options: (this.options ?? []).map((m) => m.toProtobufJSON(options)),
        };
    }
}
exports.EnumValue = EnumValue;
class Option {
    static id = 'google.protobuf.Option';
    static deserializeBinary(bytes) {
        const instance = new Option();
        Option.deserializeBinaryFromReader(instance, new google_protobuf_1.BinaryReader(bytes));
        return instance;
    }
    static refineValues(_instance) {
        _instance.name = _instance.name || '';
        _instance.value = _instance.value || undefined;
    }
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.name = _reader.readString();
                    break;
                case 2:
                    _instance.value = new googleProtobuf000.Any();
                    _reader.readMessage(_instance.value, googleProtobuf000.Any.deserializeBinaryFromReader);
                    break;
                default:
                    _reader.skipField();
            }
        }
        Option.refineValues(_instance);
    }
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.name) {
            _writer.writeString(1, _instance.name);
        }
        if (_instance.value) {
            _writer.writeMessage(2, _instance.value, googleProtobuf000.Any.serializeBinaryToWriter);
        }
    }
    _name;
    _value;
    constructor(_value) {
        _value = _value ?? {};
        this.name = _value.name;
        this.value = _value.value
            ? new googleProtobuf000.Any(_value.value)
            : undefined;
        Option.refineValues(this);
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this._value = value;
    }
    serializeBinary() {
        const writer = new google_protobuf_1.BinaryWriter();
        Option.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    toObject() {
        return {
            name: this.name,
            value: this.value ? this.value.toObject() : undefined,
        };
    }
    toJSON() {
        return this.toObject();
    }
    toProtobufJSON(options) {
        return {
            name: this.name,
            value: this.value ? this.value.toProtobufJSON(options) : null,
        };
    }
}
exports.Option = Option;
//# sourceMappingURL=type.pb.js.map