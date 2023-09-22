import React, { Component } from 'react';

class Example3 extends Component {
  render() {
    const experiences = this.props.data.Experiences || [];

    return (
      <div>
        <h2>Example3 Component</h2>
        <ul>
          {experiences.map((experience, index) => (
            <li key={experience.id}>
              <div>
                <strong>Company:</strong> {experience.company}
              </div>
              <div>
                <strong>Position:</strong> {experience.position}
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Example3;
