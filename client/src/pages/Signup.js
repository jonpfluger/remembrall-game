import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useMutation } from "@apollo/client";
import { ADD_WIZARD } from "../utils/mutations";
import ParticleHome from "../components/ParticleHome";

import Auth from "../utils/auth";

const Signup = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [addWizard, { error, data }] = useMutation(ADD_WIZARD);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addWizard({
        variables: { ...formState },
      });

      Auth.login(data.addWizard.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className="flex-row justify-center px-3 py-4 p-lg-5">
      <ParticleHome />
      <div className="col-12 col-lg-10">
        <div className="card" style={{ backgroundColor: "#bebebe" }}>
          <h4
            className="card-header text-light p-2"
            style={{ backgroundColor: "#0e1a40" }}
          >
            Sign Up
          </h4>
          <div className="card-body">
            {data ? (
              <p>
                Success! You may now head{" "}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <input
                  className="form-input"
                  placeholder="Your username"
                  name="name"
                  type="text"
                  value={formState.name}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <button
                  className="btn btn-block btn-info"
                  style={{ cursor: "pointer", backgroundColor: "#946b2d" }}
                  type="submit"
                >
                  Submit
                </button>
              </form>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
