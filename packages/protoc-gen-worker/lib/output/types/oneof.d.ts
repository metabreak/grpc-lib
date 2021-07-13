import { Proto } from '../../input/proto';
import { ProtoMessage } from '../../input/proto-message';
import { ProtoMessageField } from '../../input/proto-message-field';
import { ProtoOneof } from '../../input/proto-oneof';
import { Printer } from '../misc/printer';
export declare class OneOf {
    private proto;
    private message;
    private oneof;
    private attributeName;
    private enumName;
    private index;
    private fields;
    private synthetic;
    constructor(proto: Proto, message: ProtoMessage, oneof: ProtoOneof);
    isSyntheticOneOf(): boolean;
    printEnum(printer: Printer): void;
    printPrivateAttribute(printer: Printer): void;
    printGetter(printer: Printer): void;
    createFieldSetterAddon(field: ProtoMessageField): string;
}
