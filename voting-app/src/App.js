import React, { useState } from 'react';

function App() {
  const [languages, setLanguages] = useState([
    { name: 'Php', votes: 0 },
    { name: 'Python', votes: 0 },
    { name: 'JavaScript', votes: 0 },
    { name: 'Java', votes: 0 }
  ]);

 
  const voteForLanguage = (languageIndex) => {
    const updatedLanguages = [...languages];
    updatedLanguages[languageIndex].votes += 1;
    setLanguages(updatedLanguages);
  };

  return (
    <div className="App">
      <h1>Voting App</h1>
      <ul>
        {languages.map((language, index) => (
          <li key={index}>
            <span>{language.name}: {language.votes} votes</span>
            <button onClick={() => voteForLanguage(index)}>Vote</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
