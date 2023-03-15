
import { useQuery } from '@apollo/client'

import { QUERY_WIZARDS } from "../../utils/queries"
import "../Leaderboard/leaderboard.css"
// import ParticleHome from '../ParticleHome'

const Leaderboard = () => {
    const { data } = useQuery(QUERY_WIZARDS)
    const wizardData = data?.wizards || []
    let newWizardArray = wizardData.filter(wizard => {
      if (wizard.score !== null) {
        return wizard
      }
    })

  return (
    // <main className="flex-row justify-center px-3 py-4 p-lg-5">
    //   <ParticleHome />
      <div className="col-12 col-lg-10">
        <div
          id="customLeaderboard"
          className="card m-auto"
          style={{ backgroundColor: "#bebebe" }}
        >
          <h4
            className="card-header text-center  text-light p-2"
            style={{ backgroundColor: "#0e1a40" }}
          >
            Leaderboard
          </h4>
          <div className="card-body">
            <ol>
              {newWizardArray
                .map((wizard) => (
                  <li className="m-2 p-2" key={wizard._id}>
                    {wizard.name} | {wizard.score}{" "}
                  </li>
                ))
                .sort((a, b) => a.props.children[2] - b.props.children[2])
                .slice(0, 15)}
            </ol>
          </div>
        </div>
      </div>
    // </main>
  );
};

export default Leaderboard;
