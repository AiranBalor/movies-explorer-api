const router = require('express').Router();
const usersRouter = require('./users');
const moviesRouter = require('./movies');
const auth = require('../middlewares/auth');
const { login, createUser } = require('../controllers/users');
const { validateSignUp, validateSignIn } = require('../middlewares/validation');
const NotFoundError = require('../errors/NotFoundError');

router.post('/api/signin', validateSignIn, login);
router.post('/api/signup', validateSignUp, createUser);

router.use(auth);

router.use('/api/users', usersRouter);
router.use('/api/movies', moviesRouter);

router.all('*', () => {
  throw new NotFoundError('Указанной страницы не существует');
});

module.exports = router;
