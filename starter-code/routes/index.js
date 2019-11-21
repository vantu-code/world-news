var express = require('express');
var router = express.Router();

const authRouter = require('./auth');
const loginRouter = require('./login');
const logoutRouter = require('./logout');
const signupRouter = require('./signup');

const articleRouter = require('./article');
const favoritesRouter = require('./favorites');
const profileRouter = require('./profile');

// *  '/auth'
router.use('/auth', authRouter);

// *  '/login'
router.use('/login', loginRouter);

// *  '/logout'
router.use('/logout', logoutRouter);

// *  '/signup'
router.use('/signup', signupRouter);

// *  '/article'
router.use('/article', articleRouter);

// *  '/favorites'
router.use('/favorites', favoritesRouter);

// *  '/profile'
router.use('/profile', profileRouter);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Auth Demo' });
});

module.exports = router;