import React from 'react'

const AppBar = () => {

    return (
        <div className="container pt-2 ps-pe-auto">
            <nav className="navbar navbar-expand-lg navbar-transperant bg-transperant">
                <div className="container-fluid">
                    <h4 className="text-muted">Yogesh Upadhyay</h4>
                    <div className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars" style={{color: 'white'}}></i>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item text-muted pe-4 pt-pd-2">About</li>
                            <li className="nav-item text-muted pe-4 pt-pd-2">Work</li>
                            <li className="nav-item text-muted pe-4 pt-pd-2">Projects</li>
                            <li className="nav-item text-muted pe-4 pt-pd-2">Contact Me</li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default AppBar
