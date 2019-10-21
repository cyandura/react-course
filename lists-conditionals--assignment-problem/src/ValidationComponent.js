import React, { Component } from 'react';

const ValidationComponent = (props) => {
    let result = "default";
    if(props.count < 5){
        this.result = "Text Too Short"
    }
    else if(props.count >= 5){
        this.result = "Text Long Enough"
    }
    return(
        <div>{this.result}</div>
    )

}

export default ValidationComponent;