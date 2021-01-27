const http = require('http');

const server = http.createServer((req, res) => {
  console.log('Servidor conectado.');
  res.end('La conexion ha sido satisfactoria.');
});

const port = 3000;

server.listen(port, () => {
  console.log('Esperando...');
});
