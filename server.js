const http = require('http');

// Criando um servidor HTTP
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Servidor Node.js simples funcionando!\n');
});

// Definindo a porta em que o servidor irá ouvir
const port = 3000;

// Iniciando o servidor e ouvindo a porta especificada
server.listen(port, () => {
  console.log(`Servidor está ouvindo na porta ${port}`);
});