import { ProtoServiceMethodOptions } from './proto-service-method-options';
export declare class ServiceMethod {
    name: string;
    inputType: string;
    outputType: string;
    clientStreaming: boolean;
    serverStreaming: boolean;
    options: ProtoServiceMethodOptions;
    constructor(value: ServiceMethod);
}
