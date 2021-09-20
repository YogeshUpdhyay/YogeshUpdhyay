import React from 'react'
import Zoom from 'react-reveal/Zoom';

import "./About.css"

const About = () => {
    return (
        <Zoom>
            <div className="container mt-5">
                <p className="fs-2 fw-bold text-white text-center text-decoration-underline m-0">About Me</p>
                <h4 className="text-muted text-center m-3">HEY ✌</h4>
                <h5 className="text-muted text-center" style={{maxWidth: 1200}}>
                    I’m a Full Stack and App Developer, 
                    and I specialize in writing efficient REST APIs and database design. For the backend, 
                    I mostly use Python or Node.js.I also have good grasp over Docker and Docker Swarm. 
                    I am proficient in app development using Flutter. I care deeply about building software that are 
                    usable and helpful for the most number of people possible.
                </h5>
            </div>
        </Zoom>
    )
}

export default About

