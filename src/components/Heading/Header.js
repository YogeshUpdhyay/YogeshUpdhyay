import React from 'react'
import Typist from 'react-text-typist'

import './Header.css'

const Header = () => {
    return (
        <div className="container px-auto">
            <p className="display-4 title text-center"><strong>Hi, I'm Yogesh</strong></p>
            <h4 className="text-center text-muted mt-md-4">
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
            </h4>
        </div>
    )
}

export default Header
