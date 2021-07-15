import { GrpcWebClient } from '@metabreak/grpc-web-client';
import * as noPackagePb from '../out/no-package.pb';
import * as noPackagePbsc from '../out/no-package.pbsc';

describe('no-package.proto', () => {
  it('should produce TestRequest', () => {
    expect(noPackagePb.TestRequest).toBeTruthy();
    expect(new noPackagePb.TestRequest()).toBeTruthy();
  });

  it('should produce TestResponse', () => {
    expect(noPackagePb.TestResponse).toBeTruthy();
    expect(new noPackagePb.TestResponse()).toBeTruthy();
  });

  it('should produce TestServiceClient', () => {
    expect(noPackagePbsc.TestServiceService).toBeDefined();
    const service = new noPackagePbsc.TestServiceService(
      new GrpcWebClient({ host: 'localhost' }),
    );

    expect(service).toBeDefined();
  });
});
