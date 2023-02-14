import React from 'react';
import { Link } from 'react-router-dom';

const WizardList = ({ wizards, title }) => {
  if (!wizards.length) {
    return <h3>No Wizards Yet</h3>;
  }

  return (
    <h3>Wizard List</h3>
  );
};

export default WizardList;
