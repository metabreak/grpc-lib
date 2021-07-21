# @metabreak/grpc-lib

Web gRPC framework which has ability to use from Web Workers.

[![Workflow status](https://img.shields.io/github/workflow/status/metabreak/grpc-lib/Push)](https://github.com/metabreak/grpc-lib/actions/workflows/push.yml)

## Features

- two-way-binding-friendly protobuf messages implementation (instead of Java-like setters / getters in original google-protobuf)
- typescript first-class support
- rxjs first-class support
  <!-- - interceptors -->
  <!-- - logger -->
- support for well-known types, including `Any`
- support for [JSON mappings](https://developers.google.com/protocol-buffers/docs/proto3#json)
- 2 different client implementations: basic web client and client witch communicate with backend from web worker
- easy to install, update and support thanks to npm packages

## Example

> The example requires docker & docker-compose to be installed

Clone this repository and run

```
npm install
npm run build
npm run generate:examples
npm run build:examples
npm run start:examples
```

Now open your browser at [http://localhost:4200/](http://localhost:4200/). The source code could be found at [examples](examples) directory.

## Installation

> The documentation uses @metabreak/grpc-web-client by default, however is applicable to any client you choose.

First ensure that you

- installed `protoc` [as a binary](https://github.com/protocolbuffers/protobuf#protocol-compiler-installation) or as a part of `grpc-tools` npm package
- configured your backend / grpc-web proxy according to [grpc-web documentation](https://github.com/grpc/grpc-web) or follow documentation of the alternative client if you use one

Then in your project's root directory run

```sh
npm i -S @metabreak/common @metabreak/grpc-web-client google-protobuf rxjs
npm i -D @metabreak/protoc-gen-worker @types/google-protobuf
```

Where:

- [@metabreak/common](https://github.com/metabreak/grpc-lib/tree/master/packages/common) contains common reusable types for other ngx-grpc packages
- [@metabreak/grpc-web-client](https://github.com/metabreak/grpc-lib/tree/master/packages/web-client) provides a client based on [grpc-web](https://github.com/grpc/grpc-web)
- [@metabreak/protoc-gen-worker](https://github.com/metabreak/grpc-lib/tree/master/packages/protoc-gen-worker) generates the code based on your proto files

Also you can choose between alternative client implementations:

- @metabreak/grpc-web-client - based on [grpc-web](https://github.com/grpc/grpc-web)
- @metabreak/grpc-worker-client - similar to @metabreak/grpc-web-client but running in worker

## Generate the code

### MacOS / Linux

Add `generate:proto` script to your `package.json` `scripts` section:

```json
{
  "scripts": {
    "generate:proto": "protoc --plugin=protoc-gen-worker=$(which protoc-gen-worker) --worker_out=<OUTPUT_PATH> -I <PROTO_DIR_PATH> <PROTO_FILES>"
  }
}
```

Where:

- `OUTPUT_PATH` - the directory your code will be generated at (please ensure the directory exists, otherwise you'll have a `protoc` error)
- `PROTO_DIR_PATH` - the root path of your proto files
- `PROTO_FILES` - list of proto files to use

Example:

```json
{
  "scripts": {
    "generate:proto": "protoc --plugin=protoc-gen-worker=$(which protoc-gen-worker) --worker_out=./src/proto -I ../proto $(find ../proto -iname \"*.proto\")"
  }
}
```

Finally, run `npm run generate:proto` every time you want to (re)generate the code

### Advanced generator config

You can have more control on what and how is being generated. Create a `protoc-gen-worker.config.js` (`.json` format also supported) file in your project root.

E.g. to generate well-known types in your project instead of using `@metabreak/grpc-well-known-types`, use this config:

```js
module.exports = {
  embedWellKnownTypes: true,
};
```

More details on the configuration properties and their default values see [here](https://github.com/metabreak/grpc-lib/blob/master/packages/protoc-gen-worker/src/config.ts).

Then update your package.json command with path to this file `config=./protoc-gen-worker.config.js`:

```json
{
  "scripts": {
    "generate:proto": "protoc --plugin=protoc-gen-worker=$(which protoc-gen-worker) --worker_out=config=./protoc-gen-worker.config.js:./src/proto -I ../proto $(find ../proto -iname \"*.proto\")"
  }
}
```

### Windows

<!-- TODO: Check protoc plugin on Windows  -->

Unfortunately the way to generate files on Windows slightly differs. Here is a sophisticated example that shows how to scan windows folder with proto files and pass it to protoc-gen-worker.

```json
{
  "scripts": {
    "generate:proto:win": "for /f %G in ('dir /b ..\\proto\\*.proto') do grpc_tools_node_protoc --plugin=protoc-gen-worker=.\\node_modules\\.bin\\protoc-gen-worker.cmd --worker_out=.\\output\\path -I ..\\proto ..\\proto\\%G"
  }
}
```

## Usage

<!--
TODO: Write docs about new service client

### Service client methods

Each Unary RPC has two corresponding methods.

- the first, that emits messages, is a direct method of the service client.
- the second, that emits events, is scoped into service client property `$raw`.

E.g. for `rpc Echo(...)` there would be the following:

- `.echo(...)` - returns `Observable` of `GrpcEvent`s. Events could be of two kinds: `GrpcDataEvent` containing the message inside and `GrpcStatusEvent` containing gRPC status response. Apart from the returned data type there is important difference in the behaviour. There are no errors thrown in this stream (by design). All errors are considered to be normal `GrpcStatusEvent`s. Furthermore, this method is the only one where it is anyhow possible to read the gRPC status code `0` (`OK`) metadata. This method is not that comfortable to use in every place, but it can do things that are not achievable with the method above.

There are two custom RxJS operators that could be used on the stream to make it easier:

- `throwStatusErrors` - searches for the non-zero status codes and throws them as errors
- `takeMessages` - searches for the messages

For usage example look at any of your generated `.pbsc.ts` file. In fact, those two operators turn the raw method into a 'normal' one.

### Messages

To create a new message just pass its initial values to the constructor: `new Message(myInitialValues)`. Here is some information on the message's methods:

- `constructor` - accepts a message or an object with initial values. All values are safely / deeply cloned.
- `toObject()` - casts message _as is_ to a normal JavaScript object
- `toJSON()` - convenience method to be able to pass message to `JSON.stringify(msg)`
- `toProtobufJSON()` - constructs a [protobuf-defined JSON](https://developers.google.com/protocol-buffers/docs/proto3#json). Accepts an optional `GrpcMessagePool` (see `google.protobuf.Any` section) which is required only if the message or some of its descendants embeds `google.protobuf.Any`
-->

### Well-known types

The well-known types are served as a separate package. You can also configure generation of the well-known types together with your proto definitions (like older versions did).

Some types have additional functionality, see below.

#### google.protobuf.Any

The `google.protobuf.Any` has additional methods `pack` and `unpack`.

Unpacking the message requires a special message pool `GrpcMessagePool` where the expected message types are listed; otherwise the unpacking would not be possible.

Example of type-safe unpacking:

```ts
// we expect one of 3 message types to be packed into Any
const myAny: Any;
const pool = new GrpcMessagePool([Empty, Timestamp, MyMessage]);

try {
  switch (myAny.getPackedMessageType(pool)) {
    case Empty:
      console.log('Empty found', myAny.unpack<Empty>(pool));
      break;
    case Timestamp:
      console.log('Timestamp found', myAny.unpack<Timestamp>(pool));
      break;
    case MyMessage:
      console.log('MyMessage found', myAny.unpack<MyMessage>(pool));
      break;
    default:
      console.log('No packed message inside');
  }
} catch (ex) {
  console.error(
    'Something went wrong, e.g. packed message definition is not in the pool',
  );
}
```

#### google.protobuf.Timestamp

The `google.protobuf.Timestamp` has additional methods to cast from / to `Date` and ISO string date representation.

## Web worker

Web worker allows to run gRPC clients, messages serialization and deserialization in a separate thread. It might give some performance benefits on large data sets; however the main reason of the worker is to avoid blocking the main thread. That means that rendering engine has more resources to work on rendering while the messages processing is done in parallel.

First, install additional packages:

```sh
npm i -S @metabreak/grpc-worker @metabreak/grpc-worker-client @metabreak/grpc-worker-gateway
```

Then configure the web worker. First you need to adapt the code generation settings (see above) to generate `pbwsc` files. These files will contain the worker service client definitions.

Now create `grpc.worker.ts`. Open this file and add the following content:

```ts
import { GrpcWorker } from '@metabreak/grpc-worker';
import { GrpcWorkerEchoServiceClientDef } from '../proto/echo.pbwsc';

const worker = new GrpcWorker();

worker.register(
  // register here all the service clients definitions
  GrpcWorkerEchoServiceClientDef,
);

worker.start();
```

Finally use the following imports:

```ts
import { GrpcWorkerClient } from '@metabreak/grpc-worker-client';
import { GrpcWorkerGateway } from '@metabreak/grpc-worker-gateway';

const worker = new Worker('./grpc.worker', { type: 'module' });
const gateway = new GrpcWorkerGateway(worker);
const workerClient = new GrpcWorkerClient(
  GrpcWorkerEchoServiceClientDef.serviceId,
  { host: 'http://localhost:8080' },
  gateway,
);
```

That's it. Now you can use `workerClient` and all your requests are served by web worker.

## Not implemented (yet)

- [Proto 2 Extensions](https://developers.google.com/protocol-buffers/docs/proto#extensions)
- Client streaming
- Bidirectional streaming

## Credits

This library is hardly inspired with [nrgx-grpc](https://github.com/ngx-grpc/ngx-grpc) library for Angular

## License

MIT
