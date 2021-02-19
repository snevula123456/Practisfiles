import React from "react";

import "./Post.css";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const Post = (props) => {
  return (
    <Card onClick={props.single}>
      <CardContent>
        <Typography>{props.userId}</Typography>
        <Typography>{props.id}</Typography>
        <Typography>{props.title}</Typography>
        <Typography>{props.body}</Typography>
        <Typography>{props.autor}</Typography>
      </CardContent>
      <CardActions>
        {/* <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={props.deleteHandler}
        >
          Delete
        </Button> */}
      </CardActions>
    </Card>

    // <div className="post" onClick={props.single}>
    //   <p>{props.userId}</p>
    //   <p>{props.id}</p>
    //   <p>{props.title}</p>
    //   <p>{props.body}</p>
    //   <p>{props.author}</p>
    // </div>
  );
};

export default Post;
