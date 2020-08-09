import React from 'react';
import Navbar from './navbar';
import image from '../img/developer.svg'
class About extends React.Component {
    constructor(props) {
        super(props);
       
    }
    render(){
        return (
            <>
            <div className = 'about row'>
                <div className = 'about-text col-md-6 col-sm-6 col-xs-12 '>
                    <h1><strong>Hello, I am<br/><span style = {{color: '#ea4141'}}>Sumit Sahu</span></strong></h1>
                    <h2><h2>CS Undergrad | Open Source Software Developer</h2></h2>
                    <p>I am a software engineer persuing Computer Science and Engineering at the <span style={{color: '#ea4141'}}><strong>Indian Institute of Information Technology(IIIT), Jabalpur</strong></span>. I love solving exciting problems by making practical applications of Data Structures &amp; Algorithms in real world scenario.</p>
                </div>
                <div className= 'profile  col-md-6 col-sm-6 col-xs-12'>
                    <img class = 'profile-pic' src={image} alt="developer image"/>
                </div>
            </div>
            </>
        );
    }
}

export default About;