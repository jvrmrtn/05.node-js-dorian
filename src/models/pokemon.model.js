const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PokeSchema = new Schema({
  name: String, //modelo actual de nuestra BD en mongoDB
});

const PokeModel = mongoose.model('pokemons', PokeSchema);

module.exports = PokeModel;
