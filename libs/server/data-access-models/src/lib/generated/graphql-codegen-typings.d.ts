import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from 'graphql';
export type Maybe<T> = T extends PromiseLike<infer U>
  ? Promise<U | null>
  : T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = {
  [X in Exclude<keyof T, K>]?: T[X];
} &
  { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  EmailAddress: any;
  UnsignedInt: any;
};

export interface Mutation {
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
}

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

export interface Post {
  __typename?: 'Post';
  /** TESTING. */
  domagoj?: Maybe<Scalars['String']>;
  /** Post ID. */
  id: Scalars['ID'];
  /** Post title. */
  title: Scalars['String'];
  /** Post content. */
  content: Scalars['String'];
  /** Post Author. */
  author: User;
  /** Post published timestamp. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** Users who like this post. */
  likedBy?: Maybe<Array<Maybe<User>>>;
}

/** Publish post input. */
export interface PublishPostInput {
  /** Post title. */
  title: Scalars['String'];
  /** Post content. */
  content: Scalars['String'];
}

export interface Query {
  __typename?: 'Query';
  /** Get post by ID. */
  post?: Maybe<Post>;
  /** Get user by ID. */
  user?: Maybe<User>;
}

export type QueryPostArgs = {
  id: Scalars['ID'];
};

export type QueryUserArgs = {
  id: Scalars['ID'];
};

export interface User {
  __typename?: 'User';
  /** User ID. */
  id: Scalars['ID'];
  /** User's first name. */
  firstName: Scalars['String'];
  /** User's last name. */
  lastName: Scalars['String'];
  /** User's e-mail address. */
  email?: Maybe<Scalars['EmailAddress']>;
  /** Posts published by user. */
  posts?: Maybe<Array<Maybe<Post>>>;
  /** Users that this user is following. */
  following?: Maybe<Array<Maybe<User>>>;
  /** Users that this user is followed by. */
  followers?: Maybe<Array<Maybe<User>>>;
}

export interface AdditionalEntityFields {
  path?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
}

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> =
  | LegacyStitchingResolver<TResult, TParent, TContext, TArgs>
  | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  DateTime: ResolverTypeWrapper<Partial<Scalars['DateTime']>>;
  EmailAddress: ResolverTypeWrapper<Partial<Scalars['EmailAddress']>>;
  Mutation: ResolverTypeWrapper<{}>;
  ID: ResolverTypeWrapper<Partial<Scalars['ID']>>;
  Post: ResolverTypeWrapper<Partial<Post>>;
  String: ResolverTypeWrapper<Partial<Scalars['String']>>;
  PublishPostInput: ResolverTypeWrapper<Partial<PublishPostInput>>;
  Query: ResolverTypeWrapper<{}>;
  UnsignedInt: ResolverTypeWrapper<Partial<Scalars['UnsignedInt']>>;
  User: ResolverTypeWrapper<Partial<User>>;
  AdditionalEntityFields: ResolverTypeWrapper<Partial<AdditionalEntityFields>>;
  Boolean: ResolverTypeWrapper<Partial<Scalars['Boolean']>>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  DateTime: Partial<Scalars['DateTime']>;
  EmailAddress: Partial<Scalars['EmailAddress']>;
  Mutation: {};
  ID: Partial<Scalars['ID']>;
  Post: Partial<Post>;
  String: Partial<Scalars['String']>;
  PublishPostInput: Partial<PublishPostInput>;
  Query: {};
  UnsignedInt: Partial<Scalars['UnsignedInt']>;
  User: Partial<User>;
  AdditionalEntityFields: Partial<AdditionalEntityFields>;
  Boolean: Partial<Scalars['Boolean']>;
}>;

export type UnionDirectiveArgs = {
  discriminatorField?: Maybe<Scalars['String']>;
  additionalFields?: Maybe<Array<Maybe<AdditionalEntityFields>>>;
};

export type UnionDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = UnionDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AbstractEntityDirectiveArgs = {
  discriminatorField: Scalars['String'];
  additionalFields?: Maybe<Array<Maybe<AdditionalEntityFields>>>;
};

