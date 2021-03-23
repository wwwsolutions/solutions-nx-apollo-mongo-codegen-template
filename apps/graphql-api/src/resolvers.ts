/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  DateTimeResolver,
  EmailAddressResolver,
  UnsignedIntResolver,
} from 'graphql-scalars';
import { ObjectID } from 'mongodb';

// AUTO GENERATED TYPES
import {
  User,
  UserDbObject,
  Post,
  PostDbObject,
  PublishPostInput,
} from './graphql-codegen-typings';

// DB PROVIDER
import { mongoDbProvider } from './mongodb.provider';

const mockCurrentUserId = '0123456789abcdef01234567';

// RESOLVERS
export const resolvers = {
  DateTime: DateTimeResolver,

  EmailAddress: EmailAddressResolver,

  UnsignedInt: UnsignedIntResolver,

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
