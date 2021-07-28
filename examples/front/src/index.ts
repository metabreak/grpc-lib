import { GrpcWebClient } from '@metabreak/grpc-web-client';
import { GrpcWorkerClient } from '@metabreak/grpc-worker-client';
import { GrpcWorkerGateway } from '@metabreak/grpc-worker-gateway';
import { EchoRequest, EchoResponse } from './proto/echo.pb';
import { GrpcWorkerEchoServiceClientDef } from './proto/echo.pbwsc';
import { GrpcMetadata } from '@metabreak/grpc-common';
import { tap } from 'rxjs/operators';
import { EchoServiceService } from './proto/echo.pbsc';

// Raw clients usage example
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
  const resp = await webClient.unaryAsPromise(
    '/echo.EchoService/EchoOnce',
    new EchoRequest({ message: 'echo test' }),
    new GrpcMetadata(),
    EchoRequest,
    EchoResponse,
  );

  console.log(resp);
}

async function handleUnaryAsObservableWebBtnClick() {
  const resp = webClient.unaryAsObservable(
    '/echo.EchoService/EchoOnce',
    new EchoRequest({ message: 'echo test' }),
    new GrpcMetadata(),
    EchoRequest,
    EchoResponse,
  );

  resp.pipe(tap((event) => console.log(event))).subscribe();
}

async function handleStreamWebBtnClick() {
  const resp = webClient.serverStream(
    '/echo.EchoService/EchoStream',
    new EchoRequest({ message: 'stream test' }),
    new GrpcMetadata(),
    EchoRequest,
    EchoResponse,
  );

  resp.pipe(tap((event) => console.log(event))).subscribe();
}

async function handleUnaryAsPromiseWorkerBtnClick() {
  const resp = await workerClient.unaryAsPromise(
    '/echo.EchoService/EchoOnce',
    new EchoRequest({ message: 'echo test' }),
    new GrpcMetadata(),
    EchoRequest,
    EchoResponse,
  );

  console.log(resp);
}

async function handleUnaryAsObservableWorkerBtnClick() {
  const resp = workerClient.unaryAsObservable(
    '/echo.EchoService/EchoOnce',
    new EchoRequest({ message: 'echo test' }),
    new GrpcMetadata(),
    EchoRequest,
    EchoResponse,
  );

  resp.pipe(tap((event) => console.log(event))).subscribe();
}

async function handleStreamWorkerBtnClick() {
  const resp = workerClient.serverStream(
    '/echo.EchoService/EchoStream',
    new EchoRequest({ message: 'stream test' }),
    new GrpcMetadata(),
    EchoRequest,
    EchoResponse,
  );

  resp.pipe(tap((event) => console.log(event))).subscribe();
}

// Service usage example
const webService = new EchoServiceService(webClient);
const workerService = new EchoServiceService(workerClient);

async function handleServiceUnaryAsPromiseWebBtnClick() {
  const resp = await webService.echoOnce({ message: 'echo test' }, {}, true);

  console.log(resp);
}

async function handleServiceUnaryAsObservableWebBtnClick() {
  const resp = webService.echoOnce({ message: 'echo test' }, {}, false);

  resp.pipe(tap((event) => console.log(event))).subscribe();
}

async function handleServiceStreamWebBtnClick() {
  const resp = webService.echoStream({ message: 'echo test' }, {});

  resp.pipe(tap((event) => console.log(event))).subscribe();
}

async function handleServiceUnaryAsPromiseWorkerBtnClick() {
  const resp = await workerService.echoOnce({ message: 'echo test' }, {}, true);

  console.log(resp);
}

async function handleServiceUnaryAsObservableWorkerBtnClick() {
  const resp = workerService.echoOnce({ message: 'echo test' }, {}, false);

  resp.pipe(tap((event) => console.log(event))).subscribe();
}

async function handleServiceStreamWorkerBtnClick() {
  const resp = workerService.echoStream({ message: 'echo test' }, {});

  resp.pipe(tap((event) => console.log(event))).subscribe();
}

(() => {
  console.debug('example loaded');

  // Raw client test buttons
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

  // Service test buttons
  document
    .getElementById('service-web-unary-promise-btn')
    ?.addEventListener('click', handleServiceUnaryAsPromiseWebBtnClick);
  document
    .getElementById('service-web-unary-observable-btn')
    ?.addEventListener('click', handleServiceUnaryAsObservableWebBtnClick);
  document
    .getElementById('service-web-stream-btn')
    ?.addEventListener('click', handleServiceStreamWebBtnClick);

  document
    .getElementById('service-worker-unary-promise-btn')
    ?.addEventListener('click', handleServiceUnaryAsPromiseWorkerBtnClick);
  document
    .getElementById('service-worker-unary-observable-btn')
    ?.addEventListener('click', handleServiceUnaryAsObservableWorkerBtnClick);
  document
    .getElementById('service-worker-stream-btn')
    ?.addEventListener('click', handleServiceStreamWorkerBtnClick);
})();
