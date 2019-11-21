const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favoriteSchema = new Schema({
 articleId: string
});

const Favorite = mongoose.model('Favorite', favoriteSchema);

module.exports = Favorite;
