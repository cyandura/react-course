//Higher order Componenets are typically named with With-Something
//This is a component that wraps something to do something like, error handing
//Higher order component
import React from 'react';

//Adds a div with a given class name
//function that returns a functional component
const withClass = (WrappedComponent, className) => {
    return props => (
        <div className={className}>
            <WrappedComponent/>
        </div>

    );
}

export default withClass;