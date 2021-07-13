import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import { GrpcMessage } from './grpc-message';
export interface GrpcMessageClass<M extends GrpcMessage> {
    new (m?: any): M;
    id: string;
    deserializeBinary: (bytes: ByteSource) => M;
    deserializeBinaryFromReader: (message: M, reader: BinaryReader) => void;
    serializeBinaryToWriter: (message: M, writer: BinaryWriter) => void;
}
//# sourceMappingURL=grpc-message-class.d.ts.map