import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Button } from "react-bootstrap";
// import 'react-bootstrap'
import Clasess from "./App.css";

class App extends Component {
  componentDidMount() {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => console.log(res))
      .then((err) => console.log(err));
  }
  render() {
    return (
      <div className={Clasess.Container}>
        <h2> Welcome to the practise of reactjs</h2>
      </div>
    );
  }
}
export default App;
