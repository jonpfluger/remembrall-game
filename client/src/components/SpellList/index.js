import React from 'react';
import SpellData from "../SpellData";

const SpellList = () => {
  const accio = SpellData[0]
  const revelio = SpellData[1]

  return (
    <div className="card m-auto" style={{width: 150 + "px"}} onClick={() => console.log("click")}>
      <img src={revelio.img} alt={revelio.id} className="m-auto mt-3" style={{height: 70 + "px", width: 70 + "px"}} />
      <div className='text-center'>
        <p className='fs-5 mb-0 fw-bold'>{revelio.name}</p>
        <p className='fs-6'>{revelio.description}</p>
      </div>
    </div>
  );
};

export default SpellList;
