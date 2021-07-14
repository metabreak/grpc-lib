const path = require('path');
const fs = require('fs');
const rimraf = require('rimraf');
const { exec } = require('child_process');

const buildPath = path.resolve(__dirname, '../src/proto');

rimraf.sync(buildPath);
fs.mkdirSync(buildPath);

const protocWorkerCmd = [
  'protoc',
  `--proto_path=../proto`,
  '--plugin=protoc-gen-worker=$(yarn bin protoc-gen-worker)',
  `--worker_out=config=./protoc-gen-worker.config.js:${buildPath}`,
  '../proto/*.proto',
].join(' ');

exec(protocWorkerCmd, (error) => {
  if (error) {
    throw error;
  } else {
    console.log(`Generate protobuf successfully complete\n`);
  }
});
