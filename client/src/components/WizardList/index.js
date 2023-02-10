import React from 'react';
import { Link } from 'react-router-dom';

const WizardList = ({ wizards, title }) => {
  if (!wizards.length) {
    return <h3>No Wizards Yet</h3>;
  }

  return (
    <div>
      <h3 className="text-primary">{title}</h3>
      <div className="flex-row justify-space-between my-4">
        {wizards &&
          wizards.map((wizard) => (
            <div key={wizard._id} className="col-12 col-xl-6">
              <div className="card mb-3">
                <h4 className="card-header bg-dark text-light p-2 m-0">
                  {wizard.name} <br />
                  <span className="text-white" style={{ fontSize: '1rem' }}>
                    currently has {wizard.spells ? wizard.spells.length : 0}{' '}
                    endorsed spell
                    {wizard.spells && wizard.spells.length === 1 ? '' : 's'}
                  </span>
                </h4>

                <Link
                  className="btn btn-block btn-squared btn-light text-dark"
                  to={`/wizards/${wizard._id}`}
                >
                  View and endorse their spells.
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default WizardList;
