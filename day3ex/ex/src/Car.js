import React from 'react';
import React, { useState } from 'react';
import Garage from "./Garage";

function Car() {
  const [color, setColor] = useState("red");
  const carInfo = { name: "Ford", model: "Mustang" };

  return (
    <div>
      <h1>This car is {color} {carInfo.model}</h1>
      <Garage size="small" />
    </div>
  );
}

export default Car;
