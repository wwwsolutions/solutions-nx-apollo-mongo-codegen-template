/* eslint-disable @typescript-eslint/no-explicit-any */

import { ObjectID } from 'mongodb';

// AUTO GENERATED TYPES
import { User, UserDbObject, Post } from '@server/data-access-models';

// DB PROVIDER
import { mongoDbProvider } from '@server/providers';

// RESOLVERS
export const userResolver = {
  User: {
    id: (obj: User | UserDbObject): string =>
      (obj as UserDbObject)._id
        ? (obj as UserDbObject)._id.toString()
        : (obj as User).id,
    posts: (obj: User | UserDbObject): Promise<Post[]> =>
      mongoDbProvider.postsCollection
        .find({
          author: (obj as User).id
            ? new ObjectID((obj as User).id)
            : (obj as UserDbObject)._id,
        })
        .toArray(),
  },
};
