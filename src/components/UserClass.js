import React from "react";
import { useState } from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count1:0,
        }
    }
    render(){
        const {name}= this.props;
        const {count1}= this.state;
    return (
        <div className="user-card">
            <h2>Count:{count1}</h2>
            <button onClick={()=>{
               this.setState({
                count1:this.state.count1+1
               });
            }}>countInc</button>
            <h3>Name: {name}</h3>
            <h3>Role: MERN Stack Developer</h3>
            <h3>Location: Bangluru</h3>
        </div>
    );
    };
}

export default UserClass;