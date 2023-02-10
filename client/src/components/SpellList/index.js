import React from 'react';
import { useMutation } from '@apollo/client';

import { REMOVE_SPELL } from '../../utils/mutations';
import { QUERY_ME } from '../../utils/queries';

const SpellList = ({ spells, isLoggedInUser = false }) => {
  const [removeSpell, { error }] = useMutation(REMOVE_SPELL, {
    update(cache, { data: { removeSpell } }) {
      try {
        cache.writeQuery({
          query: QUERY_ME,
          data: { me: removeSpell },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const handleRemoveSpell = async (spell) => {
    try {
      const { data } = await removeSpell({
        variables: { spell },
      });
    } catch (err) {
      console.error(err);
    }
  };

  if (!spells.length) {
    return <h3>No Spells Yet</h3>;
  }

  return (
    <div>
      <div className="flex-row justify-space-between my-4">
        {spells &&
          spells.map((spell) => (
            <div key={spell} className="col-12 col-xl-6">
              <div className="card mb-3">
                <h4 className="card-header bg-dark text-light p-2 m-0 display-flex align-center">
                  <span>{spell}</span>
                  {isLoggedInUser && (
                    <button
                      className="btn btn-sm btn-danger ml-auto"
                      onClick={() => handleRemoveSpell(spell)}
                    >
                      X
                    </button>
                  )}
                </h4>
              </div>
            </div>
          ))}
      </div>
      {error && (
        <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
      )}
    </div>
  );
};

export default SpellList;
