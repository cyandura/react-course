import Person from './Person/Person';
import React, { Component} from 'react';

//ES6 arrow function notation you can omit the return statement

class Persons extends Component {

  //makes no sense to use if we dont have inital state
  // static getDerivedStateFromProps(props,state){
  //   console.log("persons.js: GetDerivedStateFromProps");
  //   return state;
  // }

  shouldComponentUpdate(nextProps, nextState){
    console.log("Persons.js : Should Component Update")
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log("Persons.js getSnapshotBeforeUpdate");
    
  }

  //runs when we are done with all the updating
  componentDidUpdate(){
    console.log("Persons.js componentDidUpdate");
  }
  componentWillUnmount(){
    console.log("Persons.js ComponetWillUnmount");
  }
  render(){
    console.log('PersonS.js: rendering...');
    return this.props.persons.map((person, index) => { 
      return(
        <Person 
          click={() => this.props.clicked(index)}
          name= {person.name}
          age={person.age}
          key={person.id}
          //key was moved to the Error Boundary tag because the key has to be in the outer element in a map function
          changed={(event) => this.props.changed(event, person.id)} // should make this so react can uniquely id each entry
          className="Person"
        />
      );
    });
  }
  
}

export default Persons;