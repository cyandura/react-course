import React, { Component } from 'react';

const UserInput = (props) => {
    
        return(
            <div>
                <input type="text" length="40" onChange={props.onChangeHandler}/>



            </div>
        )

    
}

export default UserInput;