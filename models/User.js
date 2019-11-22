const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
  username: String,
  password: String,
  favorites: [{type: Schema.Types.ObjectId, ref:'Favorite'}]
});

const User = mongoose.model('User', userSchema);

module.exports = User;
