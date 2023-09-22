import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorBoundary from './ErrorBoundary';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import ShopScreen from './ShopScreen';
import PostList from './PostList'; 
import Example1 from './Example1';
import Example2 from './Example2';
import Example3 from './Example3';
import data from './data.json'; 

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/profile" className="nav-link">
              Profile
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/shop" className="nav-link">
              Shop
            </NavLink>
          </li>
        </ul>
        <div className="App">
      <h1>Post List</h1>
      <PostList />
    </div>
    <div className="App">
      <Example1 data={data} />
      <Example2 data={data} />
      <Example3 data={data} />
    </div>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <ErrorBoundary>
              <HomeScreen />
            </ErrorBoundary>
          }
        />
        <Route
          path="/profile"
          element={
            <ErrorBoundary>
              <ProfileScreen />
            </ErrorBoundary>
          }
        />
        <Route
          path="/shop"
          element={
            <ErrorBoundary>
              <ShopScreen />
            </ErrorBoundary>
          }
        />
      </Routes>
    </BrowserRouter>
  );
  

function App() {
  const webhookUrl = 'Your unique URL'; 

  const fetchData = async () => {
    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          key1: 'myusername',
          email: 'mymail@gmail.com',
          name: 'Isaac',
          lastname: 'Doe',
          age: 27,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Response Data:', data);
      } else {
        console.error('Failed to fetch data from the webhook.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="App">
      <h1>Post JSON Data with React</h1>
      <button onClick={fetchData}>Fetch Data</button>
    </div>
  );
}

}

export default App;
