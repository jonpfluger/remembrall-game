import { gql } from '@apollo/client';

export const QUERY_WIZARDS = gql`
  query ALL_WIZARDS {
    wizards {
      _id
      name
      email
      password
      spells {
        _id
        spellId
        name
        description
        img
        cost
      }
    }
  }
`;

export const QUERY_SINGLE_WIZARD = gql`
  query WIZARD($wizardId: ID!) {
    wizard(wizardId: $wizardId) {
      _id
      name
      email
      password
      spells {
        spellId
        name
        description
        cost
      }
    }
  }
`;

export const QUERY_ME = gql`
  query ME {
    me {
      _id
      name
      email
      password
    }
  }
`;

export const QUERY_SPELLS = gql`
  query ALL_SPELLS {
    spells {
      _id
      spellId
      name
      description
      cost
    }
  }
`

export const QUERY_SINGLE_SPELL = gql`
  query SPELL($name: String!) {
    spell(name: $name) {
      _id
      spellId
      name
      description
      cost
    }
  }
`
