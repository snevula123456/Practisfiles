import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'


import Navbar from './Components/Navbar/Navbar';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Home from './Components/Home/Home';


import './App.css';

function App() {

  return (
    
    <BrowserRouter>
      <Navbar />
      <Route path = "/" exact><Home /></Route>
      <Switch>
      <Route path = "/login" exact><Login /></Route>
        <Route path = "/signup" exact><Signup /></Route>
        
      </Switch>
      {/* <Route path = "/:id"><Login/></Route> */}
    </BrowserRouter> 
  );
}

export default App;


