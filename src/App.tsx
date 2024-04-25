import React from 'react';
import './App.css';
import { Rockets } from './components/Rockets';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">

      <Header />

      <Rockets />

      <Footer />
      
    </div>
  );
}

export default App;
