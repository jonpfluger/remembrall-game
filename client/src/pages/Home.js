import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";

import ParticleHome from "../components/ParticleHome";
import HomePage from "../components/HomePage";

const Home = () => {
  const { data } = useQuery(QUERY_ME);
  const wizard = data?.me || [];

  return (
    <main>
      <ParticleHome />
      <h3 className="text-center px-3 py-4 text-white" id="wizard-name">
        Welcome {wizard.name}
        <div className="text-center pt-3">
          <h5 style={{ color: "#CAAC3D" }}>
            I solemnly swear that I am up to no good...
          </h5>
        </div>
      </h3>
      <HomePage />
    </main>
  );
};

export default Home;
