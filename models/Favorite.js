const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favoriteSchema = new Schema({
    title: string,
    author: string,
    image: string,
    content: string
});

const Favorite = mongoose.model('Favorite', favoriteSchema);

module.exports = Favorite;
