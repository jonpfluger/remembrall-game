import React from "react";
import { Link } from "react-router-dom";

import Navigation from "../Navigation/Navigation";
import Auth from "../../utils/auth";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header>
      <Navigation />
    </header>
  );
};

export default Header;
