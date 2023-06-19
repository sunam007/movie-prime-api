const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const movieRouter = require("./Routes/moviesRoute");

const app = express();

// Middle-Wares //
app.use(express.json());
app.use("/api/movies", movieRouter);

module.exports = app;
