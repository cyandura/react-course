    import React, {useEffect} from 'react';
    import classes from './Cockpit.css';


    


    const cockpit = (props) => {
        useEffect(() => {
            console.log("will print with every rerender");
            //HTTPS request here...
            setTimeout(() => {
                alert("Saved data to the cloud");
                //1000ms time delay
            }, 1000);
            return() => {
                console.log('Cockpit.js: Clean up work in use Effect');
            }
            //only run when persons changes
            //allows us to control when this executes
            //empty array means run once
        }, []);
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
            <h1>{props.title}</h1>
            <p className={classlist.join(' ')}>This is really working!</p>
            <button 
                onClick={props.clicked}>Toggle Persons
            </button>

        </div>
        );
    };

export default cockpit;