import React, { useState, useEffect } from 'react';
import Card from './Card';
import './Game.css';

function Game() {
  const [superheroes, setSuperheroes] = useState([]); // Replace with your superhero data
  const [score, setScore] = useState(0);
  const [topScore, setTopScore] = useState(0);
  const [clickedSuperheroes, setClickedSuperheroes] = useState([]);

  // Shuffle the superheroes array
  const shuffleSuperheroes = () => {
    // Implement a shuffling algorithm (e.g., Fisher-Yates)
    const shuffled = [...superheroes];
    // Shuffle code goes here
    setSuperheroes(shuffled);
  };

  // Handle a superhero card click
  const handleCardClick = (id) => {
    if (clickedSuperheroes.includes(id)) {
      // Game over, reset score and clickedSuperheroes
      setScore(0);
      setClickedSuperheroes([]);
    } else {
      // Increase score and update clickedSuperheroes
      setScore(score + 1);
      setClickedSuperheroes([...clickedSuperheroes, id]);
    }

    shuffleSuperheroes();
  };

  useEffect(() => {
    shuffleSuperheroes();
  }, []);

  return (
    <div className="game">
      <h1>Superheroes Memory Game</h1>
      <div className="score">
        <p>Score: {score}</p>
        <p>Top Score: {topScore}</p>
      </div>
      <div className="cards">
        {superheroes.map((superhero) => (
          <Card
            key={superhero.id}
            superhero={superhero}
            handleClick={handleCardClick}
          />
        ))}
      </div>
    </div>
  );
}

export default Game;
