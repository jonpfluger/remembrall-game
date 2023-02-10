import React from 'react';
import { useQuery } from '@apollo/client';

import WizardList from '../components/WizardList';

import { QUERY_WIZARDS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_WIZARDS);
  const wizards = data?.wizards || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 my-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <WizardList
              wizards={wizards}
              title="Here's the current roster of friends..."
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
