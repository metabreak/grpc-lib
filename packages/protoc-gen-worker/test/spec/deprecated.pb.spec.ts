import { GrpcHandler } from '@metabreak/grpc-worker-core';
import { GrpcWebClientFactory } from '@metabreak/grpc-worker-client';
import 'jest';
import * as deprecatedpb from '../out/deprecated.pb';
import * as deprecatedpbsc from '../out/deprecated.pbsc';

describe('no-package.proto', () => {
  it('should produce TestMessage', () => {
    expect(deprecatedpb.TestMessage).toBeTruthy();
    expect(new deprecatedpb.TestMessage()).toBeTruthy();
    expect(new deprecatedpb.TestMessage().message).toBe('');
  });

  it('should produce TestServiceClient', () => {
    expect(deprecatedpbsc.TestServiceClient).toBeTruthy();
    expect(
      new deprecatedpbsc.TestServiceClient(
        { host: 'test' },
        new GrpcWebClientFactory({ host: 'localhost' }),
        new GrpcHandler([]),
      ),
    ).toBeTruthy();
    expect(
      new deprecatedpbsc.TestServiceClient(
        { host: 'test' },
        new GrpcWebClientFactory({ host: 'localhost' }),
        new GrpcHandler([]),
      ).test,
    ).toBeTruthy();
  });
});
