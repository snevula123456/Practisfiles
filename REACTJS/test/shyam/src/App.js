import React, {Component} from  'react';
// import Person from './Components/Person/Person';
import './App.css'
// import person from './Components/Person/Person';
import Persons from './Components/Persons/Persons';
import Cockpit from './Components/Cockpit/Cockpit'


class App extends Component {

  constructor(props){
    super(props);
    console.log('[app.js] constructor is running');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[getDerivedState]', props);
    return state;
  }

  // static getDerivedStateFromProps(props, state) {
  //   console.log("getDerivedStateFromProps called here");
  //   return null;
  // }

  shouldComponentUpdate(nextprops, nextstate){
    console.log('[app.js] component Update');
    return true;
  }
  
  componentDidUpdate(previousprops, previousstate){
    console.log('[app.js] componentdid update is working');
  }

  componentDidMount(){
    console.log('[App.js] Component DidMount');
  }
  state = {
    Persons : [
    {"id" : "adadad" , "name" : "Shyam", "age" : 20},
    {"id" : "aaaaaa" , "name" : "prems", "age" : 10},
    {"id" : "trueadadashdfiawhroiad" , "name" : "test", "age" : 15},
    ],
    Showtext : false
  }

 ToggleHandler = () => {
   const doesshow = this.state.Showtext;
   this.setState({
    Showtext : !doesshow
   })
 }      

 deletehandler = (personindex) => {
  console.log(personindex);
  const persons = [...this.state.Persons];

  persons.splice(personindex , 1);
  this.setState({
    Persons : persons
  })
 }

 nameChangeHandler = (event) => {
  this.setState({
    Persons : [
      {"id" : "adadad" , "name" : event.target.value, "age" : 20},
      {"id" : "aaaaaa" , "name" : "prems", "age" : 10},
      {"id" : "trueadadashdfiawhroiad" , "name" : "test", "age" : 15},
      ],
  })
 }
  render(){
    console.log('[App.js] render is working');

    let Presonss = null;

    if(this.state.Showtext) {
      Presonss = (
         <Persons persons = {this.state.Persons}
         delete = {this.deletehandler}
         changed = {this.nameChangeHandler}/>
      )
     
    }
    return(
      <div>
        <Cockpit
        title = {this.props.appTitle}
        persons = {this.state.Persons} 
        handler = {this.ToggleHandler}/>
        {Presonss}
      </div>
      
    )  
  }
}
export default App;