import { FiArrowUpRight } from 'react-icons/fi';
import {
  FaLinkedinIn, FaTwitter, FaInstagram, FaAngellist,
} from 'react-icons/fa';
import logo from '../assets/logo.svg';
import lematLogo from '../assets/lematLogo.png';

import '../scss/footer.scss';

function Footer() {
  return (
    <footer id="footer" className="footer--container">
      <div className="footer-lines footer--border" data-aos="fade-down">
        <div className="footer-line footer-line-1" data-aos="fade-down" />
        <div className="footer-line footer-line-2" data-aos="fade-left" />
        <div className="footer-line footer-line-3" data-aos="fade-right" />
      </div>
      <div className="footer-line footer-line-left" data-aos="fade-down" />
      <div className="footer-line footer-line-right" data-aos="fade-down" />
      <div className="footer-line footer-line-bottom" />
      <div className="footer--content">
        <div className="footer--header">
          <img src={logo} alt="site logo" data-aos="fade-down" />
          <div className="footer--disclaimer" data-aos="fade-down">
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
          <li data-aos="fade-down">
            <a href="#home">Home</a>
          </li>
          <li data-aos="fade-down">
            <a href="#about">About Me</a>
          </li>
          <li data-aos="fade-down">
            <a href="#projects">Projects</a>
          </li>
        </ul>
        <div className="footer--contact" data-aos="fade-down">
          <p className="contact--item">Mx +52 449 560 5149</p>
          <p className="contact--item">info@alef-lemat.tech</p>
        </div>
      </div>
      <div className="footer--form">
        <h5 className="footer--title" data-aos="fade-down">NEWSLETTER</h5>
        <form data-aos="fade-down">
          <input type="text" name="email" placeholder="Email address" />
          <div className="form--arrow">
            <FiArrowUpRight />
          </div>
        </form>
        <div className="footer--rrss" data-aos="fade-down">
          <div className="rrss--icon">
            <FaLinkedinIn />
          </div>
          <div className="rrss--icon">
            <FaTwitter />
          </div>
          <div className="rrss--icon">
            <FaInstagram />
          </div>
          <div className="rrss--icon">
            <FaAngellist />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
