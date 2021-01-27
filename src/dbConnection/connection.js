const mongoose = require('mongoose');

const user = 'kaiyeih';
const password = 'aJ2Xpv1CaMK6fCKO';
const dbname = 'pokedex';
const uri = `mongodb+srv://kaiyeih:${password}@cluster0.jciiy.mongodb.net/${dbname}?retryWrites=true&w=majority`;

const connection = () => {
  mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
};

module.exports = connection;
