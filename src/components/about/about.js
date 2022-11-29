import { HiArrowRight } from "react-icons/hi2";

import './about.css';

const About = (props) => {
    return (
        <section id="about">
        <div className="about">
          <div className="leading-text">What I Do</div>
          <div className="about-small-banner-text">
            I enjoy creating delightful, <br />
            humam-centered digital experiences.  
          </div>
          <div className="about-banner-text">
            Think. Make. <br />
            Solve.
          </div>
          <button className="btn">
            <p className="button-text">Contact Me</p>
            <HiArrowRight size={22} color="white" />
          </button>
        </div>
      </section>
    );
}

export default About;