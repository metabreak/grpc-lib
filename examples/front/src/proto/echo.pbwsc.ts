/* tslint:disable */
/* eslint-disable */

// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
// File was generated at: 2021-07-28T14:55:49.731Z

import { GrpcCallType } from '@metabreak/grpc-common';
import { GrpcWorkerServiceClientDef } from '@metabreak/grpc-worker';

import * as thisProto from './echo.pb';
import * as googleProtobuf000 from '@metabreak/grpc-well-known-types';
/**
 * Client definition for use in worker
 */
export const GrpcWorkerEchoServiceClientDef: GrpcWorkerServiceClientDef = {
  serviceId: 'echo.EchoService',
  methods: {
    '/echo.EchoService/EchoOnce': {
      type: GrpcCallType.unary,
      reqclss: thisProto.EchoRequest,
      resclss: thisProto.EchoResponse,
    },
    '/echo.EchoService/EchoStream': {
      type: GrpcCallType.serverStream,
      reqclss: thisProto.EchoRequest,
      resclss: thisProto.EchoResponse,
    },
  },
};
