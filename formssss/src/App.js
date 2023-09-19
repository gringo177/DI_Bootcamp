import React, { Component } from 'react';
import './App.css';
import FormComponent from './FormComponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      age: '',
      gender: 'male',
      destination: 'Japan',
    };
  }

  handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    this.setState((prevState) => ({
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  render() {
    return (
      <div className="App">
        <FormComponent data={this.state} handleChange={this.handleChange} />
      </div>
    );
  }
}


import './App.css';

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

export default App;
