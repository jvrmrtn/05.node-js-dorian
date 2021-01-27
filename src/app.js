const express = require('express');
const app = express();
const path = require('path'); //Module normaliaze routes

const port = 3000;

// Engine pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.use(require('./routes/index.routes'));

// Static Files
app.use(express.static(path.join(__dirname, '../public')));

app.use((req, res) => {
  res.sendFile(path.join(__dirname, '../public/404.html'));
});

app.listen(port, () => {
  console.log('Esperando...');
});
