const router = require('express').Router();
const { validateUserInfo } = require('../middlewares/validation');
const { changeMyUser, getMyUser } = require('../controllers/users');

router.get('/me', getMyUser);
router.patch('/me', validateUserInfo, changeMyUser);

module.exports = router;
