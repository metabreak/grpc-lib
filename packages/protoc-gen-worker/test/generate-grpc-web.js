const path = require('path');
const fs = require('fs');
const rimraf = require('rimraf');
const { exec } = require('child_process');

const buildPath = path.resolve(__dirname, '../test/out-grpc-web');

rimraf.sync(buildPath);
fs.mkdirSync(buildPath);

const protocWorkerCmd = [
  'protoc',
  `--proto_path=./test/proto`,
  `--js_out=import_style=commonjs,binary:${buildPath}`,
  `--grpc-web_out=import_style=typescript,mode=grpcwebtext:${buildPath}`,
  './test/proto/*.proto',
].join(' ');

exec(protocWorkerCmd, (error) => {
  if (error) {
    throw error;
  } else {
    console.log(
      `[protoc-gen-worker/test/grpc-web] Generate code from .proto file successfully complete`,
    );
  }
});
