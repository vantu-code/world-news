var express = require('express');
var router = express.Router();


// GET '/login'
router.get('/:userId', (req, res, next) => {
  res.render('favorites');
});

module.exports = router;