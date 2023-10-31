export const schema = gql`
  type File {
    id: Int!
    name: String!
    size: String!
    type: String!
    createdAt: DateTime!
    document: Document!
    documentId: Int!
  }

  type Query {
    files: [File!]! @requireAuth
    file(id: Int!): File @requireAuth
  }

  input CreateFileInput {
    name: String!
    size: String!
    type: String!
    documentId: Int!
  }

  input UpdateFileInput {
    name: String
    size: String
    type: String
    documentId: Int
  }

  type Mutation {
    createFile(input: CreateFileInput!): File! @requireAuth
    updateFile(id: Int!, input: UpdateFileInput!): File! @requireAuth
    deleteFile(id: Int!): File! @requireAuth
  }
`
