import React from "react";

import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import SpellList from "../components/SpellList";
import SpellForm from "../components/SpellForm";

import { QUERY_ME } from "../utils/queries";

import Auth from "../utils/auth";

const Wizard = () => {
  const { wizardId } = useParams();

  // If there is no `wizardId` in the URL as a parameter, execute the `QUERY_ME` query instead for the logged in user's information
  const { loading, data } = useQuery(QUERY_ME);
  
  // Check if data is returning from the `QUERY_ME` query, then the `QUERY_SINGLE_WIZARD` query
  const wizard = data?.me || data?.wizard || {};
   
  // Use React Router's `<Redirect />` component to redirect to personal wizard page if username is yours
  if (Auth.loggedIn() && Auth.getWizard().data._id === wizardId) {
    return <Navigate to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!wizard?.name) {
    return (
      <h4 className="text-white text-center">
        You need to be logged in to see your wizard page. Use the navigation
        links above to sign up or log in!
      </h4>
    );
  }

  return (
    <main>
      <h3>Wizard</h3>
    </main>
  );
};

export default Wizard;
