import React from 'react'

const AppBar = () => {

    return (
        <div className="container pt-4" style={{maxWidth: 1200}}>
            <nav className="navbar navbar-expand-lg navbar-transperant bg-transperant">
                <div className="container-fluid">
                    <h5 className="text-muted m-0"><strong>Yogesh Upadhyay</strong></h5>
                    <div className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars" style={{color: 'white'}}></i>
                    </div>
                    <div className="collapse navbar-collapse align-items-end" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <h5 className="nav-item text-white m-0 pe-4">About</h5>
                            <h5 className="nav-item text-muted m-0 pe-4">Work</h5>
                            <h5 className="nav-item text-muted m-0 pe-4">Projects</h5>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default AppBar
