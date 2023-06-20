const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const movieRouter = require("./Routes/moviesRoute");
const CustomError = require("./Utils/CustomError");

const app = express();

// Middle-Wares //
app.use(express.json());
app.use("/api/movies", movieRouter);
app.all("*", (req, res, next) => {
  //   res.status(404).json({
  //     status: "fail",
  //     message: `Cant find ${req.originalUrl} on the server.`,
  //   });
  const err = new CustomError(
    `Cant find ${req.originalUrl} on the server.`,
    404
  );
  next(err);
});

// Global Erro Handling Middleware
app.use((error, req, res, next) => {
  error.statusCode = error.statusCode || 500;
  error.status = error.status || "error";

  res.status(error.statusCode).json({
    status: error.status,
    message: error.message,
  });
});

module.exports = app;
