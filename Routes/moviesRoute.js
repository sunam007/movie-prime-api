const express = require("express");
const movieController = require("../Controller/movieController");
const router = express.Router();

router
  .route("/")
  .get(movieController.getMovies)
  .post(movieController.createMovie);

router
  .route("/:id")
  .get(movieController.getMovie)
  .patch(movieController.updateMovie)
  .delete(movieController.deleteMovie);

module.exports = router;
