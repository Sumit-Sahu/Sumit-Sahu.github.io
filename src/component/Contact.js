import React from 'react'
import resume from '../sumit-resume.pdf'


function Contact() {
    return (
        <>
            <section id="contact" className="contact">
                <div className="container">
                    <h2 className="section-title" data-title="Contact"> Get In Touch </h2>
                    <p>If you have a project that you want to get started, think you need my help with something or just fancy saying hey, then get in touch.</p>
                    <div style={{margin:"2rem"}}>
                    <a class="link_button" title="sumiiitjsahu@gmail.com" href="mailto:sumiiitjsahu@gmail.com?subject=Say Hello&amp;body=Hi Sumit, How you doing?">Say Hello!</a>
                    <a class="link_button" href={resume} target="_blank" rel="noopener noreferrer">View Resume </a>
                    </div>
                    <div className="contact_social">
                        <a href="mailto:sumiiitjsahu@gmail.com"><i className="fas fa-envelope-square" target="_blank" rel="noopener noreferrer"></i></a>
                        <a href="https://www.linkedin.com/in/sumit-sahu-20b62619b/"><i className="fab fa-linkedin" target="_blank"></i></a>
                        <a href="https://github.com/Sumit-Sahu"><i className="fab fa-github" target="_blank"></i></a>
                        <a href="https://stackoverflow.com/users/13489202/sumit"><i className="fab fa-stack-overflow" target="_blank"></i></a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
