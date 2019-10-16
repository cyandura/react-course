import React, { Component } from 'react';
import './InputOutput.css';
const UserInput = (props) => {
    
        return(
            <div>
                <input type="text" length="20" onChange={props.changeName} value={props.name}/> 
                <input type="text" length="20" onChange={props.changeUpn} value={props.upn}/>
            

            </div>
        )

    
}

export default UserInput;