import React from "react";
import { BrowserRouter } from "react-router-dom";

import Blog from "./containers/Blog";

import "./App.css";

function App() {
  return (
    <BrowserRouter className="App">
      <Blog />
    </BrowserRouter>
  );
}

export default App;
