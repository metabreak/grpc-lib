import { Proto } from '../../input/proto';
import { ProtoMessage } from '../../input/proto-message';
import { Printer } from '../misc/printer';
export declare class Message {
    private proto;
    private message;
    private messageFields;
    private oneOfs;
    private wkt?;
    constructor(proto: Proto, message: ProtoMessage);
    print(printer: Printer): void;
    private printStaticRefineValues;
    private printStaticDeserializeBinaryFromReader;
    private printStaticSerializeBinaryToWriter;
    private printGettersAndSetters;
    private printConstructor;
    private printAsObjectInterface;
    private printToObject;
    private printAsJSONInterface;
    private printToJSON;
    private printToProtobufJSON;
    private printSubTypes;
}
