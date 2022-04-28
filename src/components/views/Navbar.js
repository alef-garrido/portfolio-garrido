import React from 'react';
import Logo from '../Logo';
import NavMenu from '../NavMenu';
import ContactBox from '../ContacBox';
import '../../styles/nav.scss';

function Nav() {
  return (
    <header id="home" className="header">
      <Logo />
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
