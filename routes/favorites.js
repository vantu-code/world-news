var express = require('express');
var router = express.Router();
var mongoose = require ('mongoose');

const User = require('./../models/User');
const Favorite = require('./../models/Favorite');

var favoritesArray = [];

// let results = []

// Promise.all(
//   ids.map((id) =>
//     getLight(id)
//     .then(light => {
//       results.push(light)
//     })
//     .catch(err => {
//       console.log(err)
//     })
//   )).then(() => console.log(results))

// function getLight(id) {
//   return new Promise((res) => {
//     setTimeout(res, 1000)
//   }).then(() => `light for id: ${id}`)
// }

function pushFavorite(favortieFromDB, user){
  favoritesArray.push({
    title: favortieFromDB.title,
    author: favortieFromDB.author,
    image: favortieFromDB.image,
    content: favortieFromDB.content,
    url: favortieFromDB.url,
    id:  favortieFromDB._id,
    source: favortieFromDB.source
    }); 
    //console.log("favooooooo", favortieFromDB);
        if (favoritesArray.length == user.favorites.length){
        //console.log("favorties", favoritesArray[0]);
        return favoritesArray;
      }
    }





router.delete('/delete/:favoriteId', (req, res ,next)=>{
  console.log("current fav", req.params.favoriteId);
  var currentFav = req.params.favoriteId;
  const {_id} = req.session.currentUser;
  User.findById(_id)
  .then((user) => {
    var filteredArr = user.favorites.filter(function(el){
      return el != currentFav;  
    })
    user.favorites = [...filteredArr]
    user.save()
    // console.log("works", user.favorites);
    // res.redirect('/favorites');
    res.status(204).send();
  })
.catch((err) => {
  console.log(err);
  
});
})



// GET '/favorites'
router.get('/', (req, res, next) => {
  favoritesArray = [];
  const {_id} = req.session.currentUser;
  User.findById(_id)
  .then((user) => {
    if(user.favorites.length){
      user.favorites.forEach((favorite)=>{
        Favorite.findById(favorite)
        .then((favortieFromDB) => {
          var fromFunc = pushFavorite(favortieFromDB, user);
          if(fromFunc){
            console.log("favorite", fromFunc)
            res.render('favorites', {favorites: fromFunc, user : user});
          }
        }).catch((err) => {
          console.log(err);
        });
      })
    } else {
      res.render('favorites')
    }
  })
  .catch((err) => {
  });
  //res.render('favorites', favoritesArray[0]);
});


module.exports = router;