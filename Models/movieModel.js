const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: [true, "Name is a required field"],
    trim: true,
  },
  description: String,
  duration: { type: Number, required: [true, "Duration is a required field"] },
  ratings: { type: Number },
  totalRatings: { type: Number },
  releaseYear: {
    type: Number,
    required: [true, "Release year is a required field"],
  },
  releaseDate: { type: Date },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  genres: {
    type: [String],
    required: [true, "Genres is a required field"],
  },
  directors: {
    type: [String],
    required: [true, "Directors is a required field"],
  },
  coverImage: {
    type: String,
    required: [true, "Cover Image url is a required field"],
  },
  actors: {
    type: [String],
    required: [true, "Actors is a required field"],
  },
  price: {
    type: Number,
    required: [true, "Price is a required field"],
  },
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
