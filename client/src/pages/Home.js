import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";

import ParticleHome from "../components/ParticleHome";
<<<<<<< HEAD
import HomePage from "../components/HomePage";
=======

import image from '../img/nogood.png'
>>>>>>> 6288695e4e99fc7ca70b2743c1f7881a8c39415f


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
<<<<<<< HEAD
      <h2 className="container-smoke">
        <p className="smoke-animation">I solemnly swear that I am up to no good</p>
      </h2>
      <HomePage />
=======
>>>>>>> 6288695e4e99fc7ca70b2743c1f7881a8c39415f
    </main>
  );
};

export default Home;
