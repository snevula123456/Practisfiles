const express = require("express");

const bodyParser = require("body-parser");

const mongoose = require("mongoose");

const app = express();

const URL = `mongodb+srv://Shyam:256BXsnEd450Y8wX@cluster.fkuf5.mongodb.net/Products_test?retryWrites=true&w=majority`;
app.use(bodyParser.json());

const Placeroutes = require("./routes/place-holder");

const port = 5000;

app.use("/api/places", Placeroutes);

mongoose
  .connect(URL, { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to database");
    app.listen(port, () => {
      console.log(`Server is serving at port ${port}`);
    });
  })
  .catch((err) => {
    console.log({
      message: `Could not connect to datanase and error is ${err}`,
    });
  });
