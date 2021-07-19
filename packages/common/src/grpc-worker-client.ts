/**
 * Settings for the worker implementation of GrpcClient
 */
export interface GrpcWorkerClientSettings {
  host: string;
  format?: string;
  suppressCorsPreflight?: boolean;
  withCredentials?: boolean;
}
