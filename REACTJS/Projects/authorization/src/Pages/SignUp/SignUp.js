import React, { useEffect, useState } from "react";

import firebase from "firebase";
import auth from "../../config/config";
import Input from "../../components/input";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

import "./SignUp.css";
import { setNestedObjectValues } from "formik";
const SignUp = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [FullName, setFullName] = useState("");
  const [Error, setError] = useState(false);
  const [userLogin, setUserLogin] = useState(false);
  const [EmailValidation, setEmailValidation] = useState(false);
  const [PasswordValidation, setPasswordValidation] = useState(false);
  const [FullNameValidation, setFullNameValidation] = useState(false);

  const onChangeValidator = () => {
    if (FullName === "") {
      setFullNameValidation(true);
      console.log("Name is checking");
    } else {
      setFullNameValidation(false);
    }
    const email = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    if (!Email.match(email)) {
      console.log("if condition is working");
      setEmailValidation(true);
    } else {
      setEmailValidation(false);
    }
    if (Password === "") {
      setPasswordValidation(true);
    } else {
      setPasswordValidation(false);
    }
  };

  const onSubmitHandler = () => {
    console.log("On Submit handler is working");
    console.log(Email);
    firebase
      .auth()
      .createUserWithEmailAndPassword(Email, Password)
      .then((data) => {
        const user = data.user;
        console.log(user);
        setUserLogin(true);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  };

  useEffect(() => {
    console.log("Use Effect");
    return () => {
      setEmail("");
      setPassword("");
      setFullName("");
      console.log("UseEffect return is working");
    };
  }, [userLogin]);

  return (
    <Card className="SignUp">
      <CardActionArea>
        <CardContent>
          <h2>WELCOME</h2>
          <form>
            <Input
              type="FullName"
              labelName="FullName"
              val={FullName}
              validation={FullNameValidation}
              bl={onChangeValidator}
              changes={(event) => setFullName(event.target.value)}
            />
            <Input
              type="text"
              labelName="Email"
              val={Email}
              bl={onChangeValidator}
              validation={EmailValidation}
              changes={(event) => setEmail(event.target.value)}
            />
            <Input
              type="password"
              labelName="Password"
              val={Password}
              validation={PasswordValidation}
              bl={onChangeValidator}
              changes={(event) => setPassword(event.target.value)}
            />
          </form>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="contained" color="primary" onClick={onSubmitHandler}>
          SignUp
        </Button>
      </CardActions>
      {Error === true ? <h2>Not able to SignUp</h2> : null}
      {userLogin === true ? <h2>Sucessfully SignUp</h2> : null}
    </Card>
  );
};

export default SignUp;
