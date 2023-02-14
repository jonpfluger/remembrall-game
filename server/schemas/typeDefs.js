const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Wizard {
    _id: ID
    name: String
    email: String
    password: String
    spells: [Spell]
  }

  type Spell {
    _id: ID!
    spellId: ID
    name: String
    description: String
    img: String
    cost: Int
  }

  type Auth {
    token: ID!
    wizard: Wizard
  }

  type Query {
    wizards: [Wizard]!
    wizard(wizardId: ID!): Wizard
    me: Wizard
    spells: [Spell]
    spell(name: String!): Spell
  }

  type Mutation {
    addWizard(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    addSpell(wizardId: ID!, name: String!): Wizard
    removeSpell(name: String!): Wizard
  }
`;

module.exports = typeDefs;
