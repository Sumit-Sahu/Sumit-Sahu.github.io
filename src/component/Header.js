import React, { Fragment } from 'react'
// import Particles from 'react-particles-js';
import TypedText from './Typed'


function Header() {
    return (
        <Fragment>
            <header>
                {/* <Particles style={{background:'linear-gradient(rgb(1, 31, 65) 70%, rgb(3, 66, 139))',height:'100%'}}
                    params={{
                        particles: {
                        color: {
                            value: "#75A5B7"
                        },
                        line_linked: {
                            color: {
                            value: "linear-gradient(rgb(1, 31, 65) 70%, rgb(3, 66, 139))"
                            }
                        },
                        number: {
                            value: 50
                        },
                        size: {
                            value: 3
                        }
                        }
                    }}
                /> */}
                <div className='overlay'>
                    <div className='greet-block'>
                        <h1 className='greet'>Hi,<br />
                            I'm <span className='greet-title_color'>Sumit Sahu</span><br />
                            {/* Software Developer */}
                        </h1>
                        <div className='typed'>
                            <TypedText
                                strings={[
                                    "A CS Undergrad at <span style=color:aquamarine>IIIT Jabalpur</span>",
                                    "I'm a Software Developer",
                                    "Let's Build Together!"
                                ]}
                            />
                        </div>
                    </div>
                    <div className="header_social">
                        <a href="mailto:sumiiitjsahu@gmail.com"><i className="fas fa-envelope-square" target="_blank" rel="noopener noreferrer"></i></a>
                        <a href="https://www.linkedin.com/in/sumit-sahu-20b62619b/"><i className="fab fa-linkedin" target="_blank"></i></a>
                        <a href="https://github.com/Sumit-Sahu"><i className="fab fa-github" target="_blank"></i></a>
                        <a href="https://stackoverflow.com/users/13489202/sumit"><i className="fab fa-stack-overflow" target="_blank"></i></a>
                    </div>
                </div>
            </header>
        </Fragment>
    )
}

export default Header;
