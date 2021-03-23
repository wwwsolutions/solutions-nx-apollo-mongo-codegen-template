import { gql } from 'apollo-server';

export default gql`
  type User {
    """
    User ID.
    """
    id: ID!

    """
    User's first name.
    """
    firstName: String!

    """
    User's last name.
    """
    lastName: String!

    # User's e-mail address.
    # email: TODO: Define type.

    """
    Posts published by user.
    """
    posts: [Post]

    """
    Users that this user is following.
    """
    following: [User]

    """
    Users that this user is followed by.
    """
    followers: [User]
  }

  type Post {
    """
    Post ID.
    """
    id: ID!

    """
    Post title.
    """
    title: String!

    """
    Post content.
    """
    content: String!

    """
    Post Author.
    """
    author: User!

    # Post published timestamp.
    # publishedAt: TODO: Define type.

    """
    Users who like this post.
    """
    likedBy: [User]
  }

  type Query {
    """
    Test Message.
    """
    testMessage: String!

    """
    Get post by ID.
    """
    post(id: ID!): Post
  }

  """
  Publish post input.
  """
  input PublishPostInput {
    """
    Post title.
    """
    title: String!

    """
    Post content.
    """
    content: String!
  }

  type Mutation {
    """
    Publish post.
    """
    publishPost(input: PublishPostInput!): Post!

    """
    Follow user.
    Returns the updated number of followers.
    """
    followUser(
      """
      User's ID to follow.
      """
      userId: ID!
    ): Int!

    """
    Unfollow user.
    Returns the updated number of followers.
    """
    unfollowUser(
      """
      User's ID to unfollow.
      """
      userId: ID!
    ): Int!

    """
    Like post.
    Returns the updated number of likes received.
    """
    likePost(
      """
      Post's ID to like.
      """
      postId: ID!
    ): Int!
  }
`;
