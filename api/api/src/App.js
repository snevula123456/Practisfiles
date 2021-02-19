import React, { Component } from "react";

import Post from "./Components/post/Post";
import Fullpost from "./Components/Fullpost/FullPost";
import NewPost from "./Components/NewPost/NewPost";

import Grid from "@material-ui/core/Grid";
import "./App.css";

import axios from "axios";

class App extends Component {
  state = {
    posts: [],
    showstatus: true,
    singlepostid: null,
  };
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        const page = res.data.slice(0, 4);
        const postss = page.filter((d) => d.userId === 1);
        console.log(postss);
        const updatedpost = postss.map((post) => {
          return {
            ...post,
            author: "shyam",
          };
        });
        this.setState({ posts: updatedpost });
      })

      .catch((err) => {
        console.log(err);
      });
  }

  singlepost = (id) => {
    this.setState({ singlepostid: id });
  };

  render() {
    let dy = [];
    if (this.state.showstatus) {
      dy.push("red");
    }
    if (this.state.showstatus) {
      dy.push("weight");
    } else {
      dy.slice("red");
      dy.push("yellow");
    }
    const style = {
      backgroundColor: "red",
    };

    let output = this.state.posts.map((post) => {
      return (
        <Grid item xs={6} key={post.id}>
          <Grid container justify="center">
            <Post
              userId={post.userId}
              title={post.title}
              key={post.id}
              id={post.id}
              body={post.body}
              author={post.author}
              single={() => this.singlepost(post.id)}
              deleteHandler={() => this.deleteHandler(post.id)}
            />
          </Grid>
        </Grid>
      );
    });

    return (
      <div>
        <h2 style={style}>Welcome to the React Again</h2>
        <h2 className={dy.join(" ")}>Welcome to the React Again</h2>
        <h3>Something is better than nothing</h3>
        <h3>Something is better than nothing</h3>
        <Grid container spacing={2}>
          {output}
        </Grid>

        <Fullpost id={this.state.singlepostid} />

        <NewPost />
      </div>
    );
  }
}

export default App;
