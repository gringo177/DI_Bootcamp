import logo from './logo.svg';
import './App.css';
import React from "react";
import { useTheme } from "./ThemeContext";
import { ThemeProvider } from "./ThemeContext";
import ThemeSwitcher from "./ThemeSwitcher";
import MyComponent from "./MyComponent"; 


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


function MyComponent() {
  const { theme } = useTheme();

  const styles = {
    backgroundColor: theme === "dark" ? "#222" : "#fff",
    color: theme === "dark" ? "#fff" : "#222",
  };

  return (
    <div style={styles}>
      <p>This component adapts to the theme!</p>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <h1>Theme Switcher Example</h1>
        <ThemeSwitcher />
        <MyComponent />
       
      </div>
    </ThemeProvider>
  );
}
export default App;


