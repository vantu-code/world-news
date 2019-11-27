var express = require('express');
var router = express.Router();

const User = require('./../models/User');
const Favorite = require('./../models/Favorite');
const Query = require('./../models/Query');

const articleRouter = require('./article');
const favoritesRouter = require('./favorites');
const profileRouter = require('./profile');




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

module.exports = router;