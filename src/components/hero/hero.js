import Navbar from "../navbar/navbar";
import './hero.css';

const Hero = (props) => {
  return (
      <div className="hero-section">
        <Navbar />
        <div className="hero-container">
          <div className="hero-container-cta">
            <div className="leading-text">Yogesh Upadhyay</div>
            <div className="banner-text">
                Hello, my <br />
                name's Yogesh. <br />
                I'm a Full Stack <br />
                Developer
            </div>
          </div>
        </div>
      </div>
  );
};

export default Hero;
