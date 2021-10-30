const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 5000,
  message: 'Слишком много запросов к серверу, пожалуйста, подождите 15 минут',
});

module.exports = limiter;
