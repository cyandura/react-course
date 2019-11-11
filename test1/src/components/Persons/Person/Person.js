import React, {Component} from 'react';

import classes from './Person.css';
import Aux from '../../../hoc/Auxiliary';

class Person extends Component {
    // style = {
    //     '@media(minWidth: 500px': {
    //         width: '450px'
    //     }
    // };

    render(){
        console.log('Person.js: rendering...');
        return (
            //Fragment replaces the Aux component
            <Aux>
            {/* <div className="Person" > */}
             <p key="i1" onClick={this.props.click} > Im a person and i am {this.props.name} and {this.props.age} years old!</p>
             <p key="i2">  {this.props.children}</p>
             <input 
                key="i3"
                type="text" 
                onChange={this.props.changed} 
                value={this.props.name} 
             />
            {/* <div> */}
            </Aux>
             
        )
            
           
            
        
    }
    
}

export default Person;