import { GrpcWebClient } from '@metabreak/grpc-web-client';
import * as deprecatedpb from '../out/deprecated.pb';
import * as deprecatedpbsc from '../out/deprecated.pbsc';

describe('no-package.proto', () => {
  it('should produce TestMessage', () => {
    expect(deprecatedpb.TestMessage).toBeDefined();

    const message = new deprecatedpb.TestMessage();
    expect(message).toBeDefined();
    expect(message.message).toBe('');

    const messageWithText = new deprecatedpb.TestMessage({ message: 'test' });
    expect(messageWithText).toBeDefined();
    expect(messageWithText.message).toBe('test');
  });

  it('should produce TestServiceClient', () => {
    expect(deprecatedpbsc.TestServiceService).toBeTruthy();
    const service = new deprecatedpbsc.TestServiceService(
      new GrpcWebClient({ host: 'localhost' }),
    );
    expect(service).toBeDefined();
    expect(service.test).toBeDefined();
  });
});
