import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";

import ParticleHome from "../components/ParticleHome";
import HomePage from "../components/HomePage";


const Home = () => {
  const { loading, data } = useQuery(QUERY_ME);
  const wizard = data?.me || [];

  return (
    <main>
      <ParticleHome />
      <h3 className="text-center px-3 py-4 text-white">
        Welcome {wizard.name}
      </h3>
      <h2 className="container-smoke">
        <p className="smoke-animation">I solemnly swear that I am up to no good</p>
      </h2>
      <HomePage />
    </main>
  );
};

export default Home;
