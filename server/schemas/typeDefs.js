const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Wizard {
    _id: ID
    name: String
    email: String
    password: String
  }

  type Auth {
    token: ID!
    wizard: Wizard
  }

  type Query {
    wizards: [Wizard]!
    wizard(wizardId: ID!): Wizard
    me: Wizard
  }

  type Mutation {
    addWizard(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    addSpell(wizardId: ID!, spell: String!): Wizard
    removeWizard: Wizard
    removeSkill(spell: String!): Wizard
  }
`;

module.exports = typeDefs;
