const express = require('express');
const helmet = require('helmet');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');
const errorsHandler = require('./middlewares/mainErrorsHandler');
const limiter = require('./middlewares/rateLimiter');
const {
  requestLogger,
  errorLogger,
} = require('./middlewares/logger');

dotenv.config();
const {
  NODE_ENV,
  PORT = 3001,
  DB_URL,
} = process.env;

const app = express();
app.use(helmet());

mongoose.connect(NODE_ENV === 'production' ? DB_URL : 'mongodb://localhost:27017/moviesdb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use(cors({
  origin: NODE_ENV === 'production' ? 'https://korotkov.movies.nomoredomains.work' : 'http://localhost:3000',
  credentials: true,
}));

app.use(express.json());
app.use(requestLogger);

app.use(limiter);
app.use(routes);

app.use(errorLogger);
app.use(errors());
app.use(errorsHandler);

app.listen(PORT);
