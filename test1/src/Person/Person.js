import React from 'react';

import classes from './Person.css';

const person = (props) => {
    const style = {
        '@media(minWidth: 500px': {
            width: '450px'
        }
    };

    const rnd = Math.random();
        if (rnd > 0.7){
            throw new Error('Something went wrong');
        }
    return (
        
        <div className={classes.Person} style={style}>
            <p onClick={props.click} > Im a person and i am {props.name} and {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
        
    )
}

export default person;