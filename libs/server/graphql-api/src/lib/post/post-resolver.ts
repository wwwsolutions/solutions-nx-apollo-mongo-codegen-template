/* eslint-disable @typescript-eslint/no-explicit-any */

import { ObjectID } from 'mongodb';

// AUTO GENERATED TYPES
import {
  User,
  UserDbObject,
  Post,
  PostDbObject,
  PublishPostInput,
} from '@server/data-access-models';

// PROVIDERS
import { mongoDbProvider } from '@server/providers';

// MOCK
const mockCurrentUserId = '0123456789abcdef01234567';

// RESOLVERS
export const postResolver = {
  Mutation: {
    publishPost: async (
      obj: any, // root
      { input }: { input: PublishPostInput } // args
    ): Promise<PostDbObject> => {
      const result = await mongoDbProvider.postsCollection.insertOne({
        content: input.content,
        title: input.title,
        publishedAt: new Date().toISOString(),
        author: new ObjectID(mockCurrentUserId),
      });

      return result.ops[0] as PostDbObject;
    },
  },

  Post: {
    id: (obj: Post | PostDbObject): string =>
      (obj as PostDbObject)._id
        ? (obj as PostDbObject)._id.toString()
        : (obj as Post).id,

    author: async (obj: Post | PostDbObject): Promise<User | UserDbObject> =>
      obj.author instanceof ObjectID
        ? (mongoDbProvider.usersCollection.findOne({
            _id: obj.author,
          }) as Promise<UserDbObject>)
        : obj.author,
  },
};
