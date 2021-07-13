const path = require('path');
const fs = require('fs');
const rimraf = require('rimraf');
const { exec } = require('child_process');

const srcPath = path.resolve(__dirname, '../src');
const buildPath = path.resolve(srcPath, 'google');

rimraf.sync(buildPath);
fs.mkdirSync(buildPath);

const protocWorkerCmd = [
  'protoc',
  `--proto_path=./proto`,
  '--plugin=protoc-gen-worker=$(yarn bin protoc-gen-worker)',
  `--worker_out=config=./proto-codegen.config.js:${srcPath}`,
  './proto/*.proto',
].join(' ');

exec(protocWorkerCmd, (error) => {
  if (error) {
    throw error;
  } else {
    rimraf.sync(path.resolve(srcPath, 'generate.pb.ts'));
    console.log(`Generate protobuf successfully complete\n`);
  }
});
