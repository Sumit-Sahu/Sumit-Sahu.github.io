import React from 'react';
import TypedText from './Typed'

// var typed = new Typed(".type", {
//     strings: ["I'm Sumit Sahu", "A CS Undergrad at IIIT Jabalpur","I'm a Software Developer","I love building amazing products","Let's Build Together!","Let's Hack Together!"],
//     typeSpeed:30,
//     backSpeed:20,
//     loop:true,
//     showCursor:true,
//     cursorChar: '|',
//   });

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            greet : '{ Hellow World }'
        };
    }
    
    render(){
        return (
           <header>
               <h1 className='greet'>{this.state.greet}</h1>
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

           </header>
        );
    }
}

export default Header;