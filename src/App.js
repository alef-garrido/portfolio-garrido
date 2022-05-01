import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Tags from './components/projects/Tags';
import './scss/app.scss';

function App() {
  return (
    <div className="app--container">
      <Navbar />
      <Hero />
      <Profile />
      <Projects />
      <Tags />
    </div>
  );
}

export default App;
