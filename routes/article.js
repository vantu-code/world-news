var express = require('express');
var router = express.Router();


// GET '/login'
router.get('/:articleId', (req, res, next) => {
  res.render('article');
});

module.exports = router;
