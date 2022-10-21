import React from 'react';
import './App.scss';
import Home from './containers/Home/Home';

function App() {

  return (
    <div className="App">
        <h1>Best Beer</h1>
        <Home className="Homepage" />
        <p>©Photo by Jonas Jacobsson on Unsplash</p>
    </div>
  );
}

export default App;
