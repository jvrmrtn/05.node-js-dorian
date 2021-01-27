const controller = {};
const connection = require('../dbConnection/connection');
const PokeModel = require('../models/pokemon.model');

controller.index = async (req, res) => {
  try {
    await connection();
    console.log('Base de datos conectada.');

    const allPokemons = await PokeModel.find();
    console.log(allPokemons);

    res.render('index', {
      title: 'Titulo dinamico desde controlador con nodemon.',
    });
  } catch (error) {
    console.error(error);
  }
};

module.exports = controller;
