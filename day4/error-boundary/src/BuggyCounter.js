import React, { Component } from 'react';

class BuggyCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  handleClick = () => {
    if (this.state.counter === 5) {
      throw new Error('I crashed!');
    }
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <div>
        <h2 onClick={this.handleClick}>Counter: {this.state.counter}</h2>
      </div>
    );
  }
}

export default BuggyCounter;
