import React, { Component } from 'react';
import './InputOutput.css';
const UserOutput = (props) => {
        return(
            <div className="UserOutput">
                <p>Email Creation</p>
                <p>{props.username}@{props.upn}.com </p>
                <p>{props.username}@{props.upn}.com</p>

            </div>
        )
}

export default UserOutput;