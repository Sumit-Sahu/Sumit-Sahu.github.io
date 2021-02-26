import React from 'react'
import unite from '../img/unite.png'
import mail from '../img/mail.png'
import portfolio from '../img/portfolio.png'
import bookvigyapan from '../img/bookvigyapan.png'

function Projects() {
    return (
        <>
            <section id="projects" className="projects-container">
                <div className="container">
                    <h2 className="section-title" data-title="Projects"> Projects </h2>
                    <div className="projects">
                        <div className="project">
                            <div className="cover">
                                <img src={unite} alt=""></img>
                                <div className="name">
                                    <h2>Unite</h2>
                                    <div className="links">
                                    <a target="_blank" href="https://justunite.herokuapp.com/">See Live</a>
                                    <a target="_blank" href="https://github.com/Sumit-Sahu/unite">Github</a>
                                    </div>
                                </div>
                            </div>
                            <div className="description">
                                <p>A video conference website that allows users to meet online, with or without video</p>
                            </div>
                        </div>
                        <div className="project">
                            <div className="cover">
                                <img src={mail} alt=""></img>
                                <div className="name">
                                    <h2>SimpleMail</h2>
                                    <div className="links">
                                    <a target="_blank" href="https://testapi.pythonanywhere.com/">See Live</a>
                                    <a target="_blank" href="https://github.com/Sumit-Sahu/simplemail">Github</a>
                                    </div>
                                </div>
                            </div>
                            <div className="description">
                                <p>website that send mail using Gmail API</p>
                            </div>
                        </div>
                        <div className="project">
                            <div className="cover">
                                <img src={portfolio} alt=""></img>
                                <div className="name">
                                    <h2>Portfolio Website</h2>
                                    <div className="links">
                                    <a target="_blank" href="https://sumit-sahu.github.io/">See Live</a>
                                    <a target="_blank" href="https://github.com/Sumit-Sahu/Sumit-Sahu.github.io">Github</a>
                                    </div>
                                </div>
                            </div>
                            <div className="description">
                                <p>My portfolio website</p>
                            </div>
                        </div>
                        <div className="project">
                            <div className="cover">
                                <img src={bookvigyapan} alt=""></img>
                                <div className="name">
                                    <h2>Vigyapan</h2>
                                    <div className="links">
                                    <a target="_blank" href="https://oohh.herokuapp.com/">See Live</a>
                                    <a target="_blank" href="https://github.com/Sumit-Sahu/vigyapan">Github</a>
                                    </div>
                                </div>
                            </div>
                            <div className="description">
                                <p>Proposed a landing page for Startup</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Projects
