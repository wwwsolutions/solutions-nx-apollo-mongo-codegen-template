import { DIRECTIVES } from '@graphql-codegen/typescript-mongodb';
import { ApolloServer } from 'apollo-server';
import {
  DateTimeMock,
  EmailAddressMock,
  UnsignedIntMock,
} from 'graphql-scalars';

// ENVIRONMENTS
import { environment } from '@server/environments';

console.log('environment = ', environment);

// PROVIDERS
import { addMockUsersAsync, mongoDbProvider } from '@server/providers';

// GRAPHQL
import { resolvers, typeDefs } from '@server/graphql-api';

// BOOTSTRAP
(async function bootstrapAsync(): Promise<void> {
  // CONNECT TO DB
  await mongoDbProvider.connectAsync(environment.mongoDb.databaseName);

  // ADD MOCK USERS DATA INTO `users` COLLECTION IF EMPTY
  await addMockUsersAsync(); // TODO: Remove in PROD.

  // CREATE AND CONFIGURE APOLLO SERVER (WITH MOCKS)
  const server = new ApolloServer({
    resolvers,
    typeDefs: [DIRECTIVES, typeDefs],
    introspection: environment.apollo.introspection,
    mockEntireSchema: false, // TODO: Remove in PROD.
    mocks: {
      DateTime: DateTimeMock,
      EmailAddress: EmailAddressMock,
      UnsignedInt: UnsignedIntMock,
    }, // TODO: Remove in PROD.
    playground: environment.apollo.playground,
  });

  // START SERVER
  server
    .listen(environment.port)
    .then(({ url }) => console.log(`Server ready at ${url}. `));
})();
