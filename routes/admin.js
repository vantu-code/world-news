var express = require('express');
var router = express.Router();

const User = require('./../models/User');
const Favorite = require('./../models/Favorite');
const Query = require('./../models/Query');

const articleRouter = require('./article');
const favoritesRouter = require('./favorites');
const profileRouter = require('./profile');


var queryArray = [];
var favoriteArray = [];


router.get('/', (req, res, next) => {
  // console.log("user", req.session.currentUser);
  const userName = req.session.currentUser.username;
  if (userName == "Admin"){
  Query.find()
  .then((queries) => {
    console.log("queries" ,queries);
    var array = [...queries]
    var objArray = [];
for (let i = 0; i < array.length; i++){
  count = 1
for (let j = i+1; j< array.length; j++){
  if (array[i].query == array[j].query){
    count++
    array.splice(j,1)
    j--
  }}
  objArray.push({
      query: array[i].query,
      numberOfTimes: count
    })
    array.splice(i,1)
}
objArray.sort((a, b) => (a.numberOfTimes > b.numberOfTimes) ? -1 : 1)
objArray.splice(8)
    Favorite.find()
    .then((favorites)=>{
      User.find()
      .then((users)=>{
    res.render('admin', {queries: objArray, favorites: favorites, users: users});    
  })})
  }).catch((err) => {
    console.log(err);
  });
}
else {
  res.redirect('/home');
}
});

function userDataQuery(actualQuery, userData){
  queryArray.push(actualQuery.query)
  if (queryArray.length == userData.queries.length){

    return queryArray;
  }
}

function userDataFavorite(actualFAvorite, userData){
  favoriteArray.push(actualFAvorite)
  if (favoriteArray.length == userData.favorites.length){
    //console.log("favorties", favoritesArray[0]);
    return favoriteArray;
  }
}


router.post('/userdata/:username',(req,res,next)=>{
  queryArray = [];
  fullQueryArray = [];
  favoriteArray = [];
  fullFavoriteArray = [];
  const userId = req.body.id
  User.findById(userId)
  .then((userData) => {
    userData.queries.forEach((queryId)=>{
      Query.findById(queryId)
      .then((actualQuery) => {
      fullQueryArray = userDataQuery(actualQuery, userData)
      if(fullQueryArray){
      var array = [...fullQueryArray]
      var objArray = [];
  for (let i = 0; i < array.length; i++){
    count = 1
  for (let j = i+1; j< array.length; j++){
    if (array[i] == array[j]){
      count++
      array.splice(j,1)
      j--
    }}
    objArray.push({
        query: array[i],
        numberOfTimes: count
      })
      array.splice(i,1)
  }
  objArray.sort((a, b) => (a.numberOfTimes > b.numberOfTimes) ? -1 : 1)
  objArray.splice(8)
  userData.favorites.forEach((favoriteId)=>{
  Favorite.findById(favoriteId)
  .then((actualFavorite)=>{
    fullFavoriteArray = userDataFavorite(actualFavorite, userData)
    if(fullFavoriteArray){
    res.render('userData', {queries: objArray, user:userData, favorites:fullFavoriteArray});
    }
  })
})
  }
    })
      })
    }).catch((err) => {
    console.log(err);
    });
  })
  
module.exports = router;

