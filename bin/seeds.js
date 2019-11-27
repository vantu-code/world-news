const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/mongoose-movies-development');

const User = require('../models/User');
const Favorite = require('../models/Favorite');
const Query = require('../models/Query');

const users = [
  {username : "Sam", password : "123"},
  {username : "David", password : "123"},
  {username : "Sean", password : "123"},
  {username : "Chloe", password : "123"},
  {username : "Anna", password : "123"},
  {username : "Rita", password : "123"},
  {username : "Angela", password : "123"}
]

const favorites = [
  {title : "Samsung’s new Galaxy Book Flex and Ion laptops look as good as their spec sheets"},
  {title : "These Devices Will Lose Netflix Support on December 1"},
  {title : "You Can Now Install Windows 10 on Your 16-Inch MacBook Pro"},
  {title : "iFixit pulls apart the 16-inch MacBook Pro and sees little has changed"},
  {title : "A MacBook Keyboard Fix, Best Buy's Smart Home Mess, and More News From Today"},
  {title : "Get an Apple MacBook Air for under £800 before Black Friday"},
  {title : "Email app Spark receives update with new design"},
  {title : "Tesla Cybertruck first ride: inside Elon Musk’s electric pickup truck"}
];
const queries = [
  {query : "show"},
  {query : "show"},
  {query : "new york"},
  {query : "show"},
  {query : "show"},
  {query : "show"},
  {query : "show"},
  {query : "show"},
  {query : "family"},
  {query : "samsung"},
  {query : "samsung"},
  {query : "samsung"},
  {query : "samsung"},
  {query : "story"},
  {query : "samsung"},
  {query : "story"},
  {query : "new york"},
  {query : "new york"},
  {query : "new york"},
  {query : "new york"},
  {query : "snowboard"},
  {query : "new york"},
  {query : "kitesurf"},
  {query : "music"},
  {query : "kitesurf"},
  {query : "kitesurf"},
  {query : "kitesurf"},
  {query : "snowboard"},
  {query : "snowboard"},
  {query : "snowboard"},
  {query : "snowboard"}
];


mongoose
  .connect('mongodb://localhost:27017/world-news', { useNewUrlParser: true })
  .then(() => {
    return Query.create(queries);
  })
  .then((insertedQueries) => {
    console.log('Inserted queries:', insertedQueries.length);
    return Favorite.create(favorites);
  })
  .then(insertedFavorites => {
    console.log('Inserted favorites:', insertedFavorites.length);
    return User.create(users);
  })
  .then(insertedUsers => {
    console.log('Inserted users:', insertedUsers.length);
    mongoose.connection.close();
  })
  .catch(err => console.log(err));