export type AbstractEntityDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = AbstractEntityDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type EntityDirectiveArgs = {
  embedded?: Maybe<Scalars['Boolean']>;
  additionalFields?: Maybe<Array<Maybe<AdditionalEntityFields>>>;
};

export type EntityDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = EntityDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type ColumnDirectiveArgs = { overrideType?: Maybe<Scalars['String']> };

export type ColumnDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = ColumnDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type IdDirectiveArgs = {};

export type IdDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = IdDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type LinkDirectiveArgs = { overrideType?: Maybe<Scalars['String']> };

export type LinkDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = LinkDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type EmbeddedDirectiveArgs = {};

export type EmbeddedDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = EmbeddedDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type MapDirectiveArgs = { path: Scalars['String'] };

export type MapDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = MapDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export interface DateTimeScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export interface EmailAddressScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['EmailAddress'], any> {
  name: 'EmailAddress';
}

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']
> = ResolversObject<{
  followUser?: Resolver<
    ResolversTypes['UnsignedInt'],
    ParentType,
    ContextType,
    RequireFields<MutationFollowUserArgs, 'userId'>
  >;
  likePost?: Resolver<
    ResolversTypes['UnsignedInt'],
    ParentType,
    ContextType,
    RequireFields<MutationLikePostArgs, 'postId'>
  >;
  publishPost?: Resolver<
    ResolversTypes['Post'],
    ParentType,
    ContextType,
    RequireFields<MutationPublishPostArgs, 'input'>
  >;
  unfollowUser?: Resolver<
    ResolversTypes['UnsignedInt'],
    ParentType,
    ContextType,
    RequireFields<MutationUnfollowUserArgs, 'userId'>
  >;
}>;

export type PostResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Post'] = ResolversParentTypes['Post']
> = ResolversObject<{
  domagoj?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  author?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  publishedAt?: Resolver<
    Maybe<ResolversTypes['DateTime']>,
    ParentType,
    ContextType
  >;
  likedBy?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['User']>>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = ResolversObject<{
  post?: Resolver<
    Maybe<ResolversTypes['Post']>,
    ParentType,
    ContextType,
    RequireFields<QueryPostArgs, 'id'>
  >;
  user?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<QueryUserArgs, 'id'>
  >;
}>;

export interface UnsignedIntScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['UnsignedInt'], any> {
  name: 'UnsignedInt';
}

export type UserResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<
    Maybe<ResolversTypes['EmailAddress']>,
    ParentType,
    ContextType
  >;
  posts?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Post']>>>,
    ParentType,
    ContextType
  >;
  following?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['User']>>>,
    ParentType,
    ContextType
  >;
  followers?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['User']>>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  DateTime?: GraphQLScalarType;
  EmailAddress?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Post?: PostResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  UnsignedInt?: GraphQLScalarType;
  User?: UserResolvers<ContextType>;
}>;

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
export type DirectiveResolvers<ContextType = any> = ResolversObject<{
  union?: UnionDirectiveResolver<any, any, ContextType>;
  abstractEntity?: AbstractEntityDirectiveResolver<any, any, ContextType>;
  entity?: EntityDirectiveResolver<any, any, ContextType>;
  column?: ColumnDirectiveResolver<any, any, ContextType>;
  id?: IdDirectiveResolver<any, any, ContextType>;
  link?: LinkDirectiveResolver<any, any, ContextType>;
  embedded?: EmbeddedDirectiveResolver<any, any, ContextType>;
  map?: MapDirectiveResolver<any, any, ContextType>;
}>;

/**
 * @deprecated
 * Use "DirectiveResolvers" root object instead. If you wish to get "IDirectiveResolvers", add "typesPrefix: I" to your config.
 */
export type IDirectiveResolvers<
  ContextType = any
> = DirectiveResolvers<ContextType>;
import { ObjectID } from 'mongodb';
export type PostDbObject = {
  _id: ObjectID;
  title: string;
  content: string;
  author: UserDbObject['_id'];
  publishedAt?: Date;
  likedBy?: Maybe<Array<Maybe<UserDbObject['_id']>>>;
};

export type UserDbObject = {
  _id: ObjectID;
  firstName: string;
  lastName: string;
  email?: string;
  following?: Maybe<Array<Maybe<UserDbObject['_id']>>>;
};
