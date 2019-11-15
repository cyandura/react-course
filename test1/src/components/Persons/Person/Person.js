import React, {Component} from 'react';

import classes from './Person.css';
import Aux from '../../../hoc/Auxiliary';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
    // style = {
    //     '@media(minWidth: 500px': {
    //         width: '450px'
    //     }
    // };
    constructor(props){
        super(props);
        this.inputElementRef = React.createRef;
    }
    // has to be static
    //connects the context to this component
    static contextType = AuthContext;

    componentDidMount(){
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }
    render(){
        console.log('Person.js: rendering...');
        return (
            //Fragment replaces the Aux component
            <Aux>
                
                {this.context.authenticated ? <p> authenticated!</p> : <p>Please Log in</p>}
                
           
             <p key="i1" onClick={this.props.click} > Im a person and i am {this.props.name} and {this.props.age} years old!</p>
             <p key="i2">  {this.props.children}</p>
             <input 
                key="i3"
                type="text" 
                onChange={this.props.changed} 
                value={this.props.name} 
             />
            
            </Aux>
             
        )
            
           
            
        
    }
    
}

export default Person;