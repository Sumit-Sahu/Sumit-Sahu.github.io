import React, { Fragment } from 'react'
import Particles from 'react-particles-js';
import TypedText from './Typed'


function Header() {
    return (
        <Fragment>
            <Particles style={{background:'linear-gradient(rgb(1, 31, 65) 70%, rgb(3, 66, 139))'}}
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
            />
            <div className='overlay'>
                <h1 className='greet'>{`Hi!`}</h1>
                <div className = 'typed'>
                <TypedText 
                strings={[
                    "I'm Sumit Sahu",
                     "A CS Undergrad at IIIT Jabalpur",
                     "I'm a Software Developer",
                     "I love building amazing products",
                     "Let's Build Together!",
                     "Let's Hack Together!"]}
                />
                </div>
            </div>
        </Fragment>
    )
}

export default Header;
