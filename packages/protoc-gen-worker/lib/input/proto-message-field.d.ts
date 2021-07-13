import { ProtoMessageFieldCardinality, ProtoMessageFieldType } from './types';
export declare class ProtoMessageField {
    name: string;
    number: number;
    label: ProtoMessageFieldCardinality;
    type: ProtoMessageFieldType;
    typeName: string;
    jsonName: string;
    oneofIndex?: number;
    options: {
        ctype: number;
        deprecated: boolean;
        jstype: number;
        lazy: boolean;
        uninterpretedOptionList: any[];
        weak: boolean;
        packed: boolean;
    };
    proto3Optional: boolean;
    constructor(value: ProtoMessageField);
}
