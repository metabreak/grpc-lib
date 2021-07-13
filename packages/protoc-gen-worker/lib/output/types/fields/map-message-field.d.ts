import { Proto } from '../../../input/proto';
import { ProtoMessage } from '../../../input/proto-message';
import { ProtoMessageField } from '../../../input/proto-message-field';
import { Printer } from '../../misc/printer';
import { MessageField } from '../message-field';
import { OneOf } from '../oneof';
export declare class MapMessageField implements MessageField {
    private proto;
    private message;
    private messageField;
    private oneOf?;
    private attributeName;
    private dataType;
    private keyField;
    private valueField;
    private mapMessageClassName;
    constructor(proto: Proto, message: ProtoMessage, messageField: ProtoMessageField, oneOf?: OneOf | undefined);
    printDeserializeBinaryFromReader(printer: Printer): void;
    printSerializeBinaryToWriter(printer: Printer): void;
    printPrivateAttribute(printer: Printer): void;
    printInitializer(printer: Printer): void;
    printDefaultValueSetter(printer: Printer): void;
    printGetter(printer: Printer): void;
    printSetter(printer: Printer): void;
    printToObjectMapping(printer: Printer): void;
    printAsObjectMapping(printer: Printer): void;
    printToProtobufJSONMapping(printer: Printer): void;
    printAsJSONMapping(printer: Printer): void;
}
