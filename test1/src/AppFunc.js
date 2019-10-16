import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  //state is from component
  //changing state will rerender the page
  const [personsState, setPersonsState] = useState({
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 25},
      {name: 'Stephanie', age: 23}
    ]
    
  });

  const [otherState, setOtherState] = useState('some other value');

  console.log(personsState, otherState);

  const switchNameHandler = () => {
      // dont do this !! this.state.persons[0].name = 'Maxmillion';
      //console.log("was clicked!");
      // replaces the state with the following values, does not append!!
      setPersonsState({persons: [
        {name: 'Cody Yandura', age: 28},
        {name: 'Manu', age: 25},
        {name: 'Stephanie', age: 27}
        ]
      });
  };

  
  return (
    <div className="App">
      <h1>Hi, Im a react app</h1>
      <p>This is really working</p>
      
      <button onClick={switchNameHandler}  >Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} /> 
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: Racing</Person>  
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
    
  );
    // whats its really compiing to:
    //return React.createElement('div', {className:'App'}, React.createElement('h1', null, "Does this work now"))
  }


export default app;

var state ={
  persons: [
    {name: 'Max', age: 28},
    {name: 'Manu', age: 25},
    {name: 'Stephanie', age: 23}
  ],
  otherState: 'Some other valye'
}
