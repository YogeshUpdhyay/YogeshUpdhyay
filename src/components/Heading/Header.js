import React from 'react'
import Typist from 'react-text-typist'

import './Header.css'

const Header = () => {
    return (
        <div className="container">
            <p className="display-2 title text-center mt-4"><strong>Hi, I'm Yogesh</strong></p>
            <h3 className="text-center text-muted mt-md-4">
                I'm a <Typist 
                    sentences={[
                        'Full Stack Developer', 
                        'App Developer', 
                        'ML/AI Enthusiast'
                    ]} 
                    loop={true} 
                    typingSpeed={160}
                    className="typist-text"
                />
            </h3>
            <div className="d-flex justify-content-center">
                <a className="m-2" href="https://github.com/YogeshUpdhyay" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github fa-2x social-links"></i>
                </a>
                <a className="m-2" href="https://www.linkedin.com/in/yogesh-upadhyay-8169b4190/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin fa-2x social-links"></i>
                </a>
                <a className="m-2" href="https://www.hackerrank.com/yogeshh2021" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-hackerrank fa-2x social-links"></i>
                </a>
            </div>
        </div>
    )
}

export default Header
