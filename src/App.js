import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Profile from './components/Profile';
import './scss/app.scss';

function App() {
  return (
    <div className="app--container">
      <Navbar />
      <Hero />
      <Profile />
    </div>
  );
}

export default App;
