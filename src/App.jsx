import React from 'react';
import './App.scss';
import Heading from './components/Heading/Heading';
import Home from './containers/Home/Home';

function App() {

  return (
    <div className="App">
        <Heading />
        <Home className="Homepage" />
    </div>
  );
}

export default App;
