import React from 'react';
import './Cockpit.css';

const cockpit = (props) => {

     let Clasess = [];

    if(props.persons.length <= 2){
      Clasess.push('red');
    }
    if(props.persons.length >= 2){
      Clasess.push('blue')
    }

    // let style = {
    //  "color" : "red",
    //  "textAlign" : "center",
    // }

    let ButtonClass = [];

    if(props.persons.ShowText) {
     ButtonClass.push('green')
     // style = {
     //      "color" : "green"
     // }
    }
     return (
          <div>
          <h2 className = {ButtonClass.join(' ')}>{props.title}</h2>
          <h3 className= {Clasess.join(' ')}>Styling with Clasess</h3>
          <button onClick = {props.handler}>Toggle</button>
          </div>
     )
}

export default cockpit;