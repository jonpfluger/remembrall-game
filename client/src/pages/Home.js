import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { Get_Wizard } from "../utils/queries";
import { useMutation } from "@apollo/client";

import CardGrid from "../components/CardGrid";

import { QUERY_ME } from "../utils/queries";

const Home = () => {
  let intervalId;
  const [seconds, setSeconds] = useState(0);
  const [isActive, setActive] = useState(false);
  const { loading, data } = useQuery(QUERY_ME);
  const wizard = data?.me || [];

  useEffect(() => {
    if (isActive) {
      intervalId = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isActive]);

  return (
    <main>
      <h3 className="text-center px-3 py-4 text-white">
        Welcome {wizard.name}
      </h3>
      <CardGrid
        isActive={isActive}
        setActive={setActive}
        intervalId={intervalId}
        seconds={seconds}
        setSeconds={setSeconds}
      />
    </main>
  );
};

export default Home;
