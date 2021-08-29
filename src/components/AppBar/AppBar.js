import {React, useState} from 'react'
import './AppBar.css'

const AppBar = () => {

    // Icon Transition State and Operations
    const [menu, setMenu] = useState(false)
    const changeMenu = (val) => setMenu(val)

    // Nav Menu State and Operations
    const [workActive, setWorkActive] = useState(false);
    const [projectsActive, setProjectsActive] = useState(false);
    const [aboutActive, setAboutActive] = useState(true);

    const changeActive = (newActive) => {
        console.log("Here");
        switch (newActive) {
            case "Work":
                setWorkActive(true)
                setProjectsActive(false)
                setAboutActive(false)
                break;

            case "Project":
                setWorkActive(false)
                setProjectsActive(true)
                setAboutActive(false)
                break;

            case "About":
                setWorkActive(false)
                setProjectsActive(false)
                setAboutActive(true)
                break;

            default:
                break;
        }
    }   

    return (
        <div className="container pt-4" style={{maxWidth: 1200}}>
            <nav className="navbar navbar-expand-lg navbar-transperant bg-transperant">
                <div className="container-fluid">
                    <h5 className="text-muted m-0"><strong>Yogesh Upadhyay</strong></h5>
                    <div className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                       {!menu ? <i className="fas fa-bars" style={{color: 'white'}} onClick={() => changeMenu(true)}></i> : 
                            <i className="fas fa-times" style={{color: 'white'}} onClick={() => changeMenu(false)}></i>}
                    </div>
                    <div className="collapse navbar-collapse align-items-end" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            {aboutActive ? <h5 className="nav-item text-white m-0 pe-4 pd-2">About</h5> : 
                                <h5 className="nav-item text-muted m-0 pe-4 pd-2" onClick={() => changeActive("About")}>About</h5>}
                            {workActive ? <h5 className="nav-item text-white m-0 pe-4 pd-2">Work</h5> : 
                                <h5 className="nav-item text-muted m-0 pe-4 pd-2" onClick={() => changeActive("Work")}>Work</h5>}
                            {projectsActive ? <h5 className="nav-item text-white m-0 pe-4 pd-2">Projects</h5> : 
                                <h5 className="nav-item text-muted m-0 pe-4 pd-2" onClick={() => changeActive("Project")}>Projects</h5>}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default AppBar
