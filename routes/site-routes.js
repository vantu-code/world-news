var express = require('express');
var router = express.Router();




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
console.log('hola');


router.get("/home", (req, res, next) => {
  res.render("home");
});

router.post("/home", (req, res, next) => {
  console.log("req", req.body.search);
  var articleSearch = req.body.search;
  
  newsapi.v2.everything({
    //q: (articleSearch),
    domains: (articleSearch),
    // sortBy: 'relevancy',
  }).then(response => {
    console.log("api res DE", response.articles[0]);
    /*
      {
        status: "ok",
        articles: [...]
      }
    */
   res.render("home", { articles: response.articles})
  }); 
  
});



module.exports = router;