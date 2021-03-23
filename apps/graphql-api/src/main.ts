import { DIRECTIVES } from '@graphql-codegen/typescript-mongodb';
import { ApolloServer } from 'apollo-server';
import {
  DateTimeMock,
  EmailAddressMock,
  UnsignedIntMock,
} from 'graphql-scalars';

// ENVIRONMENTS
import { environment } from './environments/environment';

// MONGODB PROVIDER
import { addMockUsersAsync, mongoDbProvider } from './mongodb.provider';

// GRAPHQL
import { resolvers } from './resolvers';
import * as typeDefs from './type-defs.graphql';

console.log('environment = ', environment);

// // APOLLO SERVER
// const serverConfig = {
//   resolvers,
//   typeDefs,
//   introspection: environment.apollo.introspection,
//   mocks: {
//     DateTime: DateTimeMock,
//     EmailAddress: EmailAddressMock,
//     UnsignedInt: UnsignedIntMock,
//   }, // TODO: Remove in PROD.
//   mockEntireSchema: false, // TODO: Remove in PROD.
//   playground: environment.apollo.playground,
// };

// const server = new ApolloServer(serverConfig);

// server
//   .listen(environment.port)
//   .then(({ url }) => console.log(`Server ready at ${url}. `));

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

  // if (module.hot) {
  //   module.hot.accept();
  //   module.hot.dispose(async () => {
  //     server.stop();
  //     await mongoDbProvider.closeAsync();
  //   });
  // }
})();
