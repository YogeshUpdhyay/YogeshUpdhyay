import React from 'react'
import Typist from 'react-text-typist'

import './Header.css'

const Header = () => {
    return (
        <div className="container">
            <p className="display-3 title text-center mt-4"><strong>Hi, I'm Yogesh</strong></p>
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
        </div>
    )
}

export default Header
