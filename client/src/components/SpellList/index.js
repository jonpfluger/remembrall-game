import React from 'react';
import { useMutation, useQuery } from '@apollo/client';

import { ADD_SPELL, REMOVE_SPELL } from '../../utils/mutations';
import { QUERY_SINGLE_SPELL } from '../../utils/queries';

const SpellList = ({ wizard, game }) => {
  // const [removeSpell, { error }] = useMutation(REMOVE_SPELL, {
  //   update(cache, { data: { removeSpell } }) {
  //     try {
  //       cache.writeQuery({
  //         query: QUERY_ME,
  //         data: { me: removeSpell },
  //       });
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   },
  // });

  // const handleRemoveSpell = async (spell) => {
  //   try {
  //     const { data } = await removeSpell({
  //       variables: { spell },
  //     });
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  // if (!spells.length) {
  //   return <h3>No Spells Yet</h3>;
  // }

  return (
    <h3>Spell List</h3>
  );
};

export default SpellList;
