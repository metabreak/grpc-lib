import { GrpcWorker } from '@metabreak/grpc-worker';
import { GrpcWorkerEchoServiceClientDef } from './proto/echo.pbwsc';

const worker = new GrpcWorker();

worker.register(GrpcWorkerEchoServiceClientDef);

worker.start();
