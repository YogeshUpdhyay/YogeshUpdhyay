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
                <div className="col">
                    <p className="fs-2 fw-bold text-white text-center m-0">About Me</p>
                    <hr />
                    <div className="row">
                        <div className="col">
                            Here goes the images
                        </div>
                        <div className="col">
                            Here goes the data
                        </div>
                    </div>
                </div>
            </div>
        </StyleRoot>
        
    )
}

export default About

