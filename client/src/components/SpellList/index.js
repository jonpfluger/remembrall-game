import React from 'react';
import { useMutation } from "@apollo/client";
import { REMOVE_SPELL } from '../../utils/mutations';
import SpellData from "../SpellData";

const SpellList = ({wizard}) => {
  const [removeSpell] = useMutation(REMOVE_SPELL);
  const accio = SpellData[0]
  const revelio = SpellData[1]

  function removingSpell(wizardId) {
    removeSpell({
      variables: {
        wizardId,
        name: revelio.name
      }
    })
  }

  return (
    wizard.spells.map((spell) => (
      <div key={spell.spellId} className="card m-auto" style={{width: 150 + "px"}} onClick={() => removingSpell(wizard._id)}>
        <img src={revelio.img} alt={revelio.id} className="m-auto mt-3" style={{height: 70 + "px", width: 70 + "px"}} />
        <div className='text-center'>
          <p className='fs-5 mb-0 fw-bold'>{spell.name}</p>
          <p className='fs-6'>{spell.description}</p>
        </div>
      </div>
    ))
  );
};

export default SpellList;
