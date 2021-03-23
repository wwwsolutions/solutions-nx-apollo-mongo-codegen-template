import { Environment } from './environment.interface';

const defaultPort = 4001;

export const environment: Environment = {
  production: process.env.NODE_ENV === 'true',
  apollo: {
    introspection: process.env.APOLLO_INTROSPECTION === 'false',
    playground: process.env.APOLLO_PLAYGROUND === 'false',
  },
  port: process.env.PORT || defaultPort,
};
