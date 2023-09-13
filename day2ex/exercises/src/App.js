import React from 'react';
import './App.css'; 
import UserFavoriteAnimals from './UserFavoriteAnimals'; 
import Exercise from './Exercise3'; // Import the Exercise component
import './Exercise.css'; // Import the CSS file
const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals: ['Horse', 'Turtle', 'Elephant', 'Monkey'],
};

function App() {
  return (
    <div className="App">
      <h3>{user.firstName}</h3>
      <h3>{user.lastName}</h3>
      <UserFavoriteAnimals favAnimals={user.favAnimals} /> {/* Pass favAnimals as a prop */}
    </div>
  );
}

const style_header = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial"
};

function App() {

  const helloWorldMessage = <p>Hello World!</p>;


  const myelement = <h1>I Love JSX!</h1>;

  const sum = 5 + 5;

  
  const jsxSentence = (
    <p>
      React is {sum} times better with JSX.
    </p>
  );

  return (
    <div>
      {helloWorldMessage}
      {myelement}
      {jsxSentence}
    </div>
  );
}

export default App;
