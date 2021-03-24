import { serverEnvironments } from './server-environments';

describe('serverEnvironments', () => {
  it('should work', () => {
    expect(serverEnvironments()).toEqual('server-environments');
  });
});
