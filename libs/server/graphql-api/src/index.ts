// TYPE DEFINITIONS
import { mergeTypeDefs } from '@graphql-tools/merge';
import * as userTypeDefs from './lib/user/user.type-defs.graphql';
import * as postTypeDefs from './lib/post/post.type-defs.graphql';

export const typeDefs = mergeTypeDefs([userTypeDefs, postTypeDefs]);

// RESOLVERS
export * from './lib/resolvers';
