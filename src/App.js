import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './scss/app.scss';

function App() {
  return (
    <div className="app--container">
      <Navbar />
      <Hero />
      <Profile />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
