import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    message: '',
  };

  componentDidMount() {
    this.fetchMessage();
  }

  fetchMessage = async () => {
    try {
      const response = await fetch('/api/hello');
      if (response.ok) {
        const message = await response.text();
        this.setState({ message });
      } else {
        console.error('Failed to fetch message from the server.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  render() {
    return (
      <div className="App">
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}
class App extends Component {
  state = {
    message: '',
    inputValue: '',
  };

  

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/world', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ value: this.state.inputValue }),
      });
      if (response.ok) {
        const message = await response.text();
        this.setState({ message, inputValue: '' });
        console.log('Message from server:', message);
      } else {
        console.error('Failed to send POST request.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  render() {
    return (
      <div className="App">
        <h1>{this.state.message}</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Type something..."
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
export default App;
