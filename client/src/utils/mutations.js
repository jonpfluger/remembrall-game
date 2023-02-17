import { gql } from '@apollo/client';

export const ADD_WIZARD = gql`
  mutation ADD_WIZARD($name: String!, $email: String!, $password: String!) {
    addWizard(name: $name, email: $email, password: $password) {
      token
      wizard {
        _id
        name
        email
      }
    }
  }
`;

export const ADD_SPELL = gql`
  mutation ADD_SPELL($wizardId: ID!, $name: String!) {
    addSpell(wizardId: $wizardId, name: $name) {
      _id
      name
      email
      password
      spells {
        _id
        spellId
        name
        description
        cost
        quantity
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation LOGIN($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      wizard {
        _id
        name
        email
      }
    }
  }
`;

export const REMOVE_SPELL = gql`
  mutation REMOVE_SPELL($wizardId: ID!, $name: String!) {
    removeSpell(wizardId: $wizardId, name: $name) {
      _id
      name
      email
      spells {
        _id
        spellId
        name
        description
        cost
      }
    }
  }
`;

export const UPDATE_SCORE = gql`
  mutation UPDATE_SCORE($score: Int, $wizardId: ID!) {
    updateScore(score: $score, wizardId: $wizardId) {
      _id
      name
      score
    }
  }
`;
