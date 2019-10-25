import React, { Component } from 'react';
import classes from './App.css';
import Person from '../components/Persons/Person/Person';
//ErrorBoundary is used like a try/catch block in component form
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
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
      ...this.state.persons[personIndex]
    };
    //alternative:
    // const person = Object.assign({}, this.state.persons[personIndex])

    //change the value of the input
    person.name = event.target.value

    //copy the persons array again
    const persons = [...this.state.persons];

    //set the new (untouched) element at the found index, with the new value of
    //person that we set above
    persons[personIndex] = person;

    //update the state with the changes
    this.setState({persons: persons})
  } 
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    // replaced with a class in the CSS
    // const style = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'inherit',
    //   border: 'ipx solid blue',
    //   padding: '8px',
    //   cursor: 'pointer'
    // };

    let persons = null;

    //if button is clicked
    if(this.state.showPersons){
      //Can also use a if outside of the return statement, to handle conditionals
      persons = (
        
        <div >
          {this.state.persons.map((person, index) => { 
            return <Person 
              click={() => this.deletePersonHandler(index)}
              name= {person.name}
              age={person.age}
              key={person.id}
              //key was moved to the Error Boundary tag because the key has to be in the outer element in a map function
              changed={(event) => this.nameChangedHandler(event, person.id)} // should make this so react can uniquely id each entry
              className="Person"
            />
          })}
        </div>
      );
      
    }

    const classlist = [];
    if(this.state.persons.length <= 2){
      classlist.push(classes.red); //classes will be red
    }

    if(this.state.persons.length <= 1) {
      classlist.push(classes.bold); //classes = {'red', 'bold'}
    }

    return (
      
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classlist.join(' ')}>This is really working!</p>

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
