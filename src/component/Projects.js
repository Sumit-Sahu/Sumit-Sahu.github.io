import React from 'react'
import unite from '../img/unite.png'
import mail from '../img/mail.png'
import portfolio from '../img/portfolio.png'
import bookvigyapan from '../img/bookvigyapan.png'

function Projects() {
    return (
        <>
        <section id="projects" className="projects">
            <div className="container">
                <h2 className="section-title" data-title="Projects"> Projects </h2>
                <div className="projects">
                    <div className="project">
                        
                        <img src={unite} alt=""></img>
                        <article>
                            <h2>Unite</h2>
                            <h4>A video conference website that allows users to meet online, with or without video</h4>
                        </article>
                    </div>
                    <div className="project">
                        <img src={mail} alt=""></img>
                        <article>
                            <h2>SimpleMail</h2>
                            <h4>website that send mail using Gmail API</h4>
                        </article>
                    </div>
                    <div className="project">
                        <img src={portfolio} alt=""></img>
                        <article>
                            <h2>Portfolio Website</h2>
                            <h4>My portfolio website</h4>
                        </article>
                    </div>
                    <div className="project">
                        <img src={bookvigyapan} alt=""></img>
                        <article>
                            <h2>Vigyapan</h2>
                            <h4>Proposed a landing page for Startup</h4>
                        </article>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Projects
