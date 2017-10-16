export default `

type Suggestion {
  id: Int!
  text: String!
  creator: Int!
  creatorUsername: String
}

type Board {
  id: Int!
  name: String!
  suggestions: [Suggestion!]!
  owner: Int!
}

type User {
  id: Int!
  username: String!
  createdAt: String!
  updatedAt: String!
  boards: [Board!]!
  suggestions: [Suggestion!]!
  email: String
}

  type Query {
    allUsers: [User!]
    getUser(username: String!): User
    userBoards(owner: String!): [Board!]!
    userSuggestions(creatorId: String!): [Suggestion!]!
  }

  type Mutation {
    updateUser(username: String!, newUsername: String!): [Int!]!
    deleteUser(username: String!): Int!
    createBoard(owner: Int!, name: String): Board!
    createSuggestion(creatorId: Int!, text: String, boardId: Int!): Suggestion!
    register(username: String!, email: String!, password: String!): User
    login(email: String!, password: String!): String!
  }
`;
/* in the login mutaton the string we return is the JWT */
