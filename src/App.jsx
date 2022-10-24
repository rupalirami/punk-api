import React from 'react';
import './App.scss';
import Heading from './components/Heading/Heading';
import Home from './containers/Home/Home';

function App() {

  return (
    <div className="App">
        {/* <h1>Best Beer</h1> */}
        {/* <h1>Hoppy Refreshers</h1> */}
        <Heading />
        <Home className="Homepage" />
        {/* <p>©Photo by Jonas Jacobsson on Unsplash</p> */}
    </div>
  );
}

export default App;
