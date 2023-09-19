import React from 'react';

function Card({ superhero, handleClick }) {
  return (
    <div className="card" onClick={() => handleClick(superhero.id)}>
      <img src={superhero.image} alt={superhero.name} />
    </div>
  );
}

export default Card;
