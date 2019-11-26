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

router.post('/edit', (req, res, next) => {
  const {_id} = req.session.currentUser;
  var userFromForm = req.body.username;
  var emailFromForm = req.body.email;
  var catchPheaseFromForm = req.body.catchPhrase;
console.log("reqqqqqq", req.body);

  User.findById(_id)
  .then((user) => {
    user.username = userFromForm;
    user.email = emailFromForm;
    user.catchPhrase = catchPheaseFromForm;
    console.log("user", user);
    user.save()
    res.redirect("/profile")
  }).catch((err) => {
    console.log(err);
  });
});

module.exports = router;