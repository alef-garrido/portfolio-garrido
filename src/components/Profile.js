import picture from '../assets/Profile-B-W.png';
import '../scss/profile.scss';

function Profile() {
  return (
    <section id="about" className="profile--container">
      <div data-aos="fade-down" className="p-lines profile--border">
        <div data-aos="fade-down" className="profile-lines line-1" />
        <div className="profile-lines line-2" />
        <div className="profile-lines line-3" />
      </div>
      <div className="profile--content">
        <div data-aos="fade-right" className="profile--pic">
          <img src={picture} alt="profile" />
          <div className="profile--title">
            <h5>
              Alef
              <br />
              Garrido
            </h5>
            <p>Web Developer</p>
          </div>
        </div>
        <div data-aos="fade-left" className="profile--summary">
          <p>
            {
              `
                My strongest feature: my mindset - a combination of 
                creativity, curiosity, and accountability. 
                My weakness: I need change, stimulation, freedom.
                They told me this is the industry for the curious 
                and restless, so I jumped into it, all in. 
              `
            }
          </p>
        </div>
      </div>
    </section>
  );
}

export default Profile;
