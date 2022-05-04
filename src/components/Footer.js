import { FiArrowUpRight } from 'react-icons/fi';
import {
  FaLinkedinIn, FaTwitter, FaGithub, FaAngellist,
} from 'react-icons/fa';
import logo from '../assets/logo.svg';
import lematLogo from '../assets/lematLogo.png';

import '../scss/footer.scss';

function Footer() {
  return (
    <footer id="footer" className="footer--container">
      <div className="footer-lines footer--border">
        <div className="footer-line footer-line-1" />
        <div className="footer-line footer-line-2" />
        <div className="footer-line footer-line-3" />
      </div>
      <div className="footer-line footer-line-left" />
      <div className="footer-line footer-line-right" />
      <div className="footer-line footer-line-bottom" />
      <div className="footer--content">
        <div className="footer--header">
          <img src={logo} alt="site logo" />
          <div className="footer--disclaimer">
            <img src={lematLogo} className="footer--logo" alt="brand logo" />
            <p>
              2022 alefLeMat&trade;
              <br />
              All rights reserved
            </p>
          </div>
        </div>
      </div>
      <div className="footer--menu">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
        </ul>
        <div className="footer--contact">
          <p className="contact--item">Mx +52 449 560 5149</p>
          <p className="contact--item">info@alef-lemat.tech</p>
        </div>
      </div>
      <div className="footer--form">
        <h5 className="footer--title">NEWSLETTER</h5>
        <form
          name="contact"
          method="post"
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="email" name="email" placeholder="Email address" />
          <button
            type="submit"
            className="form--arrow"
          >
            <FiArrowUpRight />
          </button>
        </form>
        <div className="footer--rrss">
          <a
            href="https://www.linkedin.com/in/alef-g/"
            target="_blank"
            rel="noreferrer noopener"
            className="rrss--icon"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/alef-garrido"
            target="_blank"
            rel="noreferrer noopener"
            className="rrss--icon"
          >
            <FaGithub />
          </a>
          <a
            href="https://angel.co/u/armando-garrido"
            target="_blank"
            rel="noreferrer noopener"
            className="rrss--icon"
          >
            <FaAngellist />
          </a>
          <a
            href="https://twitter.com/Alef_Garrido"
            target="_blank"
            rel="noreferrer noopener"
            className="rrss--icon"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
