import React, { Component } from 'react';

class Example2 extends Component {
  render() {
    const skills = this.props.data.Skills || {};

    return (
      <div>
        <h2>Example2 Component</h2>
        <ul>
          {Object.keys(skills).map((category, index) => (
            <li key={index}>
              <strong>{category}:</strong>
              <ul>
                {skills[category].map((skill, subIndex) => (
                  <li key={subIndex}>{skill}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Example2;
