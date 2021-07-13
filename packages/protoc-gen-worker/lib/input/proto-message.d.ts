import { ProtoEnum } from './proto-enum';
import { ProtoMessageField } from './proto-message-field';
import { ProtoOneof } from './proto-oneof';
export declare class ProtoMessage {
    name: string;
    fieldList: ProtoMessageField[];
    extensionList: [];
    nestedTypeList: ProtoMessage[];
    enumTypeList: ProtoEnum[];
    extensionRangeList: [];
    oneofDeclList: ProtoOneof[];
    reservedRangeList: [];
    reservedNameList: [];
    options: {
        messageSetWireFormat: boolean;
        noStandardDescriptorAccessor: boolean;
        deprecated: boolean;
        mapEntry: boolean;
        uninterpretedOptionList: any[];
    };
    constructor(value: ProtoMessage);
}
