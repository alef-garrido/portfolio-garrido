import React, { useEffect } from 'react';
import Aos from 'aos';
import Logo from './nav/Logo';
import NavMenu from './nav/NavMenu';
import ContactBox from './nav/ContacBox';
import NavContent from './nav/NavContent';
import 'aos/dist/aos.css';
import '../scss/nav.scss';

function Nav() {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <header id="home" className="header--container" data-aos="fade-down">
      <Logo />
      <NavContent />
      <NavMenu />
      <ContactBox />
      <div className="lines nav--border">
        <div className="border-lines nav--border-1 " />
        <div className="border-lines nav--border-2 " />
        <div className="border-lines nav--border-3 " />
      </div>
    </header>
  );
}

export default Nav;
