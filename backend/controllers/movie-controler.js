
const Movie = require("../model/Movie");

const getAllMovies= async (req, res, next) => {
  let movies;
  try {
    movies = await Movie.find();
  } catch (err) {
    console.log(err);
  }

  if (!movies) {
    return res.status(404).json({ message: "No movie found" });
  }
  return res.status(200).json({ movies });
};

const getById = async (req, res, next) => {
  const id = req.params.id;
  let movie;
  try {
    movie = await Movie.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!movie) {
    return res.status(404).json({ message: "No movie found" });
  }
  return res.status(200).json({ movie });
};

const addMovie = async (req, res, next) => {
  const { name, year, rating, duration, gener, director, about,streaming_in,image_url} = req.body;
  let movie;
  try {
    movie = new Movie({
      name,
      year,
      rating,
      duration,
      gener,
      director,
      about,
      streaming_in,
      image_url
    });
    await movie.save();
  } catch (err) {
    console.log(err);
  }

  if (!movie) {
    return res.status(500).json({ message: "Unable To Add" });
  }
  return res.status(201).json({ movie });
};

const updateMovie = async (req, res, next) => {
  const id = req.params.id;
  const { name, year, rating, duration, gener, director, about,streaming_in,image_url} = req.body;  let movie;
  try {
    movie = await Movie.findByIdAndUpdate(id, {
        name,
        year,
        rating,
        duration,
        gener,
        director,
        about,
        streaming_in,
        image_url
    });
    movie = await movie.save();
  } catch (err) {
    console.log(err);
  }
  if (!movie) {
    return res.status(404).json({ message: "Unable To Update By this ID" });
  }
  return res.status(200).json({ movie });
};

const deleteMovie = async (req, res, next) => {
  const id = req.params.id;
  let movie;
  try {
    movie = await Movie.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }
  if (!movie) {
    return res.status(404).json({ message: "Unable To Delete By this ID" });
  }
  return res.status(200).json({ message: "Product Successfully Deleted" });
};

exports.getAllMovies = getAllMovies;
exports.addMovie = addMovie;
exports.getById = getById;
exports.updateMovie = updateMovie;
exports.deleteMovie = deleteMovie;
