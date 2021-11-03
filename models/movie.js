const mongoose = require('mongoose');
const validator = require('validator');
// разобраться с типом owner

const movieSchema = new mongoose.Schema({
  country: {
    type: String,
    required: true,
    minlenght: 3,
  },
  director: {
    type: String,
    required: true,
    minlenght: 2,
  },
  duration: {
    type: Number,
    required: true,
    minlenght: 2,
  },
  year: {
    type: String,
    required: true,
    minlenght: 4,
  },
  description: {
    type: String,
    required: true,
    maxlenght: 200,
  },
  image: {
    type: String,
    required: true,
    validate: {
      validator(url) {
        return validator.isURL(url);
      },
    },
  },
  trailer: {
    type: String,
    required: true,
    validate: {
      validator(url) {
        return validator.isURL(url);
      },
    },
  },
  thumbnail: {
    type: String,
    required: true,
    validate: {
      validator(url) {
        return validator.isURL(url);
      },
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'user',
  },
  movieId: {
    type: Number,
    required: true,
  },
  nameRU: {
    type: String,
    required: true,
    validate: {
      validator: (value) => /[-а-яА-Я0-9@:%._\\+~#=]{1,80}/.test(value),
      message: 'Название фильма на русском языке должно содержать только русские буквы, цифры, спецсимволы',
    },
  },
  nameEN: {
    type: String,
    required: true,
    validate: {
      validator: (value) => /[-a-zA-Z0-9@:%._\\+~#=]{1,80}/.test(value),
      message: 'The title of the film in English must contain only English letters, numbers, special characters',
    },
  },
});

module.exports = mongoose.model('movie', movieSchema);
