import React from 'react';
import logo from '../../assets/logo.svg';
import '../../styles/nav.css';

function Nav() {
  return (
    <header id="home" className="header">
      <div className="header container-absolute">
        <nav className="pageNav">
          <div className="nav--content">
            <div className="logo--container">
              <img src={logo} alt="site logo" />
            </div>
            <div className="navMenu--container animate__animated animate__fadeIn">
              <ul>
                <li className="nav--link deco-current"><a href="#home">Home</a></li>
                <li className="nav--link"><a href="#about">About Me</a></li>
                <li className="nav--link last"><a href="#projects">Projects</a></li>
              </ul>

            </div>
            <div className="contact--container animate__animated animate__fadeIn">
              <a href="#footer" className="bttn-nav nav--link">RRSS</a>
              <button type="button" className="chatBtn">
                <a href="#footer">
                  CONNECT
                  <br />
                  {' '}
                  WITH ME
                </a>
              </button>
            </div>
          </div>
          <div className="lines nav--border">
            <div className="border-lines nav--border-1 animate__animated animate__fadeInUp" />
            <div className="border-lines nav--border-2 animate__animated animate__fadeInRight" />
            <div className="border-lines nav--border-3 animate__animated animate__fadeInLeft" />
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
