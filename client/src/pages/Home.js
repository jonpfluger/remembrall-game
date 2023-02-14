import React from 'react';
import { useQuery } from '@apollo/client';

import WizardList from '../components/WizardList';

import { QUERY_WIZARDS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_WIZARDS);
  const wizards = data?.wizards || [];

  return (
    <main>
      <h3>Home</h3>
    </main>
  );
};

export default Home;
