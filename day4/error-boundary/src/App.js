import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    state = { loading: false };

    componentDidMount() {
        // 测试 devServer 的代理功能
        // fetch('/api/category')
        //     .then(resp => resp.json())
        //     .then(res => console.log('here here', res));
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <p>{ this.state.loading.toString() }</p>
                <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
            </div>
        );
    }
}
shouldComponentUpdate() {
    return true;
  }
  
  render() 
    return (
      <div>
        <h1>{this.state.favoriteColor}</h1>
        <button onClick={this.changeColor}>Change Color</button>
      </div>
    );


    componentDidMount() {
        setTimeout(() => {
          this.setState({ favoriteColor: 'yellow' });
        }, 1000);
      }
      
      componentDidUpdate() {
        console.log('after update');
      }
      getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('in getSnapshotBeforeUpdate');
        console.log('Previous state:', prevState.favoriteColor);
        console.log('Current state:', this.state.favoriteColor);
        return null;
      }
      class App extends React.Component {
        state = {
          favoriteColor: 'red',
          show: true
        };
      
        deleteChild = () => {
          this.setState({ show: false });
        };
      
        render() {
          return (
            <div>
              {this.state.show ? <Child /> : null}
              <button onClick={this.deleteChild}>Delete</button>
            </div>
          );
        }
      }
                  
  class Child extends React.Component {
  componentWillUnmount() {
    alert('Unmounted');
  }

  render() {
    return <h1>Hello World!</h1>;
  }
}


export default App;
