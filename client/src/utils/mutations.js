import { gql } from '@apollo/client';

export const ADD_WIZARD = gql`
  mutation addWizard($name: String!, $email: String!, $password: String!) {
    addWizard(name: $name, email: $email, password: $password) {
      token
      wizard {
        _id
        name
      }
    }
  }
`;

export const ADD_SPELL = gql`
  mutation addSpell($wizardId: ID!, $spell: String!) {
    addSpell(wizardId: $wizardId, spell: $spell) {
      _id
      name
      spells
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      wizard {
        _id
        name
      }
    }
  }
`;

export const REMOVE_SPELL = gql`
  mutation removeSpell($spell: String!) {
    removeSpell(spell: $spell) {
      _id
      name
      spells
    }
  }
`;
