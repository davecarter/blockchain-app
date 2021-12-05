export const schema = gql`
  type Message {
    id: Int!
    hash: String!
    title: String!
    body: String!
    createdAt: DateTime!
  }

  type Query {
    messages: [Message!]! @requireAuth
    message(id: Int!): Message @requireAuth
  }

  input CreateMessageInput {
    hash: String!
    title: String!
    body: String!
  }

  input UpdateMessageInput {
    hash: String
    title: String
    body: String
  }

  type Mutation {
    createMessage(input: CreateMessageInput!): Message! @requireAuth
    updateMessage(id: Int!, input: UpdateMessageInput!): Message! @requireAuth
    deleteMessage(id: Int!): Message! @requireAuth
  }
`
