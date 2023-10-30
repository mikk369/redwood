export const schema = gql`
  type Post {
    id: Int!
    title: String!
    size: String!
    type: String!
    createdAt: DateTime!
  }

  type Query {
    posts: [Post!]! @requireAuth
    post(id: Int!): Post @requireAuth
  }

  input CreatePostInput {
    title: String!
    size: String!
    type: String!
  }

  input UpdatePostInput {
    title: String
    size: String
    type: String
  }

  type Mutation {
    createPost(input: CreatePostInput!): Post! @requireAuth
    updatePost(id: Int!, input: UpdatePostInput!): Post! @requireAuth
    deletePost(id: Int!): Post! @requireAuth
  }
`
