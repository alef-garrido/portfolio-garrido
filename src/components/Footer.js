import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Aos from 'aos';
import logo from '../assets/logo.svg';
import lematLogo from '../assets/lematLogo.png';
import Form from './footer/Form';
import Rss from './footer/Rss';
import '../scss/footer.scss';

function Footer() {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <footer id="footer" className="footer--container" data-aos="fade-up">
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
        <Form />
        <Rss />
      </div>
    </footer>
  );
}

export default Footer;
