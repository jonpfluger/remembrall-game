import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";

import { QUERY_ME } from "../utils/queries";

import ParticleHome from "../components/ParticleHome";

import image from '../img/nogood.png'


const Home = () => {

  const { loading, data } = useQuery(QUERY_ME);
  const wizard = data?.me || [];

  return (
    <main>
      <ParticleHome />
      <h3 className="text-center px-3 py-4 text-white">
        Welcome {wizard.name}
        <div className="text-center pt-3">
          <img className="container-fluid no-good"
            src={image}
          >
          </img>
        </div>
      </h3>
    </main>
  );
};

export default Home;
