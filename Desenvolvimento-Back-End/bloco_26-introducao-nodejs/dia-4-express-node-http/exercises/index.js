const express = require('express');
const cors = require('cors');// libera o acesso da nossa API para outras aplicações - npm i cors

const app = express();

app.use(express.json()); // interpreta requisições buffet tipo post/put e converte em json

app.use(cors());

// Exercise 1 - Crie uma rota GET /ping
// Sua rota deve retornar o seguinte JSON: { message: 'pong' }
app.get('/ping', (req, res, _next) => {
  return res.status(200).json({ message: 'pong' });
});

// Exercise 2 - Crie uma rota POST /hello
// Sua rota deve receber, no body da requisição, o seguinte JSON: { "name": "<nome do usuário>" }
// Sua rota deve retornar o seguinte JSON: { "message": "Hello, <nome do usuário>!" } .
app.post('/hello', (req, res, _next) => {
  const { name } = req.body;

  return res.status(200).json({ message: `Hello, ${name}!`});
});

// Exercise 3 - Crie uma rota POST /greetings
// Sua rota deve receber o seguinte JSON: { "name": "<nome do usuário>", "age": <idade do usuário> } .
// Caso a pessoa usuária tenha idade superior a 17 anos, devolva o JSON { "message": "Hello, <nome do usuário>!" } com o status code 200 - OK .
// Caso a pessoa usuária tenha 17 anos ou menos, devolva o JSON { "message": "Unauthorized" } com o status code 401 - Unauthorized .
app.post('/greetings', (req, res, _next) => {
  const { name, age } = req.body;

  if (age > 17) return res.status(200).json({ name, age });

  return res.status(401).json({ message: "Unauthorized" });
});

// Exercise 4 - Crie uma rota PUT /users/:name/:age .
// Sua rota deve retornar o seguinte JSON: { "message": "Seu nome é <name> e você tem <age> anos de idade" } .
app.put('/users/:name/:age', (req, res, _next) => {
  const { name, age } = req.params;

  return res.status(201).json({
    message: `Seu nome é ${name} e você tem ${age} anos de idade`});
});






// inserir regra para mensagem de erro e bind de porta sempre ao final
app.all('*', (req, res) => {
  return res.status(404).json({ message: `Rota '${req.path}' não existe!`})
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001')
});

