import { GrpcMessage } from './grpc-message';
import { GrpcMessageClass } from './grpc-message-class';

/**
 * A message pool for using with `google.protobuf.Any`.
 * Pass the array of messages to be registered within the pool and give this pool to `toProtobufJSON` or to `unpack`.
 */
export class GrpcMessagePool {
  private index = new Map<string, GrpcMessageClass<GrpcMessage>>();

  constructor(messages: GrpcMessageClass<GrpcMessage>[]) {
    this.add(messages);
  }

  add(messages: GrpcMessageClass<GrpcMessage>[]): void {
    messages.forEach((message) => {
      this.index.set(message.id, message);
    });
  }

  get(id: string): GrpcMessageClass<GrpcMessage> | undefined {
    return this.index.get(id);
  }
}
