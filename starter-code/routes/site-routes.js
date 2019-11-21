var express = require('express');
var router = express.Router();

const articleRouter = require('./article');
const favoritesRouter = require('./favorites');
const profileRouter = require('./profile');




// PRE ROUTE MIDDLEWARE - check if user has authenticated cookie

router.use((req, res, next) => {
  if (req.session.currentUser) { // <== if there's user in the session (user is logged in)
    next(); // ==> go to the next route ---
  } 																//		|
  else {                          	//    |
  	res.redirect("/login");       	//    |
  }                                 //    |
});																	//		|
// 		 ------------------------------------  
//     | 
//     V

router.get("/home", (req, res, next) => {

  res.render("home");
});

router.post("/home", (req, res, next) => {

  newsapi.v2.everything({
    q: (req.query)
  }).then(response => {
    console.log("api res DE", response);
    /*
      {
        status: "ok",
        articles: [...]
      }
    */
  }); 
  res.render("home", { articles: response});
});


// *  '/article'
router.use('/article', articleRouter);

// *  '/favorites'
router.use('/favorites', favoritesRouter);

// *  '/profile'
router.use('/profile', profileRouter);


module.exports = router;