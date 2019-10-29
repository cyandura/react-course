import Person from './Person/Person';
import React from 'react';

//ES6 arrow function notation you can omit the return statement

const persons = (props) => props.persons.map((person, index) => { 
        return <Person 
          click={() => props.clicked(index)}
          name= {person.name}
          age={person.age}
          key={person.id}
          //key was moved to the Error Boundary tag because the key has to be in the outer element in a map function
          changed={(event) => props.changed(event, person.id)} // should make this so react can uniquely id each entry
          className="Person"
        />
      }

);

export default persons;