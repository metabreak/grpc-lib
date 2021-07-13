"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SourceContext = void 0;
const google_protobuf_1 = require("google-protobuf");
class SourceContext {
    static id = 'google.protobuf.SourceContext';
    static deserializeBinary(bytes) {
        const instance = new SourceContext();
        SourceContext.deserializeBinaryFromReader(instance, new google_protobuf_1.BinaryReader(bytes));
        return instance;
    }
    static refineValues(_instance) {
        _instance.fileName = _instance.fileName || '';
    }
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    _instance.fileName = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        SourceContext.refineValues(_instance);
    }
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.fileName) {
            _writer.writeString(1, _instance.fileName);
        }
    }
    _fileName;
    constructor(_value) {
        _value = _value || {};
        this.fileName = _value.fileName;
        SourceContext.refineValues(this);
    }
    get fileName() {
        return this._fileName;
    }
    set fileName(value) {
        this._fileName = value;
    }
    serializeBinary() {
        const writer = new google_protobuf_1.BinaryWriter();
        SourceContext.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    toObject() {
        return {
            fileName: this.fileName,
        };
    }
    toJSON() {
        return this.toObject();
    }
    toProtobufJSON(options) {
        return {
            fileName: this.fileName,
        };
    }
}
exports.SourceContext = SourceContext;
//# sourceMappingURL=source-context.pb.js.map