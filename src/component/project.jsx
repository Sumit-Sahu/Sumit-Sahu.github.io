import React from 'react';

class Project extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            projects : [
                {
                    name: "Student Portal",
                    description: ""
                },
            ]
        };
    }
    render(){
        return (
            <>
            <div className = 'project'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <h2>Projects</h2>
                        <hr className = 'star-primary'></hr>
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default Project;