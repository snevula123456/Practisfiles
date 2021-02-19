import React from "react";
import { Route, NavLink } from "react-router-dom";

import Grid from "@material-ui/core/Grid";

import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";

import "./Blog.css";

const Blog = () => {
  return (
    <div className="Blog">
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/Home" exact>
                Home
              </NavLink>
              <NavLink to="/SignUp">SignUp</NavLink>
              <NavLink to="/Login">Login</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <section className="Section">
        <Grid container spacing={2} justify="center">
          <Route path="/Login" component={Login}></Route>
          <Route path="/SignUp" component={SignUp}></Route>
          <Route path="/Home" exact component={Home}></Route>
        </Grid>
      </section>
    </div>
  );
};

export default Blog;
