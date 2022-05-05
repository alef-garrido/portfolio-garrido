import { useEffect } from 'react';
import Aos from 'aos';
import '../scss/hero.scss';
import 'aos/dist/aos.css';
import deco80 from '../assets/decoration-nav80.svg';

function Hero() {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <div className="hero--section">
      <div className="hero-title" data-aos="fade-right">
        <h1 className="title-lighter">
          FRONT-END
        </h1>
        <p className="title--accent">
          <strong>DEVELOPER</strong>
        </p>
        <p className="title-lighter-sub">
          WEB-APPS
        </p>
        <p className="title--accent-sub">
          <strong>UX-MKT</strong>
        </p>
      </div>
      <div className="hero--deco" data-aos="fade-left">
        <div className="deco-left">
          <div className="overlay" />
        </div>
        <div className="deco-right">
          <div className="overlay" />
          <div className="hero-star">
            <img src={deco80} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
