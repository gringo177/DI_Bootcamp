import React, { Component } from 'react';

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [], 
    };
  }

  componentDidMount() {
    
    fetch('/path-to-your-json-file/posts.json') 
      .then((response) => response.json())
      .then((data) => this.setState({ posts: data }))
      .catch((error) => console.error('Error fetching data:', error));
  }

  render() {
    return (
      <div>
        {this.state.posts.map((post) => (
          <div key={post.id} className="post">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default PostList;
