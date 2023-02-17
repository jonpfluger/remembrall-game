import React from "react";
import { useQuery } from "@apollo/client";
import { Get_Wizard } from "../utils/queries";
import { useMutation } from "@apollo/client";

import CardGrid from "../components/CardGrid";

import { QUERY_ME } from "../utils/queries";

const Home = () => {
  const { loading, data } = useQuery(QUERY_ME);
  const wizard = data?.me || [];

  return (
    <main>
      <h3 className="text-center px-3 py-4 text-white">
        Welcome {wizard.name}
      </h3>
      <CardGrid />
    </main>
  );
};

export default Home;
