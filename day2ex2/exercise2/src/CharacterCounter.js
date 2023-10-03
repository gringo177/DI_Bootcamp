
import React, { useRef } from "react";

function CharacterCounter() {
  const inputRef = useRef(null);

  const handleInputChange = () => {
    const textLength = inputRef.current.value.length;
    
  };

  return (
    <div>
      <h1>Character Counter</h1>
      <textarea
        ref={inputRef}
        onChange={handleInputChange}
        placeholder="Type something..."
      ></textarea>
      <p>Character Count: {inputRef.current.value.length}</p>
    </div>
  );
}

export default CharacterCounter;
