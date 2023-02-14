import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_SPELL } from '../../utils/mutations';

import Auth from '../../utils/auth';

const SpellForm = ({ wizardId }) => {
  const [spell, setSpell] = useState('');

  const [addSpell, { error }] = useMutation(ADD_SPELL);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = await addSpell({
        variables: { wizardId, spell },
      });

      setSpell('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <h3>Spell Form</h3>
  );
};

export default SpellForm;
