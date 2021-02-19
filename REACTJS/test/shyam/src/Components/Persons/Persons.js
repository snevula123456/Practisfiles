import React, { Component } from 'react';
import Person from '../Person/Person'; 

class persons extends Component{
     static getDerivedStateFrom(props, state){
          console.log(["Persons.js"] );
     }

     shouldComponentUpdate(nextprops, nextstate){
          console.log('[persons.js] shouldComponentUpdate');
          return true;
     }
     getSnapshotBeforeUpdate(previousprops,Previousstate){
          console.log('[snapshot] is rendering');
          return {message: "Testing"}
     }
     componentDidUpdate(previousprops, Previousstate , snapshot){
          console.log(snapshot);
          console.log('[Component did Update is working]');
     }
     render(){
          console.log('[Persons.js] is rendering');
          return (
               <div>
               {this.props.persons.map((per , index) => {
               return <Person 
               name= {per.name} age={per.age} 
               click = {() => this.props.delete(index)}
               change = {(event) => this.props.changed(event)}
               key = {per.id}/>
             })}
               </div>
          )
     }
}
export default persons;