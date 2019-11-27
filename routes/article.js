var express = require('express');
var router = express.Router();




// GET '/login'
router.post('/', (req, res, next) => {
  // console.log("req article", req.body.article);
  const user = req.session.currentUser;
  res.render('article', {article: req.body, user: user});
});


module.exports = router;
