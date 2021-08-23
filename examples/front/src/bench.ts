import { GrpcWebClient } from '@metabreak/grpc-web-client';
import { GrpcWorkerClient } from '@metabreak/grpc-worker-client';
import { GrpcWorkerGateway } from '@metabreak/grpc-worker-gateway';

import { EchoComplexRequest, EchoComplexResponse } from './proto/echo.pb';
import { GrpcWorkerEchoServiceClientDef } from './proto/echo.pbwsc';
import { GrpcMetadata } from '@metabreak/grpc-common';
import { tap } from 'rxjs/operators';

const clientSettings = { host: 'http://localhost:8080' };
const webClient = new GrpcWebClient(clientSettings);
const worker = new Worker(new URL('./grpc.worker', import.meta.url), {
  type: 'module',
});
const gateway = new GrpcWorkerGateway(worker);
const workerClient = new GrpcWorkerClient(
  GrpcWorkerEchoServiceClientDef.serviceId,
  clientSettings,
  gateway,
);

const request = new EchoComplexRequest({
  message: 'stream test',
  chunksize: 10000,
  updates: 1000,
});

async function handleWebClientStream() {
  console.log('handleWebClientStream');
  const resp = webClient.serverStream(
    '/echo.EchoService/EchoComplexStream',
    request,
    new GrpcMetadata(),
    EchoComplexRequest,
    EchoComplexResponse,
  );

  resp.pipe(tap((event) => console.log(event))).subscribe();
}

async function handleWorkerClientStream() {
  console.log('handleWorkerClientStream');
  const resp = workerClient.serverStream(
    '/echo.EchoService/EchoComplexStream',
    request,
    new GrpcMetadata(),
    EchoComplexRequest,
    EchoComplexResponse,
  );

  resp.pipe(tap((event) => console.log(event))).subscribe();
}

(() => {
  console.debug('example loaded');

  document
    .getElementById('web-stream-btn')
    ?.addEventListener('click', handleWebClientStream);

  document
    .getElementById('worker-stream-btn')
    ?.addEventListener('click', handleWorkerClientStream);
})();
