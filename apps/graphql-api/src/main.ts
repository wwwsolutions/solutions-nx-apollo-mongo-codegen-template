import { ApolloServer } from 'apollo-server';

import resolvers from './resolvers';
import typeDefs from './type-defs';

console.log(process.env.PORT);
console.log(process.env.APOLLO_INTROSPECTION);
console.log(process.env.APOLLO_PLAYGROUND);

const server = new ApolloServer({ resolvers, typeDefs });

server.listen().then(({ url }) => console.log(`Server ready at ${url}. `));
