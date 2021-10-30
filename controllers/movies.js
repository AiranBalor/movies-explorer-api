const Movie = require('../models/movie');
const NotFoundError = require('../errors/NotFoundError');
const ValidationError = require('../errors/ValidationError');
const ForbiddenError = require('../errors/ForbiddenError');

const getMovies = (req, res, next) => {
  const owner = req.user._id;
  Movie.find({ owner })
    .select('-owner')
    .then((movies) => res.status(200)
      .send(movies))
    .catch(next);
};

const createMovie = (req, res, next) => {
  const {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailer,
    nameRU,
    nameEN,
    thumbnail,
    movieId,
  } = req.body;

  Movie.create({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailer,
    nameRU,
    nameEN,
    thumbnail,
    movieId,
    owner: req.user._id,
  })
    .then((movie) => res.status(200)
      .send({
        _id: movie._id,
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: movie.image,
        trailer: movie.trailer,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
        thumbnail: movie.thumbnail,
        movieId: movie.movieId,
      }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        throw new ValidationError(err.message);
      } else {
        next(err);
      }
    })
    .catch(next);
};

const deleteMovie = (req, res, next) => {
  const userId = req.user._id;
  Movie.findById(req.params.movieId)
    .select('+owner')
    .orFail(() => {
      throw new NotFoundError('Указанный фильм не найден');
    })
    .then((movie) => {
      if (movie.owner.toString() !== userId) {
        throw new ForbiddenError('Вы не можете удалить чужой фильм');
      }
      return Movie.findByIdAndDelete(req.params.movieId)
        .select('-owner')
        .then((data) => res.status(200)
          .send(data))
        .catch(next);
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        console.log(err);
        throw new ValidationError('Передан некорректный id');
      } else {
        next(err);
      }
    })
    .catch(next);
};

module.exports = {
  getMovies,
  createMovie,
  deleteMovie,
};
