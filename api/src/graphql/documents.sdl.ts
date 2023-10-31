export const schema = gql`
  type Document {
    id: Int!
    title: String!
    size: String!
    type: String!
    createdAt: DateTime!
    files: [File]!
  }

  type Query {
    documents: [Document!]! @requireAuth
    document(id: Int!): Document @requireAuth
  }

  input CreateDocumentInput {
    title: String!
    size: String!
    type: String!
  }

  input UpdateDocumentInput {
    title: String
    size: String
    type: String
  }

  type Mutation {
    createDocument(input: CreateDocumentInput!): Document! @requireAuth
    updateDocument(id: Int!, input: UpdateDocumentInput!): Document!
      @requireAuth
    deleteDocument(id: Int!): Document! @requireAuth
  }
`
