import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'a3wtv' , name: 'Max', age: 28 },
      { id: 'afw3t', name: 'Manu', age: 29 },
      { id: 'uyert' ,name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  };

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    });
  };

  deletePersonHandler = (personIndex) => {
    //alternative way of copying an array
    // const persons = [...this.state.persons];
    const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  nameChangedHandler = (event, id) => {
    //personIndex will hold the index of the person in the arrya where the id that was inputted
    //is the same as the ID of the person. The findIndex() function takes in a function, applies it
    // to every element in the array and returns the index if the function output is true
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personsIndex]
    };
    //alternative:
    // const person = Object.assign({}, this.state.persons[personIndex])

    //change the value of the input
    person.name = event.target.value

    //copy the persons array again
    const persons = [...this.state.persons];

    //set the new (untouched) element at the found index, with the new value of
    //person that we set above
    persons[personsIndex] = person;

    //update the state with the changes
    this.setState({persons: persons})
  } 
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }
  render() {
    let persons = null;
    if(this.state.showPersons){
      //Can also use a if outside of the return statement, to handle conditionals
      persons = (
        
        <div>
          {this.state.persons.map((person, index) => { 
            return <Person 
              click={() => this.deletePersonHandler(index)}
              name= {person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} // should make this so react can uniquely id each entry

            />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {/* Ternary Statement To allow showing div based on conditional*/}
        {/* { 
          this.state.showPersons ? 
            <div>
              <Person
                name={this.state.persons[0].name}
                age={this.state.persons[0].age}
              />
              <Person
                name={this.state.persons[1].name}
                age={this.state.persons[1].age}
                click={this.switchNameHandler.bind(this, 'Max!!')}
                changed={this.nameChangedHandler}>
                My Hobbies: Racing
              </Person>
              <Person
                name={this.state.persons[2].name}
                age={this.state.persons[2].age}
              />
            </div> : null
        } */}
        {persons}
        
        
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
