// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var echo_pb = require('./echo_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_echo_EchoComplexRequest(arg) {
  if (!(arg instanceof echo_pb.EchoComplexRequest)) {
    throw new Error('Expected argument of type echo.EchoComplexRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_echo_EchoComplexRequest(buffer_arg) {
  return echo_pb.EchoComplexRequest.deserializeBinary(
    new Uint8Array(buffer_arg),
  );
}

function serialize_echo_EchoComplexResponse(arg) {
  if (!(arg instanceof echo_pb.EchoComplexResponse)) {
    throw new Error('Expected argument of type echo.EchoComplexResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_echo_EchoComplexResponse(buffer_arg) {
  return echo_pb.EchoComplexResponse.deserializeBinary(
    new Uint8Array(buffer_arg),
  );
}

function serialize_echo_EchoRequest(arg) {
  if (!(arg instanceof echo_pb.EchoRequest)) {
    throw new Error('Expected argument of type echo.EchoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_echo_EchoRequest(buffer_arg) {
  return echo_pb.EchoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_echo_EchoResponse(arg) {
  if (!(arg instanceof echo_pb.EchoResponse)) {
    throw new Error('Expected argument of type echo.EchoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_echo_EchoResponse(buffer_arg) {
  return echo_pb.EchoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

var EchoServiceService = (exports.EchoServiceService = {
  echoOnce: {
    path: '/echo.EchoService/EchoOnce',
    requestStream: false,
    responseStream: false,
    requestType: echo_pb.EchoRequest,
    responseType: echo_pb.EchoResponse,
    requestSerialize: serialize_echo_EchoRequest,
    requestDeserialize: deserialize_echo_EchoRequest,
    responseSerialize: serialize_echo_EchoResponse,
    responseDeserialize: deserialize_echo_EchoResponse,
  },
  echoStream: {
    path: '/echo.EchoService/EchoStream',
    requestStream: false,
    responseStream: true,
    requestType: echo_pb.EchoRequest,
    responseType: echo_pb.EchoResponse,
    requestSerialize: serialize_echo_EchoRequest,
    requestDeserialize: deserialize_echo_EchoRequest,
    responseSerialize: serialize_echo_EchoResponse,
    responseDeserialize: deserialize_echo_EchoResponse,
  },
  echoComplexStream: {
    path: '/echo.EchoService/EchoComplexStream',
    requestStream: false,
    responseStream: true,
    requestType: echo_pb.EchoComplexRequest,
    responseType: echo_pb.EchoComplexResponse,
    requestSerialize: serialize_echo_EchoComplexRequest,
    requestDeserialize: deserialize_echo_EchoComplexRequest,
    responseSerialize: serialize_echo_EchoComplexResponse,
    responseDeserialize: deserialize_echo_EchoComplexResponse,
  },
});

exports.EchoServiceClient =
  grpc.makeGenericClientConstructor(EchoServiceService);
