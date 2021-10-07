import React from 'react'
import Zoom from 'react-reveal/Zoom';

import "./About.css"

const About = () => {
    return (
        <Zoom>
            <div className="container mt-5" style={{maxWidth: 1200}}>
                <div className="row">
                    <div className="col-lg-6">
                        <p className="fs-1 fw-bold text-white text-decoration-underline my-4">About Me</p>
                        <h3 className="text-muted my-3">HEY ✌</h3>
                        <h5 className="text-muted m-0 pd-4">
                            I’m a Full Stack and App Developer, 
                            and I specialize in writing efficient REST APIs and database design. For the backend, 
                            I mostly use Python or Node.js.I also have good grasp over Docker and Docker Swarm. 
                            I am proficient in app development using Flutter. I care deeply about building software that are 
                            usable and helpful for the most number of people possible.
                        </h5>
                    </div>

                    {/* Skills Section */}
                    <div className="col-lg-6">
                        <p className="fs-1 fw-bold text-white text-decoration-underline my-4">Skills</p>

                        {/* Skill Progress Bar */}
                        <h4 className="text-white">Full Stack Web</h4>
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" style={{width: "85%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>

                        <h4 className="text-white my-2">Mobile Application Dev</h4>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: "65%"}} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>

                        <h4 className="text-white my-2">DevOps</h4>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: "55%"}} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>

                    </div>
                </div>
            </div>
        </Zoom>
    )
}

export default About

