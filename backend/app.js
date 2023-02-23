
const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/movie-route");
const cors = require("cors");
const app = express();


app.use(express.json());
app.use(cors());
app.use("/movies", router); 

mongoose
  .connect(
    "mongodb://localhost:27017/moviedb"
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));

