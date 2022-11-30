import colorPicker from '../../static/img/color-picker.png';
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi2";

import './skills.css';

const Skills = (props) => {
    return (
        <section id="skills">
        <div className="skills">
          <div className="skill-card">
            <img src={colorPicker} alt="" className="skill-card-image" />
            <h3 className="skill-card-title">User Experience</h3>
            <p className="skill-card-subtext">
              We have got quite a few already made templates for 
              better project management that you can use now.
            </p>
          </div>
          <div className="skill-card">
            <img src={colorPicker} alt="" className="skill-card-image" />
            <h3 className="skill-card-title">User Experience</h3>
            <p className="skill-card-subtext">
              We have got quite a few already made templates for 
              better project management that you can use now.
            </p>
          </div>
          <div className="skill-card">
            <img src={colorPicker} alt="" className="skill-card-image" />
            <h3 className="skill-card-title">User Experience</h3>
            <p className="skill-card-subtext">
              We have got quite a few already made templates for 
              better project management that you can use now.
            </p>
          </div>
        </div>
        <div className="scroll-container">
          <div className="arrow-container">
            <HiChevronDoubleLeft size={32}/>
            <HiChevronDoubleRight size={32}/>
          </div>
          <a href="" className="contact-me">Contact Me</a>
        </div>
      </section>
    );
}

export default Skills;
