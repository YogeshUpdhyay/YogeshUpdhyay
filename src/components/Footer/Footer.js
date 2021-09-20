import React from 'react'

import './Footer.css'
import avatarImg from '../../assets/avatar.png'

const Footer = (props) => {
    return (
        <div 
            className="container py-5 mt-5" 
            style={{
                maxWidth: 1200,
                borderTop: '2px solid #6c757d'
            }}
        >
            <h3 className="text-white text-bold">Get In Touch</h3>
            <div className="row justify-content-between">
                <div className="col-xl-6">
                    <div className="row">
                        <div className="col">
                            <h5 className="text-white my-2">
                                If you want to work together on a project or just have a chat.
                                Don't hesitate to get in touch.
                            </h5>
                        </div>
                        <div className="col">
                            <img src={avatarImg} alt="Avatar Thumbnail" className="avatarImage" />
                        </div>
                    </div>
                    
                    <div className="row">
                        <a href="mailto:yogeshh2021@gmail.com" type="button" className="btn btn-danger btn-lg my-4 mx-2">
                            Send me an email
                        </a>
                    </div>
                </div>
                <div className="col-xl-4">
                    <h5 className="text-muted text-end md-2">About</h5>
                    <h5 className="text-muted text-end md-2">Work</h5>
                    <h5 className="text-muted text-end md-2">Projects</h5>
                    <div className="d-flex justify-content-end">
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
            </div>
        </div>
    )
}

export default Footer
