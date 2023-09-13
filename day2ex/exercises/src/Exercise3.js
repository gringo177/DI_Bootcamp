import React from 'react';

class Exercise extends React.Component {
  render() {
    return (
      <div>
        <h1 style={{ color: 'red', backgroundColor: 'lightblue' }}>Hello, React!</h1>
        <p>This is a paragraph.</p>
        <a href="#">This is a link</a>
        <form>
          <input type="text" placeholder="Enter text" />
          <button>Submit</button>
        </form>
        <img src="your-image-source-url" alt="Image Alt Text" />
        <ul>
          <li>List item 1</li>
          <li>List item 2</li>
          <li>List item 3</li>
        </ul>
      </div>
    );
  }
}

export default Exercise;
