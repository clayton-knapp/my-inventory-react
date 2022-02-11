import React from 'react';

export default function Equipment({ equipment }) {
  return (
    <div className='equipment'>
      <h2>{equipment.name}</h2>
      <p>Make: {equipment.make}</p>
      <p>Model: {equipment.model}</p>
      <p>Category: {equipment.category}</p>
      <p>Replacement Value: ${equipment.replacement_value}</p>
    </div>
  );
}
