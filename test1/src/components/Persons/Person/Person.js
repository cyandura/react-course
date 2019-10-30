import React, {Component} from 'react';

import classes from './Person.css';

class Person extends Component {
    // style = {
    //     '@media(minWidth: 500px': {
    //         width: '450px'
    //     }
    // };

    render(){
        console.log('Person.js: rendering...')
        return (
            
            <div className="Person" >
                <p onClick={this.props.click} > Im a person and i am {this.props.name} and {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </div>
            
        )
    }
    
}

export default Person;