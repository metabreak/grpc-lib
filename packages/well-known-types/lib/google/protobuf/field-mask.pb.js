"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldMask = void 0;
const google_protobuf_1 = require("google-protobuf");
class FieldMask {
    static id = 'google.protobuf.FieldMask';
    static deserializeBinary(bytes) {
        const instance = new FieldMask();
        FieldMask.deserializeBinaryFromReader(instance, new google_protobuf_1.BinaryReader(bytes));
        return instance;
    }
    static refineValues(_instance) {
        _instance.paths = _instance.paths || [];
    }
    static deserializeBinaryFromReader(_instance, _reader) {
        while (_reader.nextField()) {
            if (_reader.isEndGroup())
                break;
            switch (_reader.getFieldNumber()) {
                case 1:
                    (_instance.paths = _instance.paths || []).push(_reader.readString());
                    break;
                default:
                    _reader.skipField();
            }
        }
        FieldMask.refineValues(_instance);
    }
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.paths && _instance.paths.length) {
            _writer.writeRepeatedString(1, _instance.paths);
        }
    }
    _paths;
    constructor(_value) {
        _value = _value || {};
        this.paths = (_value.paths || []).slice();
        FieldMask.refineValues(this);
    }
    get paths() {
        return this._paths;
    }
    set paths(value) {
        this._paths = value;
    }
    serializeBinary() {
        const writer = new google_protobuf_1.BinaryWriter();
        FieldMask.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    toObject() {
        return {
            paths: (this.paths || []).slice(),
        };
    }
    toJSON() {
        return this.toObject();
    }
    toProtobufJSON(options) {
        return this.paths.join(',');
    }
}
exports.FieldMask = FieldMask;
//# sourceMappingURL=field-mask.pb.js.map