var express = require('express');
var router = express.Router();

const User = require('./../models/User');
const Favorite = require('./../models/Favorite');

const articleRouter = require('./article');
const favoritesRouter = require('./favorites');
const profileRouter = require('./profile');


const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('d79e3bc5963748c0a667349902211304');




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
  //console.log("req", req.body.search);
  var articleSearch = req.body.search;
  
  newsapi.v2.everything({
    q: (articleSearch),
    sortBy: 'relevancy',
  }).then(response => {
    //console.log("api res DE", response.articles[0]);
    /*
      {
        status: "ok",
        articles: [...]
      }
    */
   res.render("home", {articles: response.articles})
  }); 
  
});


router.post("/home/add-to-favorite", (req, res, next) => {
  console.log("favorite", req.body);
  
  var title = req.body.title;
  var author = req.body.author;
  var image = req.body.image;
  var content = req.body.content;
  var url = req.body.url;

  Favorite.create ({
    title,
    author,
    image,
    content,
    url
  })
  .then((result) => {
  
    const articleId = result._id;
    const {_id} = req.session.currentUser;
    User.findOneAndUpdate(_id)
    .then((user) => {
      user.favorites.push(articleId);
      user.save();
      console.log("user from user", user)
    }).catch((err) => {
      
    });
  }).catch((err) => {
    console.log(err)
  });
  // console.log("let's see", newArticle);
  
  // res.render("home");
})



// *  '/article'
router.use('/article', articleRouter);

// *  '/favorites'
router.use('/favorites', favoritesRouter);

// *  '/profile'
router.use('/profile', profileRouter);


module.exports = router;