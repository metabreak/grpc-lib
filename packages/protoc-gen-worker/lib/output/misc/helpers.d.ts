import { Proto } from '../../input/proto';
import { ProtoMessageField } from '../../input/proto-message-field';
export declare function isFieldMap(proto: Proto, field: ProtoMessageField): boolean;
export declare function getMapKeyValueFields(proto: Proto, field: ProtoMessageField): ProtoMessageField[];
export declare function isFieldMessage(field: ProtoMessageField): boolean;
interface GetDataTypeOptions {
    ignoreRepeating?: boolean;
    asObjectDataType?: boolean;
    asProtobufJSONDataType?: boolean;
}
export declare function getDataType(proto: Proto, field: ProtoMessageField, options?: GetDataTypeOptions): string;
export declare function isPacked(proto: Proto, field: ProtoMessageField): boolean;
export declare function isNumberNumber(field: ProtoMessageField): boolean;
export declare function isNumberString(field: ProtoMessageField): boolean;
export declare function isNumeric(field: ProtoMessageField): boolean;
export {};
