    import React from 'react';
    import classes from './Cockpit.css';


    


    const cockpit = (props) => {

        const classlist = [];
        var btnClass = '';
        
        if (props.showPersons){
            btnClass = classlist.Red;
        }


        if(props.persons.length <= 2){
            classlist.push(classes.red); //classes will be red
        }

        if(props.persons.length <= 1) {
            classlist.push(classes.bold); //classes = {'red', 'bold'}
        }

        return(
        <div className={classlist.Cockpit}>
            <h1>Hi, I'm a React App</h1>
            <p className={classlist.join(' ')}>This is really working!</p>
            <button 
                onClick={props.clicked}>Toggle Persons
            </button>

        </div>
        );
    };

export default cockpit;