const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
  username: String,
  password: String,
  favorites: [],
  queries: []
});

const User = mongoose.model('User', userSchema);

module.exports = User;
// {type: Schema.Types.ObjectId, ref:'Favorite'}