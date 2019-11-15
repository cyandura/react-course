    import React, {useEffect} from 'react';
    import classes from './Cockpit.css';
    import AuthContext from '../../context/auth-context';

    


    const cockpit = props => {
        useEffect(() => {
            console.log("will print with every rerender");
            //HTTPS request here...
            const timer = setTimeout(() => {
                alert("Saved data to the cloud");
                //1000ms time delay
            }, 1000);
            return() => {
                //clears the timer so the alert never shows after the component goes away
                clearTimeout(timer);
                //this gets printed when useEffect runs for the last time
                console.log('Cockpit.js: Clean up work in use Effect');
            }
            //only run when persons changes 
            //allows us to control when this executes
            //empty array means run once
        }, []); // if empty, it means the dependencies cant change and it only runs once.

        useEffect( () =>{
            // will run for every update cycle, because there is no second arguement
            console.log('Cockpit.js: Clean up work in use 2nd  Effect');
            return() => {
                //this gets printed when useEffect runs for the last time
                console.log('Cockpit.js: Clean up work in use  2nd Effect');
            };
        });

        const classlist = [];

        var btnClass = '';
        
        if (props.showPersons){
            btnClass = classlist.Red;
        }


        if(props.personsLength <= 2){
            classlist.push(classes.red); //classes will be red
        }

        if(props.personsLength <= 1) {
            classlist.push(classes.bold); //classes = {'red', 'bold'}
        }

        return(
        <div className={classlist.Cockpit}>
            <h1>{props.title}</h1>
            <p className={classlist.join(' ')}>This is really working!</p>
            <button 
                onClick={props.clicked}>Toggle Persons
            </button>
            <AuthContext.Consumer>
                {(context) => <button onClick={context.login}>Log In</button>}
            </AuthContext.Consumer>

        </div>
        );
    };

//react.memo is an optimization
export default React.memo(cockpit) ;