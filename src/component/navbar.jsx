import React from 'react';

class Navbar extends React.Component {
    constructor(props){
        super(props);
        this.state  = {
            section : ['Home','About','Project','Contact']
        }
    }

    render () {
        return (
            <nav className = ''>
                <ul className = ''>
                    {this.state.section.map( (value,index) => {
                        return (<li><a href={value}>{value}</a></li>)
                    })}
                </ul>     
            </nav>
        );
    }
}
export default Navbar;