import { Environment } from './environment.interface';

const defaultPort = 9001;

export const environment: Environment = {
  production: process.env.NODE_ENV === 'true',
  apollo: {
    introspection: process.env.APOLLO_INTROSPECTION === 'false',
    playground: process.env.APOLLO_PLAYGROUND === 'false',
  },
  mongoDb: {
    databaseName: process.env.MONGODB_DB_NAME as string,
    url: process.env.MONGODB_URL as string,
  },
  port: process.env.PORT || defaultPort,
};
