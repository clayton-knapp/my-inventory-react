import React from 'react';
import { Link } from 'react-router-dom';

export default function Equipment({ equipment }) {
  return (
    <Link style={{ textDecoration: 'none' }}
      to={`/detail/${equipment.id}`}
    >
      <div className='equipment'>
        <h2>{equipment.name}</h2>
        <p>Make: {equipment.make}</p>
        <p>Model: {equipment.model}</p>
        <p>Category: {equipment.category}</p>
        <p>Replacement Value: ${equipment.replacement_value}</p>
      </div>
    </Link>
  );
}
