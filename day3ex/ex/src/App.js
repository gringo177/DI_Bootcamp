import React from 'react';
import Car from './Components/Car';
import Phone from './Phone';
import EventsExercise from './EventsExercise'
import Color from './Color';




const carinfo = { name: "Ford", model: "Mustang" };
function App() {
  return (
    <div className="App">
      <Car />
    </div>
  );
}

export default App;
