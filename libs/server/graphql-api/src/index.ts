// MERGED SCHEMAS
import { mergeTypeDefs } from '@graphql-tools/merge';
import * as userSchema from './lib/user/user-schema.graphql';
import * as postSchema from './lib/post/post-schema.graphql';

export const typeDefs = mergeTypeDefs([userSchema, postSchema]);

// MERGED RESOLVERS
import merge from 'lodash/merge';
import { graphqlScalarsResolver } from './lib/graphql-scalars/graphql-scalars-resolver';
import { postResolver } from './lib/post/post-resolver';
import { userResolver } from './lib/user/user-resolver';

export const resolvers = merge(
  graphqlScalarsResolver,
  postResolver,
  userResolver
);
