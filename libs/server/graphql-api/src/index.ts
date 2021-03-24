// MERGED TYPE DEFINITIONS
import { mergeTypeDefs } from '@graphql-tools/merge';
import * as userTypeDefs from './lib/user/user.type-defs.graphql';
import * as postTypeDefs from './lib/post/post.type-defs.graphql';

export const typeDefs = mergeTypeDefs([userTypeDefs, postTypeDefs]);

// MERGED RESOLVERS
import merge from 'lodash/merge';
import { graphqlScalarsResolver } from './lib/custom-resolver';
import { postResolver } from './lib/post/post-resolver';
import { userResolver } from './lib/user/user-resolver';

export const resolvers = merge(
  graphqlScalarsResolver,
  postResolver,
  userResolver
);
