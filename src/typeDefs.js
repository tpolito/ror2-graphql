const { gql } = require('apollo-server-express');

typeDefs = gql`
  type Query {
    hello: String!
    items: [Item!]!
    item(code_name: String!): Item!
  }

  type Item {
    id: ID!
    real_name: String!
    code_name: String!
    tier: String!
    tags: String!
  }
`;

module.exports = typeDefs;

// cats: [Cat!]!

//  type Cat {
//     # id is a special apollo type
//     id: ID!
//     name: String!
//   }

//   type Mutation {
//     createCat(name: String!): Cat!
//   }
