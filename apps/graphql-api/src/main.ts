import { ApolloServer } from 'apollo-server';

import resolvers from './resolvers';
import typeDefs from './type-defs';

import { environment } from './environments/environment';

console.log('environment = ', environment);

const server = new ApolloServer({
  resolvers,
  typeDefs,
  introspection: environment.apollo.introspection,
  playground: environment.apollo.playground,
});

server.listen().then(({ url }) => console.log(`Server ready at ${url}. `));
