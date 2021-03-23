import { ApolloServer } from 'apollo-server';
import {
  DateTimeMock,
  EmailAddressMock,
  UnsignedIntMock,
} from 'graphql-scalars';

import { environment } from './environments/environment';

import { resolvers } from './resolvers';
import * as typeDefs from './type-defs.graphql';

console.log('environment = ', environment);

const serverConfig = {
  resolvers,
  typeDefs,
  introspection: environment.apollo.introspection,
  mocks: {
    DateTime: DateTimeMock,
    EmailAddress: EmailAddressMock,
    UnsignedInt: UnsignedIntMock,
  }, // TODO: Remove in PROD.
  mockEntireSchema: false, // TODO: Remove in PROD.
  playground: environment.apollo.playground,
};

const server = new ApolloServer(serverConfig);

server
  .listen(environment.port)
  .then(({ url }) => console.log(`Server ready at ${url}. `));
