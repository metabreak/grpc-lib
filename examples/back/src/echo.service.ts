import { Timestamp } from 'google-protobuf/google/protobuf/timestamp_pb';
import {
  Metadata,
  sendUnaryData,
  ServerUnaryCall,
  ServerWritableStream,
  ServiceError,
  status,
} from 'grpc';
import { IEchoServiceServer } from './proto/echo_grpc_pb';
import {
  EchoRequest,
  EchoResponse,
  EchoComplexRequest,
  EchoComplexResponse,
} from './proto/echo_pb';

function createTimestamp(date: Date) {
  const ts = new Timestamp();

  ts.fromDate(date);

  return ts;
}

export class EchoServiceServiceImpl implements IEchoServiceServer {
  async echoStream(call: ServerWritableStream<EchoRequest>): Promise<void> {
    const message = call.request.getMessage();

    console.log(`Received message: ${message}`);

    for (let i = 0; i < 5; i++) {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          if (call.cancelled) {
            console.log('Request is cancelled');
            reject();
          }

          const messageBack = `Response ${i + 1} for "${message}"`;

          console.log(`Responding with: ${messageBack}`);

          const response = new EchoResponse();

          response.setMessage(messageBack);
          response.setTimestamp(createTimestamp(new Date()));

          call.write(response);

          if (call.request.getShouldthrow()) {
            call.emit('error', {
              code: status.INTERNAL,
              message: 'Internal error',
            });

            reject();
          }

          resolve(undefined);
        }, 1000);
      });
    }

    const meta = new Metadata();

    meta.set('x-custom-header-1', 'bla');

    call.end(meta);
  }

  echoOnce(
    call: ServerUnaryCall<EchoRequest>,
    callback: sendUnaryData<EchoResponse>,
  ): void {
    const message = call.request.getMessage();

    console.log(`Received message: ${message}`);

    if (call.request.getShouldthrow()) {
      const metadata = new Metadata();

      metadata.set('x-custom-header-1', 'wow');

      callback(
        {
          code: status.INTERNAL,
          details: 'Internal error',
          metadata,
        } as ServiceError,
        null,
        metadata,
      );

      return;
    }

    const response = new EchoResponse();
    const messageBack = `Response for "${message}"`;

    response.setMessage(messageBack);
    response.setTimestamp(createTimestamp(new Date()));

    console.log(`Responding with: ${messageBack}`);

    callback(null, response);
  }

  async echoComplexStream(
    call: ServerWritableStream<EchoComplexRequest>,
  ): Promise<void> {
    const message = call.request.getMessage();
    const updates = call.request.getUpdates();
    const chunksize = call.request.getChunksize();

    console.log(`Received message: ${message}`);

    for (let i = 0; i < updates; i++) {
      await new Promise((resolve, reject) => {
        if (call.cancelled) {
          console.log('Request is cancelled');
          reject();
        }

        const response = new EchoComplexResponse();
        const respMessages = [];
        for (let index = 0; index < chunksize; index++) {
          respMessages.push(`[${i + 1}:${index + 1}] ${message}`);
        }

        response.setChunk(i);
        response.setMessaggesList(respMessages);

        call.write(response);

        resolve(undefined);
      });
    }

    const meta = new Metadata();

    call.end(meta);
  }
}
