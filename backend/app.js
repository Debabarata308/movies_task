const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");

const movies = require("./controller/movies.controller");

app.use(bodyParser.json());

app.use(cors({ origin: true }));

app.use(express.json());

app.use("/movies", movies);

app.listen(3001, () => {
  console.log("Server started on 3001 port.");
});
