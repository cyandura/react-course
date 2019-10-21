import React from 'react';
import Radium from 'radium'

const person = (props) => {
    return (
        <div>
            <p onClick={props.click} > Im a person and i am {props.name} and {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
        
    )
    
}

export default Radium(person);