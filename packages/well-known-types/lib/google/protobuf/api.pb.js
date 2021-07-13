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
exports.Mixin = exports.Method = exports.Api = void 0;
const google_protobuf_1 = require("google-protobuf");
const googleProtobuf001 = __importStar(require("../../google/protobuf/source-context.pb"));
const googleProtobuf002 = __importStar(require("../../google/protobuf/type.pb"));
class Api {
    static id = 'google.protobuf.Api';
    static deserializeBinary(bytes) {
        const instance = new Api();
        Api.deserializeBinaryFromReader(instance, new google_protobuf_1.BinaryReader(bytes));
        return instance;
    }
    static refineValues(_instance) {
        _instance.name = _instance.name || '';
        _instance.methods = _instance.methods || [];
        _instance.options = _instance.options || [];
        _instance.version = _instance.version || '';
        _instance.sourceContext = _instance.sourceContext || undefined;
        _instance.mixins = _instance.mixins || [];
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
                    const messageInitializer2 = new Method();
                    _reader.readMessage(messageInitializer2, Method.deserializeBinaryFromReader);
                    (_instance.methods = _instance.methods || []).push(messageInitializer2);
                    break;
                case 3:
                    const messageInitializer3 = new googleProtobuf002.Option();
                    _reader.readMessage(messageInitializer3, googleProtobuf002.Option.deserializeBinaryFromReader);
                    (_instance.options = _instance.options || []).push(messageInitializer3);
                    break;
                case 4:
                    _instance.version = _reader.readString();
                    break;
                case 5:
                    _instance.sourceContext = new googleProtobuf001.SourceContext();
                    _reader.readMessage(_instance.sourceContext, googleProtobuf001.SourceContext.deserializeBinaryFromReader);
                    break;
                case 6:
                    const messageInitializer6 = new Mixin();
                    _reader.readMessage(messageInitializer6, Mixin.deserializeBinaryFromReader);
                    (_instance.mixins = _instance.mixins || []).push(messageInitializer6);
                    break;
                case 7:
                    _instance.syntax = _reader.readEnum();
                    break;
                default:
                    _reader.skipField();
            }
        }
        Api.refineValues(_instance);
    }
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.name) {
            _writer.writeString(1, _instance.name);
        }
        if (_instance.methods && _instance.methods.length) {
            _writer.writeRepeatedMessage(2, _instance.methods, Method.serializeBinaryToWriter);
        }
        if (_instance.options && _instance.options.length) {
            _writer.writeRepeatedMessage(3, _instance.options, googleProtobuf002.Option.serializeBinaryToWriter);
        }
        if (_instance.version) {
            _writer.writeString(4, _instance.version);
        }
        if (_instance.sourceContext) {
            _writer.writeMessage(5, _instance.sourceContext, googleProtobuf001.SourceContext.serializeBinaryToWriter);
        }
        if (_instance.mixins && _instance.mixins.length) {
            _writer.writeRepeatedMessage(6, _instance.mixins, Mixin.serializeBinaryToWriter);
        }
        if (_instance.syntax) {
            _writer.writeEnum(7, _instance.syntax);
        }
    }
    _name;
    _methods;
    _options;
    _version;
    _sourceContext;
    _mixins;
    _syntax;
    constructor(_value) {
        _value = _value || {};
        this.name = _value.name;
        this.methods = (_value.methods || []).map((m) => new Method(m));
        this.options = (_value.options || []).map((m) => new googleProtobuf002.Option(m));
        this.version = _value.version;
        this.sourceContext = _value.sourceContext
            ? new googleProtobuf001.SourceContext(_value.sourceContext)
            : undefined;
        this.mixins = (_value.mixins || []).map((m) => new Mixin(m));
        this.syntax = _value.syntax;
        Api.refineValues(this);
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get methods() {
        return this._methods;
    }
    set methods(value) {
        this._methods = value;
    }
    get options() {
        return this._options;
    }
    set options(value) {
        this._options = value;
    }
    get version() {
        return this._version;
    }
    set version(value) {
        this._version = value;
    }
    get sourceContext() {
        return this._sourceContext;
    }
    set sourceContext(value) {
        this._sourceContext = value;
    }
    get mixins() {
        return this._mixins;
    }
    set mixins(value) {
        this._mixins = value;
    }
    get syntax() {
        return this._syntax;
    }
    set syntax(value) {
        this._syntax = value;
    }
    serializeBinary() {
        const writer = new google_protobuf_1.BinaryWriter();
        Api.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    toObject() {
        return {
            name: this.name,
            methods: (this.methods || []).map((m) => m.toObject()),
            options: (this.options || []).map((m) => m.toObject()),
            version: this.version,
            sourceContext: this.sourceContext
                ? this.sourceContext.toObject()
                : undefined,
            mixins: (this.mixins || []).map((m) => m.toObject()),
            syntax: this.syntax,
        };
    }
    toJSON() {
        return this.toObject();
    }
    toProtobufJSON(options) {
        return {
            name: this.name,
            methods: (this.methods || []).map((m) => m.toProtobufJSON(options)),
            options: (this.options || []).map((m) => m.toProtobufJSON(options)),
            version: this.version,
            sourceContext: this.sourceContext
                ? this.sourceContext.toProtobufJSON(options)
                : null,
            mixins: (this.mixins || []).map((m) => m.toProtobufJSON(options)),
            syntax: googleProtobuf002.Syntax[this.syntax ?? 0],
        };
    }
}
exports.Api = Api;
class Method {
    static id = 'google.protobuf.Method';
    static deserializeBinary(bytes) {
        const instance = new Method();
        Method.deserializeBinaryFromReader(instance, new google_protobuf_1.BinaryReader(bytes));
        return instance;
    }
    static refineValues(_instance) {
        _instance.name = _instance.name || '';
        _instance.requestTypeUrl = _instance.requestTypeUrl || '';
        _instance.requestStreaming = _instance.requestStreaming || false;
        _instance.responseTypeUrl = _instance.responseTypeUrl || '';
        _instance.responseStreaming = _instance.responseStreaming || false;
        _instance.options = _instance.options || [];
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
                    _instance.requestTypeUrl = _reader.readString();
                    break;
                case 3:
                    _instance.requestStreaming = _reader.readBool();
                    break;
                case 4:
                    _instance.responseTypeUrl = _reader.readString();
                    break;
                case 5:
                    _instance.responseStreaming = _reader.readBool();
                    break;
                case 6:
                    const messageInitializer6 = new googleProtobuf002.Option();
                    _reader.readMessage(messageInitializer6, googleProtobuf002.Option.deserializeBinaryFromReader);
                    (_instance.options = _instance.options || []).push(messageInitializer6);
                    break;
                case 7:
                    _instance.syntax = _reader.readEnum();
                    break;
                default:
                    _reader.skipField();
            }
        }
        Method.refineValues(_instance);
    }
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.name) {
            _writer.writeString(1, _instance.name);
        }
        if (_instance.requestTypeUrl) {
            _writer.writeString(2, _instance.requestTypeUrl);
        }
        if (_instance.requestStreaming) {
            _writer.writeBool(3, _instance.requestStreaming);
        }
        if (_instance.responseTypeUrl) {
            _writer.writeString(4, _instance.responseTypeUrl);
        }
        if (_instance.responseStreaming) {
            _writer.writeBool(5, _instance.responseStreaming);
        }
        if (_instance.options && _instance.options.length) {
            _writer.writeRepeatedMessage(6, _instance.options, googleProtobuf002.Option.serializeBinaryToWriter);
        }
        if (_instance.syntax) {
            _writer.writeEnum(7, _instance.syntax);
        }
    }
    _name;
    _requestTypeUrl;
    _requestStreaming;
    _responseTypeUrl;
    _responseStreaming;
    _options;
    _syntax;
    constructor(_value) {
        _value = _value || {};
        this.name = _value.name;
        this.requestTypeUrl = _value.requestTypeUrl;
        this.requestStreaming = _value.requestStreaming;
        this.responseTypeUrl = _value.responseTypeUrl;
        this.responseStreaming = _value.responseStreaming;
        this.options = (_value.options || []).map((m) => new googleProtobuf002.Option(m));
        this.syntax = _value.syntax;
        Method.refineValues(this);
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get requestTypeUrl() {
        return this._requestTypeUrl;
    }
    set requestTypeUrl(value) {
        this._requestTypeUrl = value;
    }
    get requestStreaming() {
        return this._requestStreaming;
    }
    set requestStreaming(value) {
        this._requestStreaming = value;
    }
    get responseTypeUrl() {
        return this._responseTypeUrl;
    }
    set responseTypeUrl(value) {
        this._responseTypeUrl = value;
    }
    get responseStreaming() {
        return this._responseStreaming;
    }
    set responseStreaming(value) {
        this._responseStreaming = value;
    }
    get options() {
        return this._options;
    }
    set options(value) {
        this._options = value;
    }
    get syntax() {
        return this._syntax;
    }
    set syntax(value) {
        this._syntax = value;
    }
    serializeBinary() {
        const writer = new google_protobuf_1.BinaryWriter();
        Method.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    toObject() {
        return {
            name: this.name,
            requestTypeUrl: this.requestTypeUrl,
            requestStreaming: this.requestStreaming,
            responseTypeUrl: this.responseTypeUrl,
            responseStreaming: this.responseStreaming,
            options: (this.options || []).map((m) => m.toObject()),
            syntax: this.syntax,
        };
    }
    toJSON() {
        return this.toObject();
    }
    toProtobufJSON(options) {
        return {
            name: this.name,
            requestTypeUrl: this.requestTypeUrl,
            requestStreaming: this.requestStreaming,
            responseTypeUrl: this.responseTypeUrl,
            responseStreaming: this.responseStreaming,
            options: (this.options || []).map((m) => m.toProtobufJSON(options)),
            syntax: googleProtobuf002.Syntax[this.syntax ?? 0],
        };
    }
}
exports.Method = Method;
class Mixin {
    static id = 'google.protobuf.Mixin';
    static deserializeBinary(bytes) {
        const instance = new Mixin();
        Mixin.deserializeBinaryFromReader(instance, new google_protobuf_1.BinaryReader(bytes));
        return instance;
    }
    static refineValues(_instance) {
        _instance.name = _instance.name || '';
        _instance.root = _instance.root || '';
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
                    _instance.root = _reader.readString();
                    break;
                default:
                    _reader.skipField();
            }
        }
        Mixin.refineValues(_instance);
    }
    static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.name) {
            _writer.writeString(1, _instance.name);
        }
        if (_instance.root) {
            _writer.writeString(2, _instance.root);
        }
    }
    _name;
    _root;
    constructor(_value) {
        _value = _value || {};
        this.name = _value.name;
        this.root = _value.root;
        Mixin.refineValues(this);
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get root() {
        return this._root;
    }
    set root(value) {
        this._root = value;
    }
    serializeBinary() {
        const writer = new google_protobuf_1.BinaryWriter();
        Mixin.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    toObject() {
        return {
            name: this.name,
            root: this.root,
        };
    }
    toJSON() {
        return this.toObject();
    }
    toProtobufJSON(options) {
        return {
            name: this.name,
            root: this.root,
        };
    }
}
exports.Mixin = Mixin;
//# sourceMappingURL=api.pb.js.map