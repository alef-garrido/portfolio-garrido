import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './scss/app.scss';

function App() {
  return (
    <div className="app--container">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
