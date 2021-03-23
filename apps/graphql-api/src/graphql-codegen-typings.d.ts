export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** A field whose value conforms to the standard internet email address format as specified in RFC822: https://www.w3.org/Protocols/rfc822/. */
  EmailAddress: any;
  /** Integers that will have a value of 0 or more. */
  UnsignedInt: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};










export type AdditionalEntityFields = {
  path?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};




export type User = {
  __typename?: 'User';
  /** User's e-mail address. */
  email?: Maybe<Scalars['EmailAddress']>;
  /** User's first name. */
  firstName: Scalars['String'];
  /** Users that this user is followed by. */
  followers?: Maybe<Array<Maybe<User>>>;
  /** Users that this user is following. */
  following?: Maybe<Array<Maybe<User>>>;
  /** User ID. */
  id: Scalars['ID'];
  /** User's last name. */
  lastName: Scalars['String'];
  /** Posts published by user. */
  posts?: Maybe<Array<Maybe<Post>>>;
};

export type Post = {
  __typename?: 'Post';
  /** Post Author. */
  author: User;
  /** Post content. */
  content: Scalars['String'];
  /** Post ID. */
  id: Scalars['ID'];
  /** Users who like this post. */
  likedBy?: Maybe<Array<Maybe<User>>>;
  /** Post published timestamp. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** Post title. */
  title: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  /** Get post by ID. */
  post?: Maybe<Post>;
};


export type QueryPostArgs = {
  id: Scalars['ID'];
};

/** Publish post input. */
export type PublishPostInput = {
  /** Post content. */
  content: Scalars['String'];
  /** Post title. */
  title: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /**
   * Follow user.
   * Returns the updated number of followers.
   */
  followUser: Scalars['UnsignedInt'];
  /**
   * Like post.
   * Returns the updated number of likes received.
   */
  likePost: Scalars['UnsignedInt'];
  /** Publish post. */
  publishPost: Post;
  /**
   * Unfollow user.
   * Returns the updated number of followers.
   */
  unfollowUser: Scalars['UnsignedInt'];
};


export type MutationFollowUserArgs = {
  userId: Scalars['ID'];
};


export type MutationLikePostArgs = {
  postId: Scalars['ID'];
};


export type MutationPublishPostArgs = {
  input: PublishPostInput;
};


export type MutationUnfollowUserArgs = {
  userId: Scalars['ID'];
};

export type CacheControlScope =
  | 'PUBLIC'
  | 'PRIVATE';


import { ObjectID } from 'mongodb';
export type UserDbObject = {
  email?: string,
  firstName: string,
  following?: Maybe<Array<Maybe<UserDbObject['_id']>>>,
  _id: ObjectID,
  lastName: string,
};

export type PostDbObject = {
  author: UserDbObject['_id'],
  content: string,
  _id: ObjectID,
  likedBy?: Maybe<Array<Maybe<UserDbObject['_id']>>>,
  publishedAt?: Date,
  title: string,
};
