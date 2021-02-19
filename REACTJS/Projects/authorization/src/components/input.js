import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import "./input.css";

const Input = (props) => {
  return (
    <div className={`Input ${props.className}`}>
      <TextField
        type={props.type}
        label={props.labelName}
        value={props.val}
        onBlur={props.bl}
        onChange={props.changes}
      />
      {props.validation ? <p>Please Enter Valid {props.labelName}</p> : null}
    </div>
  );
};

export default Input;
