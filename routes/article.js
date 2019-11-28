var express = require('express');
var router = express.Router();

// GET '/login'
router.post('/', (req, res, next) => {
<<<<<<< HEAD


  console.log("req article", req.body.article);
  
  res.render('article', {article: req.body});
=======
  // console.log("req article", req.body.article);
  const user = req.session.currentUser;
  res.render('article', {article: req.body, user: user});
>>>>>>> develop
});


module.exports = router;
