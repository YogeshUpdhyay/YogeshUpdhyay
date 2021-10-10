import React from 'react'
import Zoom from 'react-reveal/Zoom'

import './Work.css'

const Work = () => {
    return (
        <Zoom>
            <div className="container mt-5">
                <p className="fs-1 fw-bold text-white text-center text-decoration-underline">Work Experience</p>
                <div class="row row-cols-1 row-cols-md-2 g-4">
                    <div class="col ps-5 pe-2">
                        <div class="card bg-dark text-white">
                            <img src="..." class="card-img" alt="..." />
                            <div class="card-img-overlay">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text">Last updated 3 mins ago</p>
                            </div>
                        </div>
                    </div>
                    <div class="col ps-5 pe-2">
                        <div class="card">
                        <img src="..." class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        </div>
                    </div>
                    <div class="col ps-5 pe-2">
                        <div class="card">
                        <img src="..." class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                        </div>
                        </div>
                    </div>
                    <div class="col ps-5 pe-2">
                        <div class="card">
                        <img src="..." class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </Zoom>
    )
}

export default Work
