## @metabreak/grpc-worker 1.0.0 (2021-07-20)


### ⚠ BREAKING CHANGES

* GrpcClient, GrpcClientSettings, GrpcCallType, GrpcRequest, GrpcMessageClass, GrpcMessage and RecursivePartial are not anymore available in  @ngx-grpc/core

feat(core): add GRPC_CLIENT_FACTORY to define which client implementation should be used
* GRPC_CLIENT_FACTORY must be provided. GrpcClient is renamed to GrpcStandardClient

feat(worker): create packate @ngx-grpc/worker

feat(worker-client): create packate @ngx-grpc/worker-client

chore: change release process in order to release multiple packages

docs: add changelog references

chore: release 0.2.0 [ci skip]

docs: add worker documentation

chore: move libs to packages; create basic example

chore: upgrade to angular@9

feat(common): add grpc events

feat(common): change GrpcClient method definitions to always emit GrpcEvent
* all GrpcClient implementations should be adapted to implement new response type

feat(core): add rxjs operators for better development experience with event streams

feat(core): change GrpcHandler, GrpcStandardClient and GrpcInterceptor to use new response type GrpcEvent
* all existing interceptors should be adapted to use event streams

fix(worker): use proper Error object from grpc-web for error responses

feat(worker-client): rework GrpcWorkerClient and gateway to emit GrpcEvent

docs: finalize basic example

docs: update readme

chore: upgrade protoc plugin to the latest version

chore: release 0.3.0 [ci skip]

chore: fix package-lock.json

docs: update README

docs: update README

docs: fix typo in example

refactor(core): add comment

fix(worker): add missing zero-status for unary events

docs: add worker example

chore: release 0.3.1 [ci skip]

docs: fix examples instructions

feat(grpc-web-client): separate grpc-web-client into a separate library; add global configuration support
* GrpcStandardClientFactory and GrpcStandardClient are renamed to GrpcWebClientFactory and GrpcWebClient correspondingly and moved to @ngx-grpc/grpc-web-client

feat(worker): add global configuration support

docs: update examples

fix: fix grpc-web-client not being published

chore: release 0.4.0 [ci skip]

chore: release 0.4.1 [ci skip]

docs: update README

docs: update README

feat(core): add GrpcConsoleLoggerInterceptor

chore: fix build

chore: release 0.4.2 [ci skip]

chore: update grpc-web

fix(grpc-web-client): handle breaking changes of grpc-web@1.2.0

fix(worker): handle breaking changes of grpc-web@1.2.0

docs: add logger to the examples

feat: upgrade to angular 10

feat(protoc-gen-ng): move from https://github.com/ngx-grpc/protoc-gen-ng
* protoc-gen-ng is tracked with the rest of the packages ecosystem and will follow the same versioning system

chore: prepare semantic release for normal release flow

chore: fix start:lib:protoc-gen-ng
* generated enum values now fully reflect the way they are defined in proto file (the same name is used, unless it is not a reserved JS word)

docs: simplify examples guide

feat(core): add UnaryRpcRef and ServerStreamRpcRef

feat(protoc-gen-ng): change the output of RPCs to corresponding RpcRef
* every rpc has only one corresponding method ($eventStream methods got removed) and the returned type is changed from Observable to UnaryRpcRef or ServerStreamRpcRef; the RpcRef contains data and events observables that represent the 2 methods that were generated before

docs: update README

fix(protoc-gen-ng): properly clone maps in initialization and toObject functions

feat(common): add types documentation

feat(core): add types documentation

fix(core): handle non-multi interceptors configuration

feat(grpc-web-client): add types documentation

feat(worker-client): add types documentation

feat(worker): add types documentation

feat(protoc-gen-ng): extend generated types documentation
* toBinary is now non-static method and is called serializeBinary; fromBinary, fromBinaryReader and toBinaryWriter are renamed to deserializeBinary, deserializeBinaryFromReader and serializeBinaryToWriter correspondingly

chore: update dev dependencies

refactor: roll back several changes
* messages re-exports are no longer available, use direct imports instead

refactor: add deprecation comments

chore: update grpc-web version for ci

