"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListValue = exports.Value = exports.Struct = exports.NullValue = void 0;
const google_protobuf_1 = require("google-protobuf");
var NullValue;
(function (NullValue) {
    NullValue[NullValue["NULL_VALUE"] = 0] = "NULL_VALUE";
})(NullValue = exports.NullValue || (exports.NullValue = {}));
class Struct {
    static id = 'google.protobuf.Struct';
    static deserializeBinary(bytes) {
        const instance = new Struct();
        Struct.deserializeBinaryFromReader(instance, new google_protobuf_1.BinaryReader(bytes));
        return instance;
    }
    static refineValues(_instance) {
        _instance.fields = _instance.fields ?? {};
    }
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    const msg_1 = {};
                    _reader.readMessage(msg_1, Struct.FieldsEntry.deserializeBinaryFromReader);
                    _instance.fields = _instance.fields ?? {};
                    _instance.fields[msg_1.key] = msg_1.value;
                    break;
                default:
                    _reader.skipField();
            }
        }
        Struct.refineValues(_instance);
    }
    static serializeBinaryToWriter(_instance, _writer) {
        if (!!_instance.fields) {
            const keys_1 = Object.keys(_instance.fields);
            if (keys_1.length) {
                const repeated_1 = keys_1
                    .map((key) => ({ key: key, value: _instance.fields[key] }))
                    .reduce((r, v) => [...r, v], []);
                _writer.writeRepeatedMessage(1, repeated_1, Struct.FieldsEntry.serializeBinaryToWriter);
            }
        }
    }
    _fields;
    constructor(_value) {
        _value = _value ?? {};
        (this.fields = _value.fields
            ? Object.keys(_value.fields).reduce((r, k) => ({
                ...r,
                [k]: _value.fields[k] ? new Value(_value.fields[k]) : undefined,
            }), {})
            : {}),
            Struct.refineValues(this);
    }
    get fields() {
        return this._fields;
    }
    set fields(value) {
        this._fields = value;
    }
    serializeBinary() {
        const writer = new google_protobuf_1.BinaryWriter();
        Struct.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    toObject() {
        return {
            fields: this.fields
                ? Object.keys(this.fields).reduce((r, k) => ({
                    ...r,
                    [k]: this.fields[k] ? this.fields[k].toObject() : undefined,
                }), {})
                : {},
        };
    }
    toJSON() {
        return this.toObject();
    }
    toProtobufJSON(options) {
        return this.fields
            ? Object.keys(this.fields).reduce((r, k) => ({
                ...r,
                [k]: this.fields[k] ? this.fields[k].toProtobufJSON(options) : {},
            }), {})
            : {};
    }
}
exports.Struct = Struct;
(function (Struct) {
    class FieldsEntry {
        static id = 'google.protobuf.FieldsEntry';
        static deserializeBinary(bytes) {
            const instance = new FieldsEntry();
            FieldsEntry.deserializeBinaryFromReader(instance, new google_protobuf_1.BinaryReader(bytes));
            return instance;
        }
        static refineValues(_instance) {
            _instance.key = _instance.key || '';
            _instance.value = _instance.value || undefined;
        }
        static deserializeBinaryFromReader(_instance, _reader) {
            while (_reader.nextField()) {
                if (_reader.isEndGroup())
                    break;
                switch (_reader.getFieldNumber()) {
                    case 1:
                        _instance.key = _reader.readString();
                        break;
                    case 2:
                        _instance.value = new Value();
                        _reader.readMessage(_instance.value, Value.deserializeBinaryFromReader);
                        break;
                    default:
                        _reader.skipField();
                }
            }
            FieldsEntry.refineValues(_instance);
        }
        static serializeBinaryToWriter(_instance, _writer) {
            if (_instance.key) {
                _writer.writeString(1, _instance.key);
            }
            if (_instance.value) {
                _writer.writeMessage(2, _instance.value, Value.serializeBinaryToWriter);
            }
        }
        _key;
        _value;
        constructor(_value) {
            _value = _value ?? {};
            this.key = _value.key;
            this.value = _value.value ? new Value(_value.value) : undefined;
            FieldsEntry.refineValues(this);
        }
        get key() {
            return this._key;
        }
        set key(value) {
            this._key = value;
        }
        get value() {
            return this._value;
        }
        set value(value) {
            this._value = value;
        }
        serializeBinary() {
            const writer = new google_protobuf_1.BinaryWriter();
            FieldsEntry.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        }
        toObject() {
            return {
                key: this.key,
                value: this.value ? this.value.toObject() : undefined,
            };
        }
        toJSON() {
            return this.toObject();
        }
        toProtobufJSON(options) {
            return {
                key: this.key,
                value: this.value ? this.value.toProtobufJSON(options) : null,
            };
        }
    }
    Struct.FieldsEntry = FieldsEntry;
})(Struct = exports.Struct || (exports.Struct = {}));
class Value {
    static id = 'google.protobuf.Value';
    static deserializeBinary(bytes) {
        const instance = new Value();
        Value.deserializeBinaryFromReader(instance, new google_protobuf_1.BinaryReader(bytes));
        return instance;
    }
    static refineValues(_instance) { }
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.nullValue = _reader.readEnum();
                    break;
                case 2:
                    _instance.numberValue = _reader.readDouble();
                    break;
                case 3:
                    _instance.stringValue = _reader.readString();
                    break;
                case 4:
                    _instance.boolValue = _reader.readBool();
                    break;
                case 5:
                    _instance.structValue = new Struct();
                    _reader.readMessage(_instance.structValue, Struct.deserializeBinaryFromReader);
                    break;
                case 6:
                    _instance.listValue = new ListValue();
                    _reader.readMessage(_instance.listValue, ListValue.deserializeBinaryFromReader);
                    break;
                default:
                    _reader.skipField();
            }
        }
        Value.refineValues(_instance);
    }
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.nullValue || _instance.nullValue === 0) {
            _writer.writeEnum(1, _instance.nullValue);
        }
        if (_instance.numberValue || _instance.numberValue === 0) {
            _writer.writeDouble(2, _instance.numberValue);
        }
        if (_instance.stringValue || _instance.stringValue === '') {
            _writer.writeString(3, _instance.stringValue);
        }
        if (_instance.boolValue || _instance.boolValue === false) {
            _writer.writeBool(4, _instance.boolValue);
        }
        if (_instance.structValue) {
            _writer.writeMessage(5, _instance.structValue, Struct.serializeBinaryToWriter);
        }
        if (_instance.listValue) {
            _writer.writeMessage(6, _instance.listValue, ListValue.serializeBinaryToWriter);
        }
    }
    _nullValue;
    _numberValue;
    _stringValue;
    _boolValue;
    _structValue;
    _listValue;
    _kind = Value.KindCase.none;
    constructor(_value) {
        _value = _value ?? {};
        this.nullValue = _value.nullValue;
        this.numberValue = _value.numberValue;
        this.stringValue = _value.stringValue;
        this.boolValue = _value.boolValue;
        this.structValue = _value.structValue
            ? new Struct(_value.structValue)
            : undefined;
        this.listValue = _value.listValue
            ? new ListValue(_value.listValue)
            : undefined;
        Value.refineValues(this);
    }
    get nullValue() {
        return this._nullValue;
    }
    set nullValue(value) {
        if (value !== undefined && value !== null) {
            this._numberValue =
                this._stringValue =
                    this._boolValue =
                        this._structValue =
                            this._listValue =
                                undefined;
            this._kind = Value.KindCase.nullValue;
        }
        this._nullValue = value;
    }
    get numberValue() {
        return this._numberValue;
    }
    set numberValue(value) {
        if (value !== undefined && value !== null) {
            this._nullValue =
                this._stringValue =
                    this._boolValue =
                        this._structValue =
                            this._listValue =
                                undefined;
            this._kind = Value.KindCase.numberValue;
        }
        this._numberValue = value;
    }
    get stringValue() {
        return this._stringValue;
    }
    set stringValue(value) {
        if (value !== undefined && value !== null) {
            this._nullValue =
                this._numberValue =
                    this._boolValue =
                        this._structValue =
                            this._listValue =
                                undefined;
            this._kind = Value.KindCase.stringValue;
        }
        this._stringValue = value;
    }
    get boolValue() {
        return this._boolValue;
    }
    set boolValue(value) {
        if (value !== undefined && value !== null) {
            this._nullValue =
                this._numberValue =
                    this._stringValue =
                        this._structValue =
                            this._listValue =
                                undefined;
            this._kind = Value.KindCase.boolValue;
        }
        this._boolValue = value;
    }
    get structValue() {
        return this._structValue;
    }
    set structValue(value) {
        if (value !== undefined && value !== null) {
            this._nullValue =
                this._numberValue =
                    this._stringValue =
                        this._boolValue =
                            this._listValue =
                                undefined;
            this._kind = Value.KindCase.structValue;
        }
        this._structValue = value;
    }
    get listValue() {
        return this._listValue;
    }
    set listValue(value) {
        if (value !== undefined && value !== null) {
            this._nullValue =
                this._numberValue =
                    this._stringValue =
                        this._boolValue =
                            this._structValue =
                                undefined;
            this._kind = Value.KindCase.listValue;
        }
        this._listValue = value;
    }
    get kind() {
        return this._kind;
    }
    serializeBinary() {
        const writer = new google_protobuf_1.BinaryWriter();
        Value.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    toObject() {
        return {
            nullValue: this.nullValue,
            numberValue: this.numberValue,
            stringValue: this.stringValue,
            boolValue: this.boolValue,
            structValue: this.structValue ? this.structValue.toObject() : undefined,
            listValue: this.listValue ? this.listValue.toObject() : undefined,
        };
    }
    toJSON() {
        return this.toObject();
    }
    toProtobufJSON(options) {
        switch (this.kind) {
            case Value.KindCase.nullValue:
                return null;
            case Value.KindCase.numberValue:
                return this.numberValue;
            case Value.KindCase.stringValue:
                return this.stringValue;
            case Value.KindCase.boolValue:
                return this.boolValue;
            case Value.KindCase.structValue:
                return this.structValue
                    ? this.structValue.toProtobufJSON(options)
                    : null;
            case Value.KindCase.listValue:
                return this.listValue ? this.listValue.toProtobufJSON(options) : null;
            default:
                return null;
        }
    }
}
exports.Value = Value;
(function (Value) {
    let KindCase;
    (function (KindCase) {
        KindCase[KindCase["none"] = 0] = "none";
        KindCase[KindCase["nullValue"] = 1] = "nullValue";
        KindCase[KindCase["numberValue"] = 2] = "numberValue";
        KindCase[KindCase["stringValue"] = 3] = "stringValue";
        KindCase[KindCase["boolValue"] = 4] = "boolValue";
        KindCase[KindCase["structValue"] = 5] = "structValue";
        KindCase[KindCase["listValue"] = 6] = "listValue";
    })(KindCase = Value.KindCase || (Value.KindCase = {}));
})(Value = exports.Value || (exports.Value = {}));
class ListValue {
    static id = 'google.protobuf.ListValue';
    static deserializeBinary(bytes) {
        const instance = new ListValue();
        ListValue.deserializeBinaryFromReader(instance, new google_protobuf_1.BinaryReader(bytes));
        return instance;
    }
    static refineValues(_instance) {
        _instance.values = _instance.values ?? [];
    }
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    const messageInitializer1 = new Value();
                    _reader.readMessage(messageInitializer1, Value.deserializeBinaryFromReader);
                    (_instance.values = _instance.values ?? []).push(messageInitializer1);
                    break;
                default:
                    _reader.skipField();
            }
        }
        ListValue.refineValues(_instance);
    }
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.values && _instance.values.length) {
            _writer.writeRepeatedMessage(1, _instance.values, Value.serializeBinaryToWriter);
        }
    }
    _values;
    constructor(_value) {
        _value = _value ?? {};
        this.values = (_value.values ?? []).map((m) => new Value(m));
        ListValue.refineValues(this);
    }
    get values() {
        return this._values;
    }
    set values(value) {
        this._values = value;
    }
    serializeBinary() {
        const writer = new google_protobuf_1.BinaryWriter();
        ListValue.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    toObject() {
        return {
            values: (this.values ?? []).map((m) => m.toObject()),
        };
    }
    toJSON() {
        return this.toObject();
    }
    toProtobufJSON(options) {
        return (this.values ?? []).map((v) => v?.toProtobufJSON(options) ?? null);
    }
}
exports.ListValue = ListValue;
//# sourceMappingURL=struct.pb.js.map