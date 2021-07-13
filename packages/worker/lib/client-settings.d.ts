export interface GrpcWorkerClientSettings {
    host: string;
    format?: string;
    suppressCorsPreflight?: boolean;
    withCredentials?: boolean;
}
