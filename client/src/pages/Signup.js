import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_WIZARD } from '../utils/mutations';

import Auth from '../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    password: '',
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
    <main>
      <h3>Signup</h3>
    </main>
  );
};

export default Signup;
