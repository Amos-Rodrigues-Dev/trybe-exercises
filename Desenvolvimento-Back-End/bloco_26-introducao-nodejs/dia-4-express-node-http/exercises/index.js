const express = require('express');
const authMiddleware = require('./authMiddleware'); // Exercício 1 dos Bônus
const cors = require('cors');// libera o acesso da nossa API para outras aplicações - npm i cors

const app = express();

app.use(express.json()); // interpreta requisições buffet tipo post/put e converte em json

app.use(cors());

app.use(authMiddleware); // Exercício 1 dos Bônus

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

// Exercise 5 - Crie uma API de dados das personagens de Simpsons
// Crie um arquivo chamado simpsons.json e popule com os seguintes dados:
// Utilize o modulo fs do Node para ler/escrever arquivos.
// Caso algum erro ocorra, deve ser retornado um código 500 (Internal Server Error).
// Caso dê tudo certo, a resposta deve voltar com status 200 OK .
// Para testar sua API durante o desenvolvimento, utilize ferramentas que permitem fazer requisições HTTP, como Postman , Insomnia ou httpie .
const fs = require('fs').promises;

app.get('/', (req, res, _next) => {
  fs.readFile('simpsons.json', 'utf-8')
    .then((data) => res.status(200).json({ message: "ok" }))
    .catch((err) => res.status(500).json({ Error: err.message }))
});

// Exercise 6 - Crie um endpoint GET /simpsons
// O endpoint deve retornar um array com todos os simpsons.

// const rescue = require('express-rescue');

const { getSimpsons, setSimpsons } = require('./fs-utils');

app.get('/simpsons', async (req, res, _next) => {
  const simpsons = await getSimpsons()
  res.status(200).json(simpsons);
});

// Exercise 7 - Crie um endpoint GET /simpsons/:id
// 1. O endpoint deve retornar o personagem com o id informado na URL da requisição.
// 2. Caso não exista nenhum personagem com o id especificado, retorne o JSON { message: 'simpson not found' } com o status 404 - Not Found .
app.get('/simpsons/:id', async (req, res, _next) => {
  const { id } = req.params;
  try {
    const simpsons = await getSimpsons();
    const simpson = simpsons.find(simp => simp.id === id);
    if (simpson) return res.status(200).json(simpson);
    return res.status(404).json({ message: 'simpson not found' });
  } catch (err) {
    return res.status(404).json(err.message);
  }
});

// Exercise 7 - Crie um endpoint POST /simpsons .
// 1. Este endpoint deve cadastrar novos personagens.
// 2. O corpo da requisição deve receber o seguinte JSON: { id: <id-da-personagem>, name: '<nome-da-personagem>' } .
// 3. Caso já exista uma personagem com o id informado, devolva o JSON { message: 'id already exists' } com o status 409 - Conflict .
// 4. Caso a personagem ainda não exista, adicione-a ao arquivo simpsons.json e devolva um body vazio com o status 204 - No Content . 
// Para encerrar a request sem enviar nenhum dado, você pode utilizar res.status(204).end(); .

app.post('/simpsons/', async (req, res, _next) => {
  const { id, name } = req.body;
  
  try {
    const simpsons = await getSimpsons();
    if (simpsons.map(({ id }) => id).includes(id)) {
      return res.status(409).json({ message: 'id already exists' });
    } 
    
    await setSimpsons([...simpsons, { id, name }]);
    
    return res.status(204).end();

  } catch (err) {
    return res.status(404).json(err.message);
  }
});
// http POST :3001/simpsons id=11 name=xablau

// BÔNUS

// Exercício 1
// Adicione autenticação a todos os endpoints.
// 1. O token deve ser enviado através do header Authorization .
// 2. O token deve ter exatamente 16 caracteres.
// 3. Caso o token seja inválido ou inexistente, a resposta deve possuir o status 401 - Unauthorized e o JSON { message: 'Token inválido!' } .

// authMiddleware.js
// module.exports = (req, res, next) => {
//   const { authorization } = req.headers;

//   if (!authorization || authorization.length !== 16) {
//     return res.status(401).json({ message: 'Token inválido!' });
//   }

//   return next();
// }

// index.js
// const authMiddleware = require('./authMiddleware');

// app.use(express.json());
// app.use(authMiddleware);

// /* ... */

// app.use(function (err, req, res, next) {
//   res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
// });

// http :3001/simpsons Authorization:abc # vai devolver token inválido
// http :3001/simpsons Authorization:S6xEzQUTypw4aj5A # vai devolver token válido

// Exercício 2
// Crie uma rota POST /signup
// 1. A rota deve receber, no body da requisição, os campos email , password , firstName e phone .
// 2. Caso algum dos campos não esteja preenchido, a response deve possuir status 401 - Unauthorized e o JSON { message: 'missing fields' } .
// 3. Caso todos os parâmetros estejam presentes, a rota deve gerar um token aleatório válido, e a resposta deve conter o status 200 - OK e o JSON { token: '<token-aleatorio>' } .
// * Para gerar o token você pode utilizar a função randomBytes , do módulo crypto do node, dessa forma:

// const crypto = require('crypto');

// function generateToken() {
//   return crypto.randomBytes(8).toString('hex');
// }

// module.exports = generateToken;

const generateToken = require('./getToken');
/* ... */
const crypto = require('crypto');
/* ... */

app.post('/signup', (req, res) => {
  const { email, password, firstName, phone } = req.body;

  if ([email, password, firstName, phone].includes(undefined)) {
    return res.status(401).json({ message: 'missing fields' });
  }

  // const token = crypto.randomBytes(8).toString('hex');

  const token = generateToken();

  res.status(200).json({ token });
})

/* ... */
// http POST :3001/signup Authorization:S6xEzQUTypw4aj5A email=amos@amos.com password=123456 firstName=amos phone=88287782



// Utilizado ao final das middlewares para tratar os erros gerais
app.use(function (err, req, res, next) {
  res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
}); // Exercício 1 dos Bônus 


// inserir regra para mensagem de erro e bind de porta sempre ao final
app.all('*', (req, res) => {
  return res.status(404).json({ message: `Rota '${req.path}' não existe!`})
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001')
});

