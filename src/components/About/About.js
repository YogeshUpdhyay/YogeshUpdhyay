import React from 'react'
import { fadeIn } from 'react-animations'
import Radium, {StyleRoot} from 'radium';

import "./About.css"

const styles = {
    about: {
        animation: 'x 1s',
        animationName: Radium.keyframes(fadeIn, 'fadeIn')
    }
}

const About = () => {
    return (
        <StyleRoot>
            <div className="container mt-5" style={styles.about}>
                <p className="fs-2 fw-bold text-white text-center text-decoration-underline m-0">About Me</p>
                <h4 className="text-muted text-center m-2">HEY ✌</h4>
                <p className="text-muted text-center ms=me-4">
                    I’m a Full Stack and App Developer, 
                    and I specialize in writing efficient REST APIs and database design. For the backend, 
                    I mostly use Python or Node.js.I also have good grasp over Docker and Docker Swarm. 
                    I am proficient in app development using Flutter. I care deeply about building software that are 
                    usable and helpful for the most number of people possible.
                </p>
                
            </div>
        </StyleRoot>
        
    )
}

export default About

