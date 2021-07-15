const path = require('path');
const fs = require('fs');
const rimraf = require('rimraf');
const { exec } = require('child_process');

const buildPath = path.resolve(__dirname, '../src/proto');
const protoPath = '../proto';

rimraf.sync(buildPath);
fs.mkdirSync(buildPath);

const protocWorkerCmd = [
  'protoc',
  `--proto_path=${protoPath}`,
  '--plugin=protoc-gen-grpc=$(yarn bin grpc_tools_node_protoc_plugin)',
  `--plugin=protoc-gen-ts=$(yarn bin protoc-gen-ts)`,
  `--js_out=import_style=commonjs,binary:${buildPath}`,
  `--grpc_out=${buildPath}`,
  `--ts_out=${buildPath}`,
  `${protoPath}/*.proto`,
].join(' ');

exec(protocWorkerCmd, (error) => {
  if (error) {
    throw error;
  } else {
    console.log(
      `[examples/back] Generate code from .proto file successfully complete`,
    );
  }
});
