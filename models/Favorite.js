const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favoriteSchema = new Schema({
    title: String,
    author: String,
    image: String,
    content: String,
    url: String,
    source: String
});

const Favorite = mongoose.model('Favorite', favoriteSchema);

module.exports = Favorite;
