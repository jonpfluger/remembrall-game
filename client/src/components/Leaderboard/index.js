import {useMutation, useQuery} from '@apollo/client'

import { QUERY_WIZARDS } from "../../utils/queries"

const Leaderboard = () => {
    
    const {loading, data} = useQuery(QUERY_WIZARDS)
    const wizardData = data?.wizards || []
    console.log(wizardData)

    return (
        <main className="flex-row justify-center px-3 py-4 p-lg-5">
            <div className="col-12 col-lg-10">
                <div className="card" style={{ backgroundColor: "#bebebe" }}>
                    <h4
                        className="card-header  text-light p-2"
                        style={{ backgroundColor: "#0e1a40" }}
                    >
                        Leaderboard
                    </h4>
                    <div className="card-body">
                        <ol>
                            {wizardData.map(wizard => <li className="m-2 p-2" key={wizard._id}>{wizard.name} | {wizard.score} </li>).sort((a,b) => a.props.children[2]-b.props.children[2])}
                        </ol>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Leaderboard