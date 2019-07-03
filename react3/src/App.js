import React from 'react';
import Nav from './components/Nav';
import './App.css';
import DisplayBox from './components/DisplayBox';

function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <DisplayBox />
      </main>
    </div>
  );
}

export default App;
