import { ApolloServer } from 'apollo-server';

import resolvers from './resolvers';
import * as typeDefs from './type-defs.graphql';

import { environment } from './environments/environment';

console.log('environment = ', environment);

const serverConfig = {
  resolvers,
  typeDefs,
  introspection: environment.apollo.introspection,
  mocks: true, // TODO: Remove in PROD.
  mockEntireSchema: false, // TODO: Remove in PROD.
  playground: environment.apollo.playground,
};

const server = new ApolloServer(serverConfig);

server
  .listen(environment.port)
  .then(({ url }) => console.log(`Server ready at ${url}. `));
