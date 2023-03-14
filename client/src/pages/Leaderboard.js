import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';

import Leaderboard from '../components/Leaderboard'
import ParticleHome from '../components/ParticleHome'

const LeaderboardPage = () => {
  const { data } = useQuery(QUERY_ME);
  const wizard = data?.me || {};
  
  return (
    <main className="flex-row justify-center px-3 py-4 p-lg-5">
      <ParticleHome />
      <div className="col-12 col-lg-10 mb-5">
        <div
          id="customLeaderboard"
          className="card m-auto"
          style={{ backgroundColor: "#bebebe" }}
        >
          <h4
            className="card-header text-center  text-light p-2"
            style={{ backgroundColor: "#0e1a40" }}
          >
            {wizard.name} Scores
          </h4>
          <div className="card-body text-center">
            <p>Last Score: {wizard.score}</p>
            <p>Best Score: {wizard.score}</p>
          </div>
        </div>
      </div>
      <Leaderboard />
    </main>
  );
};

export default LeaderboardPage;