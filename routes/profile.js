var express = require('express');
var router = express.Router();
const User = require('./../models/User');


// GET '/login'
router.get('/', (req, res, next) => {
  const {_id} = req.session.currentUser;
  User.findById(_id)
  .then((user) => {
    res.render('profile', {user: user});
  }).catch((err) => {
    console.log(err);
  });
});

router.post('/', (req, res, next) => {
  const {_id} = req.session.currentUser;
  User.findById(_id)
  .then((user) => {
    user.queries = [];
    console.log("userrrrr favorites", user)
    user.save()
    res.status(201)
  }).catch((err) => {
    console.log(err);
  });
});


module.exports = router;