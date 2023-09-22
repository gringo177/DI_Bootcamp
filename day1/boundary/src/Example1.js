import React, { Component } from 'react';

class Example1 extends Component {
  render() {
    const socialMedias = this.props.data.SocialMedias || [];

    return (
      <div>
        <h2>Example1 Component</h2>
        <ul>
          {socialMedias.map((media, index) => (
            <li key={index}>{media}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Example1;
