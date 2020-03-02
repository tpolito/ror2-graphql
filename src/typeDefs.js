const { gql } = require('apollo-server-express');

typeDefs = gql`
  type Query {
    hello: String!
    items: [Item!]!
    item(code_name: String!): Item!
    tier(tier: String!): [Item!]!
  }

  type Item {
    id: ID!
    index: Int!
    real_name: String!
    code_name: String!
    tier: String!
    tags: String!
    description: String!
    image_url: String!
  }
`;

module.exports = typeDefs;
