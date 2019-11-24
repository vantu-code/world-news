var express = require('express');
var router = express.Router();

const User = require('./../models/User');
const Favorite = require('./../models/Favorite');
const Query = require('./../models/Query');

const articleRouter = require('./article');
const favoritesRouter = require('./favorites');
const profileRouter = require('./profile');

router.get('/', (req, res, next) => {
  // console.log("user", req.session.currentUser);
  const userName = req.session.currentUser.username;
  if (userName == "Admin"){
  Query.find()
  .then((queries) => {
    res.render('admin', {queries: queries});
  }).catch((err) => {
    
  });
}
else {
  res.redirect('/home');
}
});

module.exports = router;