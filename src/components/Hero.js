import '../scss/hero.scss';
import deco80 from '../assets/decoration-nav80.svg';

function Hero() {
  return (
    <div className="hero--section">
      <div className="hero-title">
        <h1 className="title-lighter animate__animated animate__fadeInLeft">
          FRONT-END
        </h1>
        <p className="title--accent animate__animated animate__fadeInRight">
          <strong>DEVELOPER</strong>
        </p>
        <p className="title-lighter-sub animate__animated animate__fadeInLeft">
          WEB-APPS
        </p>
        <p className="title--accent-sub animate__animated animate__fadeInRight">
          <strong>UX-MKT</strong>
        </p>
      </div>
      <div className="hero--deco">
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
