import { GrpcWebClient } from '@metabreak/grpc-web-client';
import { GrpcWorkerClient } from '@metabreak/grpc-worker-client';
import { GrpcWorkerGateway } from '@metabreak/grpc-worker-gateway';
import { EchoRequest, EchoResponse } from './proto/echo.pb';
import { GrpcWorkerEchoServiceClientDef } from './proto/echo.pbwsc';
import { GrpcMetadata } from '@metabreak/grpc-common';
import { tap } from 'rxjs/operators';

const clientSettings = { host: 'http://localhost:8080' };
const webClient = new GrpcWebClient(clientSettings);
const worker = new Worker('./grpc.worker', { type: 'module' });
const gateway = new GrpcWorkerGateway(worker);
const workerClient = new GrpcWorkerClient(
  GrpcWorkerEchoServiceClientDef.serviceId,
  clientSettings,
  gateway,
);

async function handleUnaryAsPromiseWebBtnClick() {
  const resp = webClient.unaryAsPromise(
    '/echo.EchoService/EchoOnce',
    new EchoRequest({ message: 'echo test' }),
    new GrpcMetadata(),
    EchoRequest,
    EchoResponse,
  );

  resp.then((data) => {
    console.log(data);
  });
}

async function handleUnaryAsObservableWebBtnClick() {
  const resp = webClient.unaryAsObservable(
    '/echo.EchoService/EchoOnce',
    new EchoRequest({ message: 'echo test' }),
    new GrpcMetadata(),
    EchoRequest,
    EchoResponse,
  );

  resp
    .pipe(
      tap((data) => {
        console.log(data);
      }),
    )
    .subscribe();
}

async function handleStreamWebBtnClick() {
  const resp = webClient.serverStream(
    '/echo.EchoService/EchoStream',
    new EchoRequest({ message: 'stream test' }),
    new GrpcMetadata(),
    EchoRequest,
    EchoResponse,
  );

  resp
    .pipe(
      tap((data) => {
        console.log(data);
      }),
    )
    .subscribe();
}

async function handleUnaryAsPromiseWorkerBtnClick() {
  const resp = workerClient.unaryAsPromise(
    '/echo.EchoService/EchoOnce',
    new EchoRequest({ message: 'echo test' }),
    new GrpcMetadata(),
    EchoRequest,
    EchoResponse,
  );

  resp.then((data) => {
    console.log(data);
  });
}

async function handleUnaryAsObservableWorkerBtnClick() {
  const resp = workerClient.unaryAsObservable(
    '/echo.EchoService/EchoOnce',
    new EchoRequest({ message: 'echo test' }),
    new GrpcMetadata(),
    EchoRequest,
    EchoResponse,
  );

  resp
    .pipe(
      tap((data) => {
        console.log(data);
      }),
    )
    .subscribe();
}

async function handleStreamWorkerBtnClick() {
  const resp = workerClient.serverStream(
    '/echo.EchoService/EchoStream',
    new EchoRequest({ message: 'stream test' }),
    new GrpcMetadata(),
    EchoRequest,
    EchoResponse,
  );

  resp
    .pipe(
      tap((data) => {
        console.log(data);
      }),
    )
    .subscribe();
}

(() => {
  console.debug('example loaded');

  document
    .getElementById('web-unary-promise-btn')
    ?.addEventListener('click', handleUnaryAsPromiseWebBtnClick);
  document
    .getElementById('web-unary-observable-btn')
    ?.addEventListener('click', handleUnaryAsObservableWebBtnClick);
  document
    .getElementById('web-stream-btn')
    ?.addEventListener('click', handleStreamWebBtnClick);

  document
    .getElementById('worker-unary-promise-btn')
    ?.addEventListener('click', handleUnaryAsPromiseWorkerBtnClick);
  document
    .getElementById('worker-unary-observable-btn')
    ?.addEventListener('click', handleUnaryAsObservableWorkerBtnClick);
  document
    .getElementById('worker-stream-btn')
    ?.addEventListener('click', handleStreamWorkerBtnClick);
})();
