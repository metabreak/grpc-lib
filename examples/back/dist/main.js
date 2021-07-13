"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var grpc_1 = require("grpc");
var echo_service_1 = require("./echo.service");
var echo_grpc_pb_1 = require("./proto/echo_grpc_pb");
var port = 6852;
var server = new grpc_1.Server();
server.addService(echo_grpc_pb_1.EchoServiceService, new echo_service_1.EchoServiceServiceImpl());
server.bind("0.0.0.0:" + port, grpc_1.ServerCredentials.createInsecure());
server.start();
console.log("Server started on port " + port);
//# sourceMappingURL=main.js.map