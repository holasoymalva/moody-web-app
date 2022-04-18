import React from 'react';
import logo from './source/heart.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App__header">
        <h1>Moody</h1>
        <img src={logo} alt="Logo" className="heart__animation" />
        <h3>How do you feel today</h3>
      </header>
    </div>
  );
}

export default App;
