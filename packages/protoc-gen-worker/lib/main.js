#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const plugin_pb_1 = require("google-protobuf/google/protobuf/compiler/plugin_pb");
const path_1 = require("path");
const config_1 = require("./config");
const proto_1 = require("./input/proto");
const logger_1 = require("./logger");
const pb_file_1 = require("./output/files/pb-file");
const pbsc_file_1 = require("./output/files/pbsc-file");
const pbwsc_file_1 = require("./output/files/pbwsc-file");
const printer_1 = require("./output/misc/printer");
const services_1 = require("./services");
async function readStream(stream) {
    const chunks = [];
    for await (const chunk of stream) {
        chunks.push(chunk);
    }
    return Buffer.concat(chunks);
}
async function main() {
    const inputBuff = await readStream(process.stdin);
    try {
        const request = plugin_pb_1.CodeGeneratorRequest.deserializeBinary(inputBuff);
        const response = new plugin_pb_1.CodeGeneratorResponse();
        response.setSupportedFeatures(plugin_pb_1.CodeGeneratorResponse.Feature.FEATURE_PROTO3_OPTIONAL);
        const parameter = request.getParameter();
        services_1.Services.Config = config_1.Config.fromParameter(parameter ?? '');
        services_1.Services.Logger = new logger_1.Logger(services_1.Services.Config.debug);
        const protos = request
            .getProtoFileList()
            .map((d) => new proto_1.Proto(d.toObject()));
        if (services_1.Services.Config.debug) {
            fs_1.mkdirSync('debug', { recursive: true });
            fs_1.writeFileSync(path_1.join('debug', 'config.json'), JSON.stringify(services_1.Services.Config, null, 2), 'utf-8');
            fs_1.writeFileSync(path_1.join('debug', 'parsed-protoc-gen-ng.json'), JSON.stringify(protos, null, 2), 'utf-8');
        }
        protos.forEach((p) => p.setupDependencies(protos));
        protos.forEach((p) => p.resolveTransitiveDependencies());
        const genwkt = services_1.Services.Config.embedWellKnownTypes;
        protos
            .filter((p) => genwkt || (!genwkt && p.pb_package !== 'google.protobuf'))
            .forEach((proto) => {
            services_1.Services.Logger.debug(`Start processing proto ${proto.name}`);
            const basename = proto.getGeneratedFileBaseName();
            const files = [];
            if (proto.serviceList.length) {
                if (services_1.Services.Config.files.pbsc.generate) {
                    const pbscPrinter = new printer_1.Printer();
                    const pbscFile = new pbsc_file_1.PbscFile(proto);
                    pbscFile.print(pbscPrinter);
                    files.push({
                        name: basename + 'sc.ts',
                        content: pbscPrinter.finalize(),
                    });
                }
                if (services_1.Services.Config.files.pbwsc.generate) {
                    const pbwscPrinter = new printer_1.Printer();
                    const pbwscFile = new pbwsc_file_1.PbwscFile(proto);
                    pbwscFile.print(pbwscPrinter);
                    files.push({
                        name: basename + 'wsc.ts',
                        content: pbwscPrinter.finalize(),
                    });
                }
            }
            if (services_1.Services.Config.files.pb.generate) {
                const pbPrinter = new printer_1.Printer();
                const pbFile = new pb_file_1.PbFile(proto);
                pbFile.print(pbPrinter);
                files.push({ name: basename + '.ts', content: pbPrinter.finalize() });
            }
            services_1.Services.Logger.debug(`End processing proto ${proto.name}`);
            files.forEach((f) => response.addFile(new plugin_pb_1.CodeGeneratorResponse.File()
                .setName(f.name)
                .setContent(f.content)));
        });
        process.stdout.write(Buffer.from(response.serializeBinary().buffer));
    }
    catch (err) {
        services_1.Services.Logger?.debug(err);
        services_1.Services.Logger?.debug(err.stack);
        console.error('protoc-gen-ng error: ' + err.stack + '\n');
        process.exit(1);
    }
}
main();
//# sourceMappingURL=main.js.map