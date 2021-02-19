import React, { useState } from "react";

import firebase from "../../config/config";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const Home = (props) => {
  const [signedUser, setSignedUser] = useState(props.location.user);

  const [currUser, setcurrUser] = useState(null);
  // console.log(signedUser);
  // console.log(props.location.user.email);

  firebase.auth().onAuthStateChanged(function (currentlySignedUser) {
    if (currentlySignedUser) {
      console.log(currentlySignedUser);
      setcurrUser(currentlySignedUser);
    } else {
      console.log("No User is Signed");
    }
  });

  const signOutHandler = () => {
    const user = firebase.auth().currentUser;
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("then is working  " + user.email);
        props.history.push({ pathname: "/Login" });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      {currUser !== null ? (
        <h2>{currUser.email}</h2>
      ) : (
        <h2>No User is Signed </h2>
      )}

      <button onClick={signOutHandler}>SignOut</button>
    </div>
  );
};

export default Home;
