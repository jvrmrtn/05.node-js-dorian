const mongoose = require('mongoose');

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.jciiy.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

const connection = () => {
  mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
};

module.exports = connection;
