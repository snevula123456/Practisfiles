import React, { Component } from  'react';

class person extends Component {
     render(){
          console.log('[Person.js] is rendering....');
          return (
               <div>
               <p onClick = {this.props.click}> The Name is {this.props.name} and age is {this.props.age}</p>
               <input type="text" onChange = {this.props.change} value = {this.props.name}/> 
               </div>
              
          )
     }
} 
export default person;