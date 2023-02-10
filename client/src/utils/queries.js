import { gql } from '@apollo/client';

export const QUERY_WIZARDS = gql`
  query allWizards {
    wizards {
      _id
      name
      spells
    }
  }
`;

export const QUERY_SINGLE_WIZARD = gql`
  query singleWizard($wizardId: ID!) {
    wizard(wizardId: $wizardId) {
      _id
      name
      spells
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      name
      spells
    }
  }
`;
