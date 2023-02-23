import React from 'react';
import SpellData from "../SpellData";

const SpellList = ({wizard, usingSpell}) => {
  const accio = SpellData[0]
  const revelio = SpellData[1]

  return (
    <div className='d-flex col-9 col-sm-8 col-md-7 col-lg-6 col-xl-4 mx-auto justify-content-center'>
      {wizard.spells.map((spell) => (
        <div 
          key={spell.spellId} 
          className="px-2" 
          style={{maxHeight: 250 + 'px'}}
          onClick={() => {
            usingSpell(wizard._id, spell.name) 
          }}
        >
          {spell.name === "Revelio" 
            ? <img src={revelio.img} alt={spell.id} className="img-fluid"
            style={{maxHeight: 250 + 'px'}} /> 
            : <img src={accio.img} alt={spell.id} className="img-fluid" 
            style={{maxHeight: 250 + 'px'}}/>}
        </div>
      ))}
    </div>
  );
};

export default SpellList;
