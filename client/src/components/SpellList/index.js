import React from 'react';
import SpellData from "../SpellData";

const SpellList = ({wizard, usingSpell}) => {
  const accio = SpellData[0]
  const revelio = SpellData[1]

  return (
    <div className='row'>
      {wizard.spells.map((spell) => (
        <div 
          key={spell.spellId} 
          className="card m-auto" 
          style={{width: 150 + "px"}} 
          onClick={() => {
            usingSpell(wizard._id, spell.name) 
          }}
        >
          {spell.name == "Revelio" 
            ? <img src={revelio.img} alt={spell.id} className="m-auto mt-3" style={{height: 70 + "px", width: 70 + "px"}} /> 
            : <img src={accio.img} alt={spell.id} className="m-auto mt-3" style={{height: 70 + "px", width: 70 + "px"}} />}
          <div className='text-center'>
            <p className='fs-5 mb-0 fw-bold'>{spell.name}</p>
            <p className='fs-6'>{spell.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SpellList;
