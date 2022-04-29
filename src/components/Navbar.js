import React from 'react';
import Logo from './nav/Logo';
import NavMenu from './nav/NavMenu';
import ContactBox from './nav/ContacBox';
import NavContent from './nav/NavContent';
import '../scss/nav.scss';

function Nav() {
  return (
    <header id="home" className="header--container">
      <Logo />
      <NavContent />
      <NavMenu />
      <ContactBox />
      <div className="lines nav--border">
        <div className="border-lines nav--border-1 animate__animated animate__fadeInUp" />
        <div className="border-lines nav--border-2 animate__animated animate__fadeInRight" />
        <div className="border-lines nav--border-3 animate__animated animate__fadeInLeft" />
      </div>
    </header>
  );
}

export default Nav;