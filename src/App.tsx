import React from 'react';
import './App.css';
import { Rockets } from './components/Rockets';
import { Header } from './components/Header';

function App() {
  return (
    <div className="App">

      <Header />

      <Rockets />
      
    </div>
  );
}

export default App;
