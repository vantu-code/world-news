var express = require('express');
var router = express.Router();

// GET '/login'
router.post('/', (req, res, next) => {


  console.log("req article", req.body.article);
  
  res.render('article', {article: req.body});
});


module.exports = router;
