import React, { Component } from "react";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import axios from "axios";

class Fullpost extends Component {
  state = {
    loadedpost: [],
  };
  componentDidUpdate() {
    // console.log(this.props.id);
    console.log("single post is started");
    if (this.props.id) {
      if (this.props.id !== this.state.loadedpost.id) {
        axios
          .get("https://jsonplaceholder.typicode.com/posts/" + this.props.id)
          .then((res) => {
            this.setState({ loadedpost: res.data });
          })
          .catch((err) => console.log(err));
      }
    }
  }

  deleteHandler = () => {
    console.log("delete handler is starting");
    axios
      .delete("https://jsonplaceholder.typicode.com/posts/" + this.props.id)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  render() {
    let po = <h2>Please select the post..!</h2>;

    if (this.state.loadedpost.id) {
      po = (
        <Card onClick={this.state.loadedpost.single}>
          <CardContent>
            <Typography>{this.state.loadedpost.userId}</Typography>
            <Typography>{this.state.loadedpost.id}</Typography>
            <Typography>{this.state.loadedpost.title}</Typography>
            <Typography>{this.state.loadedpost.body}</Typography>
            <Typography>{this.state.loadedpost.autor}</Typography>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              color="secondary"
              size="small"
              onClick={this.deleteHandler}
            >
              DELETE
            </Button>
          </CardActions>
        </Card>
      );
    }



    return po;
  }
}

export default Fullpost;
