const Movie = require("../Models/movieModel");

exports.getMovies = async (req, res) => {
  console.log(req.query);

  try {
    // PAGINATION //
    const { page = 1, limit = 5, sort } = req.query;
    // Page 1: 1-10 Page 2: 11-20 Page 3: 21-30
    const skip = (+page - 1) * limit;

    // find().skip().limit()
    const movies = await Movie.find().sort(sort).skip(skip).limit(limit);

    res
      .status(200)
      .json({ status: "success", count: movies.length, data: { movies } });
  } catch (err) {
    res.status(404).json({ status: "fail", message: err.message });
  }
};

exports.getMovie = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    res.status(200).json({ status: "success", data: { movie } });
  } catch (err) {
    res.status(404).json({ status: "fail", message: err.message });
  }
};

exports.createMovie = async (req, res) => {
  try {
    const movie = await Movie.create(req.body);
    res.status(201).json({ status: "success", data: { movie } });
  } catch (error) {
    res.status(400).json({ status: "fail", message: error.message });
  }
};

exports.updateMovie = (req, res) => {};
exports.deleteMovie = (req, res) => {};
