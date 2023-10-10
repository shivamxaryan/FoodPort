import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const {name}= this.props;

    return (
        <div className="user-card">
            <h3>Name: {name}</h3>
            <h3>Role: MERN Stack Developer</h3>
            <h3>Location: Bangluru</h3>
        </div>
    );
    };
}

export default UserClass;