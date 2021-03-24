import { Environment } from './environment.interface';

const defaultPort = 9000;

export const environment: Environment = {
  production: process.env.NODE_ENV === 'false',
  apollo: {
    introspection: process.env.APOLLO_INTROSPECTION === 'true',
    playground: process.env.APOLLO_PLAYGROUND === 'true',
  },
  mongoDb: {
    databaseName: process.env.MONGODB_DB_NAME as string,
    url: process.env.MONGODB_URL as string,
  },
  port: process.env.PORT || defaultPort,
};
