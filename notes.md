##setting up fields and queries in the db: 
- set up database links within the models directory
- create types in gql schema
- create resolvers


These mutatons/queries work on the CRUD actions created by the end of the frist tutorial.
mutation {
  deleteUser(username: "Sally")
}

mutation {
  createUser(username: "Sean") {
    id
    username
    createdAt
  }
}
mutation {
  updateUser(username: "Sean", newUsername: "Shaun")
}

{
	getUser(username: "Jimbob") {
    username
    createdAt
    updatedAt
  }
}

{
  allUsers {
    username
  }
}
