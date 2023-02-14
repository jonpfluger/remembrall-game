import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";

function Navigation() {
  return (
    <nav
      className="navbar navbar-dark navbar-expand-lg"
      style={{ backgroundColor: "#0e1a40" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <image
            src={logo}
            alt="Logo"
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          />
        </a>

        <button
          className="navbar-toggler text-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse text-white"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav text-white">
            <Link className="nav-link active text-white" to="/">
              Home
            </Link>
            <Link className="nav-link text-white" to="/login">
              Login
            </Link>
            <Link className="nav-link text-white" to="/signup">
              Signup
            </Link>
            <Link className="nav-link text-white" to="/wizards/:id">
              Wizards
            </Link>
            <Link className="nav-link text-white" to="/leaderboard">
              Leaderboard
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
