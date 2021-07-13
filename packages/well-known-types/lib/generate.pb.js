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
exports.TestMessage = void 0;
const google_protobuf_1 = require("google-protobuf");
const googleProtobuf000 = __importStar(require("./google/protobuf/source-context.pb"));
const googleProtobuf001 = __importStar(require("./google/protobuf/type.pb"));
const googleProtobuf002 = __importStar(require("./google/protobuf/any.pb"));
const googleProtobuf003 = __importStar(require("./google/protobuf/api.pb"));
const googleProtobuf004 = __importStar(require("./google/protobuf/duration.pb"));
const googleProtobuf005 = __importStar(require("./google/protobuf/empty.pb"));
const googleProtobuf006 = __importStar(require("./google/protobuf/field-mask.pb"));
const googleProtobuf007 = __importStar(require("./google/protobuf/struct.pb"));
const googleProtobuf008 = __importStar(require("./google/protobuf/timestamp.pb"));
const googleProtobuf009 = __importStar(require("./google/protobuf/wrappers.pb"));
class TestMessage {
    static id = 'TestMessage';
    static deserializeBinary(bytes) {
        const instance = new TestMessage();
        TestMessage.deserializeBinaryFromReader(instance, new google_protobuf_1.BinaryReader(bytes));
        return instance;
    }
    static refineValues(_instance) {
        _instance.any = _instance.any || undefined;
        _instance.timestamp = _instance.timestamp || undefined;
        _instance.duration = _instance.duration || undefined;
        _instance.empty = _instance.empty || undefined;
        _instance.struct = _instance.struct || undefined;
        _instance.api = _instance.api || undefined;
        _instance.fieldMask = _instance.fieldMask || undefined;
        _instance.sourceContext = _instance.sourceContext || undefined;
        _instance.boolValue = _instance.boolValue || undefined;
        _instance.type = _instance.type || undefined;
    }
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.any = new googleProtobuf002.Any();
                    _reader.readMessage(_instance.any, googleProtobuf002.Any.deserializeBinaryFromReader);
                    break;
                case 2:
                    _instance.timestamp = new googleProtobuf008.Timestamp();
                    _reader.readMessage(_instance.timestamp, googleProtobuf008.Timestamp.deserializeBinaryFromReader);
                    break;
                case 3:
                    _instance.duration = new googleProtobuf004.Duration();
                    _reader.readMessage(_instance.duration, googleProtobuf004.Duration.deserializeBinaryFromReader);
                    break;
                case 4:
                    _instance.empty = new googleProtobuf005.Empty();
                    _reader.readMessage(_instance.empty, googleProtobuf005.Empty.deserializeBinaryFromReader);
                    break;
                case 5:
                    _instance.struct = new googleProtobuf007.Struct();
                    _reader.readMessage(_instance.struct, googleProtobuf007.Struct.deserializeBinaryFromReader);
                    break;
                case 6:
                    _instance.api = new googleProtobuf003.Api();
                    _reader.readMessage(_instance.api, googleProtobuf003.Api.deserializeBinaryFromReader);
                    break;
                case 7:
                    _instance.fieldMask = new googleProtobuf006.FieldMask();
                    _reader.readMessage(_instance.fieldMask, googleProtobuf006.FieldMask.deserializeBinaryFromReader);
                    break;
                case 8:
                    _instance.sourceContext = new googleProtobuf000.SourceContext();
                    _reader.readMessage(_instance.sourceContext, googleProtobuf000.SourceContext.deserializeBinaryFromReader);
                    break;
                case 9:
                    _instance.boolValue = new googleProtobuf009.BoolValue();
                    _reader.readMessage(_instance.boolValue, googleProtobuf009.BoolValue.deserializeBinaryFromReader);
                    break;
                case 10:
                    _instance.type = new googleProtobuf001.Type();
                    _reader.readMessage(_instance.type, googleProtobuf001.Type.deserializeBinaryFromReader);
                    break;
                default:
                    _reader.skipField();
            }
        }
        TestMessage.refineValues(_instance);
    }
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.any) {
            _writer.writeMessage(1, _instance.any, googleProtobuf002.Any.serializeBinaryToWriter);
        }
        if (_instance.timestamp) {
            _writer.writeMessage(2, _instance.timestamp, googleProtobuf008.Timestamp.serializeBinaryToWriter);
        }
        if (_instance.duration) {
            _writer.writeMessage(3, _instance.duration, googleProtobuf004.Duration.serializeBinaryToWriter);
        }
        if (_instance.empty) {
            _writer.writeMessage(4, _instance.empty, googleProtobuf005.Empty.serializeBinaryToWriter);
        }
        if (_instance.struct) {
            _writer.writeMessage(5, _instance.struct, googleProtobuf007.Struct.serializeBinaryToWriter);
        }
        if (_instance.api) {
            _writer.writeMessage(6, _instance.api, googleProtobuf003.Api.serializeBinaryToWriter);
        }
        if (_instance.fieldMask) {
            _writer.writeMessage(7, _instance.fieldMask, googleProtobuf006.FieldMask.serializeBinaryToWriter);
        }
        if (_instance.sourceContext) {
            _writer.writeMessage(8, _instance.sourceContext, googleProtobuf000.SourceContext.serializeBinaryToWriter);
        }
        if (_instance.boolValue) {
            _writer.writeMessage(9, _instance.boolValue, googleProtobuf009.BoolValue.serializeBinaryToWriter);
        }
        if (_instance.type) {
            _writer.writeMessage(10, _instance.type, googleProtobuf001.Type.serializeBinaryToWriter);
        }
    }
    _any;
    _timestamp;
    _duration;
    _empty;
    _struct;
    _api;
    _fieldMask;
    _sourceContext;
    _boolValue;
    _type;
    constructor(_value) {
        _value = _value || {};
        this.any = _value.any ? new googleProtobuf002.Any(_value.any) : undefined;
        this.timestamp = _value.timestamp
            ? new googleProtobuf008.Timestamp(_value.timestamp)
            : undefined;
        this.duration = _value.duration
            ? new googleProtobuf004.Duration(_value.duration)
            : undefined;
        this.empty = _value.empty
            ? new googleProtobuf005.Empty(_value.empty)
            : undefined;
        this.struct = _value.struct
            ? new googleProtobuf007.Struct(_value.struct)
            : undefined;
        this.api = _value.api ? new googleProtobuf003.Api(_value.api) : undefined;
        this.fieldMask = _value.fieldMask
            ? new googleProtobuf006.FieldMask(_value.fieldMask)
            : undefined;
        this.sourceContext = _value.sourceContext
            ? new googleProtobuf000.SourceContext(_value.sourceContext)
            : undefined;
        this.boolValue = _value.boolValue
            ? new googleProtobuf009.BoolValue(_value.boolValue)
            : undefined;
        this.type = _value.type
            ? new googleProtobuf001.Type(_value.type)
            : undefined;
        TestMessage.refineValues(this);
    }
    get any() {
        return this._any;
    }
    set any(value) {
        this._any = value;
    }
    get timestamp() {
        return this._timestamp;
    }
    set timestamp(value) {
        this._timestamp = value;
    }
    get duration() {
        return this._duration;
    }
    set duration(value) {
        this._duration = value;
    }
    get empty() {
        return this._empty;
    }
    set empty(value) {
        this._empty = value;
    }
    get struct() {
        return this._struct;
    }
    set struct(value) {
        this._struct = value;
    }
    get api() {
        return this._api;
    }
    set api(value) {
        this._api = value;
    }
    get fieldMask() {
        return this._fieldMask;
    }
    set fieldMask(value) {
        this._fieldMask = value;
    }
    get sourceContext() {
        return this._sourceContext;
    }
    set sourceContext(value) {
        this._sourceContext = value;
    }
    get boolValue() {
        return this._boolValue;
    }
    set boolValue(value) {
        this._boolValue = value;
    }
    get type() {
        return this._type;
    }
    set type(value) {
        this._type = value;
    }
    serializeBinary() {
        const writer = new google_protobuf_1.BinaryWriter();
        TestMessage.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    toObject() {
        return {
            any: this.any ? this.any.toObject() : undefined,
            timestamp: this.timestamp ? this.timestamp.toObject() : undefined,
            duration: this.duration ? this.duration.toObject() : undefined,
            empty: this.empty ? this.empty.toObject() : undefined,
            struct: this.struct ? this.struct.toObject() : undefined,
            api: this.api ? this.api.toObject() : undefined,
            fieldMask: this.fieldMask ? this.fieldMask.toObject() : undefined,
            sourceContext: this.sourceContext
                ? this.sourceContext.toObject()
                : undefined,
            boolValue: this.boolValue ? this.boolValue.toObject() : undefined,
            type: this.type ? this.type.toObject() : undefined,
        };
    }
    toJSON() {
        return this.toObject();
    }
    toProtobufJSON(options) {
        return {
            any: this.any ? this.any.toProtobufJSON(options) : null,
            timestamp: this.timestamp ? this.timestamp.toProtobufJSON(options) : null,
            duration: this.duration ? this.duration.toProtobufJSON(options) : null,
            empty: this.empty ? this.empty.toProtobufJSON(options) : null,
            struct: this.struct ? this.struct.toProtobufJSON(options) : null,
            api: this.api ? this.api.toProtobufJSON(options) : null,
            fieldMask: this.fieldMask ? this.fieldMask.toProtobufJSON(options) : null,
            sourceContext: this.sourceContext
                ? this.sourceContext.toProtobufJSON(options)
                : null,
            boolValue: this.boolValue ? this.boolValue.toProtobufJSON(options) : null,
            type: this.type ? this.type.toProtobufJSON(options) : null,
        };
    }
}
exports.TestMessage = TestMessage;
//# sourceMappingURL=generate.pb.js.map