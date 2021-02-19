import React, { useState } from "react";
import { Link } from "react-router-dom";

import Signup from "../Signup/Signup";
import Reduxtesting from "../redux/redux";

import {
  Button,
  Grid,
  Box,
  Paper,
  ButtonBase,
  Typography,
} from "@material-ui/core";
// import {Grid} from '@material-ui/core/Grid';

import "./Home.css";

const Home = () => {
  const [defaultstate, changedef] = useState(false);
  const Handler = () => {
    console.log("Button clicked");
    changedef(true);
  };
  let modal = "Please click on the button";
  if (defaultstate) {
    modal = <Signup />;
  }
  return (
    //     <h2>Welcome to the Home Component</h2>
    <div className="Home">
      <h1>Welcome to Own Project</h1>
      {modal}
      <br />
      <Box>
        <Button
          style={{ marginTop: "20px" }}
          variant="contained"
          color="secondary"
          onClick={Handler}
        >
          <Link to="/signup">Welocme</Link>
        </Button>
      </Box>

      <Grid
        container
        spacing={1}
        style={{ background: "grey", margin: "20px 0 0 0 " }}
      >
        <Grid item xs={12} sm={12}>
          {" "}
          Testing Grid
        </Grid>{" "}
        <br />
        <Grid
          item
          sm={6}
          xs={12}
          style={{ background: "yellow", textAlign: "center" }}
        >
          Testing Xs6
        </Grid>
        <Grid item sm={6} xs={12} style={{ background: "red" }}>
          {" "}
          Testing Grid xs6
        </Grid>{" "}
        <br />
      </Grid>
      <Paper style={{ width: "500" }}>
        <Grid container spacing={1}>
          <Grid item>
            <ButtonBase>
              <img
                style={{
                  width: 128,
                  height: 128,
                  display: "block",
                  maxWidth: "50%",
                  maxHeight: "50%",
                }}
                src="https://cdn.mos.cms.futurecdn.net/BVb3Wzn9orDR8mwVnhrSyd-1200-80.jpg"
                alt="Logo"
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs direction="column" spacing={2}>
              <Typography>Standard license</Typography>
              <Typography variant="body2" gutterBottom>
                Full resolution 1920x1080 • JPEG
              </Typography>
              <Typography variant="body2" color="textSecondary">
                ID: 1030114
              </Typography>
            </Grid>
            <Grid item>
              <Typography>$19.00</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      <Reduxtesting />
      <h2> Git Testing</h2>
    </div>
  );
};

export default Home;
