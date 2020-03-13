import React from 'react';
import Radium from 'radium';
import './Person.css'


const person = (props) => {

    console.log("PersonJs props----->", props)
    return (
        <div className="Person">
    <p onClick={props.click}> Hello I am {props.name} I stay in {props.place} and Id is {props.id} </p>
    <input type="text" onChange = {props.changed} value = {props.name}/>
    </div>
    )
};


export default Radium(person);