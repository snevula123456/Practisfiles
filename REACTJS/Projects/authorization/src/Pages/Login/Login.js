import React, { useState, useEffect } from "react";
import { Redirect, Route, Link } from "react-router-dom";

import firebase from "firebase";
import auth from "../../config/config";

import Input from "../../components/input";
import Home from "../Home/Home";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import "./Login.css";

const Login = (props) => {
  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();
  const [user, setuser] = useState();
  const [Error, setError] = useState(false);
  const [userLogin, setUserLogin] = useState(false);

  

  const onSubmitHandler = () => {
    console.log("On Submit handler is working");
    firebase
      .auth()
      .signInWithEmailAndPassword(Email, Password)
      .then((data) => {
        const user = data.user;
        console.log(user);
        setuser(user);
        setUserLogin(true);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  };

  useEffect(() => {
    if (userLogin) {
      props.history.push({ pathname: "/Home", user });
    }
  }, [userLogin]);

  return (
    <Card className="Login">
      <CardActionArea>
        <CardContent>
          <h2>WELCOME</h2>
          <form>
            <Input
              type="text"
              labelName="Email"
              changes={(event) => setEmail(event.target.value)}
            />
            <Input
              type="password"
              labelName="Password"
              changes={(event) => setPassword(event.target.value)}
            />
          </form>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="contained" color="primary" onClick={onSubmitHandler}>
          Login
        </Button>
      </CardActions>
      {Error === true ? (
        <h2>Not able to Login Plese Check the Credientials </h2>
      ) : null}
      {userLogin === true ? <h2>Sucessfully able to Login </h2> : null}
    </Card>
  );
};

export default Login;
