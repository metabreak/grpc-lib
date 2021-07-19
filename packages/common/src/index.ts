/*
  DOM-free chunk

  IMPORTANT: all dependencies must be DOM-references-free because it might breaks Worker environment; in other words
    - do not import to @angular/* and other DOM-related packages in any level of import
    - do not use Window / Document etc
*/

export * from './grpc-client';
export * from './grpc-event';
export * from './grpc-message';
export * from './grpc-message-class';
export * from './grpc-message-pool';
export * from './grpc-metadata';
export * from './recursive-partial';
export * from './utils';
export * from './grpc-worker-client';