fix(grpc-web-client): use MethodDescriptor instead of deprecated MethodInfo

fix(grpc-worker): use MethodDescriptor instead of deprecated MethodInfo

feat: update all dependencies

feat: add protobuf JSON mapping implementation and full support of google.protobuf.Any

style: fix lint errors
* all well-known types are served with separate package that needs to be installed with `npm i @ngx-grpc/well-known-types`. If you want to keep the old behaviour, use generateWellKnownTypes plugin option

fix(core): add missing request metadata for logger errors

feat: add method `getSettings` to each client's implementation
* GRPC_CONSOLE_LOGGER_ENABLED is removed in favour of more general GRPC_LOGGER_SETTINGS. The logger is renamed to GrpcLoggerInterceptor. By default, the logger is enabled (before by default ut was disabled).

feat: remove GrpcClientSettings in favour of having the settings defined by each client implementation
* GrpcClientSettings is removed, use the specific client settings instead; e.g. GrpcWebClientSettings or GrpcWorkerClientSettings for corresponding clients

chore: release 0.4.3 [ci skip]

chore: release 1.0.0 [ci skip]

docs: remove reverted changes from changelog [ci skip]

chore: release 1.0.1 [ci skip]

chore: release 1.0.2 [ci skip]

docs: add windows generate command example

chore: release 1.0.3 [ci skip]

chore: release 1.0.4 [ci skip]

docs: update readme

feat(protoc-gen-ng): add configuration file support
* `worker=true` compiler argument is removed; the same configuration can be achieved within the config file

chore: upgrade to angular@11

chore: update deps
* The way to configure the project has been changed. Use corresponding modules for core, logger and client implementations. All services are injected with `providedIn: 'any'` instead of 'root'. If you want to change this behaviour use corresponding generator setting

docs: update docs

style: fix lint error

chore: revert to npm@6 lock file

feat: add @improbable-eng/grpc-web client implementation

feat: use class GrpcMetadata instead of metadata hashmap
* metadata is not a hashmap anymore, use GrpcMetadata instead. GrpcStatusEvent properties code and details are renamed to statusCode and statusMessage correspondingly

feat: reduce service client clutter by moving all raw (former $eventStream) methods under a $raw property
* $eventStream methods are moved to $raw property

docs: update README

style: fix linter errors

chore: release 2.0.0 [ci skip]

docs: fix typo

docs: update README

fix(improbable-eng-grpc-web-client): use proper name to publish the package

fix(grpc-web-client): properly create errors metadata

chore: release 2.0.1 [ci skip]

docs: update readme

docs: fix link

fix(common): fix uint8ArrayToBase64 implementation

### Bug Fixes

* add eslint and fix lint errors ([5c922f0](https://github.com/metabreak/grpc-lib/commit/5c922f0b89c3b74968f8c1547b26999bde4d6f62))
* **protoc-gen-worker:** set correct return types for `toProtobufJSON` methods ([46914e8](https://github.com/metabreak/grpc-lib/commit/46914e8465a55f7c9810f17736a99558f93dc4c1))


### Miscellaneous Chores

* clone and squash ngrx-grpc repo ([ca53b99](https://github.com/metabreak/grpc-lib/commit/ca53b99e8311c8f84ed09f2f2f304693aea371ad)), closes [#11](https://github.com/metabreak/grpc-lib/issues/11) [#5](https://github.com/metabreak/grpc-lib/issues/5) [#9](https://github.com/metabreak/grpc-lib/issues/9) [#19](https://github.com/metabreak/grpc-lib/issues/19) [#13](https://github.com/metabreak/grpc-lib/issues/13) [#29](https://github.com/metabreak/grpc-lib/issues/29) [#30](https://github.com/metabreak/grpc-lib/issues/30) [#15](https://github.com/metabreak/grpc-lib/issues/15) [#21](https://github.com/metabreak/grpc-lib/issues/21) [#18](https://github.com/metabreak/grpc-lib/issues/18) [#37](https://github.com/metabreak/grpc-lib/issues/37) [#50](https://github.com/metabreak/grpc-lib/issues/50)



### Dependencies

* **@metabreak/grpc-common:** upgraded to 1.0.0
