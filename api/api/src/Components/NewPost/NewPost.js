import React, { useState, useEffect } from "react";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "./NewPost.css";

import axios from "axios";

const Newpost = (props) => {
  const [initialstate, updatedstate] = useState({
    title: null,
    body: null,
    author: null,
  });

  // const [clean, setclean] = useState({});

  // useEffect(() => {
  //   console.log("testing use ");
  //   return () => {
  //     updatedstate({});
  //   };
  // }, [clean]);

  const newPostSubmit = () => {
    console.log("testing");

    const data = {
      title: initialstate.title,
      body: initialstate.body,
      author: initialstate.author,
    };

    axios
      .post("https://jsonplaceholder.typicode.com/comments", data)
      .then((res) => {
        console.log(res.data);
      });
    console.log(data);
    console.log("updated state");
    updatedstate({
      title: null,
      body: null,
      author: null,
    });
  };

  return (
    <form className="NewPost">
      <h2>Plese fill the Details to Post </h2>
      <TextField
        label="Title"
        style={{ width: 100 }}
        onChange={(event) =>
          updatedstate({
            ...initialstate,
            title: event.target.value,
          })
        }
      />
      <br />
      <TextField
        label="Body"
        onChange={(event) =>
          updatedstate({
            ...initialstate,
            body: event.target.value,
          })
        }
      />
      <br />
      <TextField
        label="Author"
        onChange={(event) =>
          updatedstate({
            ...initialstate,
            author: event.target.value,
          })
        }
      />
      <br />

      <Button
        style={{ marginTop: "10px" }}
        variant="contained"
        onClick={newPostSubmit}
      >
        Submit
      </Button>
    </form>
  );
};

export default Newpost;
