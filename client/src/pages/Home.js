import React from "react";
import { useQuery } from "@apollo/client";
import { Get_Wizard } from "../utils/queries";
import { useMutation } from "@apollo/client";

import CardGrid from "../components/CardGrid";

import { QUERY_WIZARDS } from "../utils/queries";

const Home = () => {
  const { loading, data } = useQuery(QUERY_WIZARDS);
  const wizards = data?.wizards || [];

  //set up for querying name

  // const wizardName = useMutation(Get_Wizard, {
  //   refetchQueries: [{ query: Get_Wizard }, "Get_Wizard"],
  // });

  return (
    <main>
      <h3 className="text-center px-3 py-4 text-white">
        Welcome Back (Wizard Name Here){" "}
      </h3>
      <CardGrid />
    </main>
  );
};

export default Home;
