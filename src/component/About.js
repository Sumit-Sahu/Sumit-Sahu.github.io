import React from 'react'
import resume from '../sumit-resume.pdf'

const About = () => {
    return (
        <>
        <section id="about" className="about ">
            <div className="container">
                <h2 className="section-title" data-title="About"> Get to know me </h2>
                <div className="about_description">
                    <p>Hi, I'm Sumit Sahu, I will be graduating with a B.Tech in CSE from IIITDM, Jabalpur in May 2022</p>
                    <p>In addition to my knowledge, I am actively learning and expanding my knowledge every day and staying up to date with trends and current standards in the industry</p>
                </div>
                {/* <a className="" href={resume} target="_blank" rel="noopener noreferrer">Download Resume</a> */}
            </div>
        </section>
        </>
    )
}

export default About;
