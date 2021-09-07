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
                <div className="container-fluid align-items-end">
                    <h5 id="appBarName" className="text-muted m-0"><strong>Yogesh Upadhyay</strong></h5>
                    <div className="d-flex flex-row" id="navbarSupportedContent">
                        {aboutActive ? <h5 className="nav-item text-white m-0 pe-4 pd-2">About</h5> : 
                            <h5 className="nav-item text-muted m-0 pe-4 pd-2" onClick={() => changeActive("About")}>About</h5>}
                        {workActive ? <h5 className="nav-item text-white m-0 pe-4 pd-2">Work</h5> : 
                            <h5 className="nav-item text-muted m-0 pe-4 pd-2" onClick={() => changeActive("Work")}>Work</h5>}
                        {projectsActive ? <h5 className="nav-item text-white m-0 pe-4 pd-2">Projects</h5> : 
                            <h5 className="nav-item text-muted m-0 pe-4 pd-2" onClick={() => changeActive("Project")}>Projects</h5>}
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default AppBar
