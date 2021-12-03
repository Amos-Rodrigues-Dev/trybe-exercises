// const express = require('express');

// const app = express(); // 1

// app.get('/hello', handleHelloWorldRequest); // 2

// app.listen(3001, () => {
//   console.log('Aplicação ouvindo na porta 3001');
// }); // 3

// function handleHelloWorldRequest(req, res) {
//   res.status(200).send('Olá Mundo com Node Express!'); // 4
// }


// app.get('/hello', (_req, res) => {
//   res.satus(200).send('Hello World!')
// });

// Nodemon
// npm i nodemon -D
//...
// "scripts": {
//    "test": "echo \"Error: no test specified\" && exit 1",
// "dev": "nodemon index.js"
//  },
// ...

// npm run dev

/* index.js */
const express = require('express');
const app = express();

const cors = require('cors'); // libera o acesso da nossa API para outras aplicações - npm i cors

app.use(cors()); // integração entre front-end e back-end é necessário fazer esse ajuste no código da API.

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];


// ============================ Recipes GET ============================= //
app.get('/recipes', function (req, res) {
  res.status(200).json(recipes);
});

app.get('/recipes/search', function (req, res, _next) {
  const { name, maxPrice, minPrice } = req.query;
  const filteredRecipes = recipes.filter((r) => r.name.includes(name) && r.price < parseInt(maxPrice) || r.price >= parseInt(minPrice));

  if (!filteredRecipes) return res.status(404).json({ message: 'Recipe not found!'});

  res.status(200).json(filteredRecipes);
});

// http :3001/recipes/search name==Macarrão  minPrice==36

app.get('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});

  res.status(200).json(recipe);
});

// ============================ Recipes GET ============================= //
app.get('/drinks', function (req, res) {
    res.status(200).json(drinks);
});

app.get('/drinks/:id', function (req, res) {
  const { id } = req.params;
  const drink = drinks.find((d) => d.id === parseInt(id));

  if (!drink) return res.status(404).json({ message: "Drink not found!"});

  res.status(200).json(drink);
});

app.get('/drinks/search', function (req, res) {
  const { name, maxPrice, minPrice } = req.query;
  const filtereddrinks = drinks.filter((d) => d.name.includes(name) || d.price < parseFloat(maxPrice) || d.price >= parseFloat(minPrice));

  if (!filtereddrinks) return res.status(404).json({ message: 'Drinks not found!'});

  res.status(200).json(filtereddrinks);
})

// ============================ POST ============================= // Recebendo dados no body da requisição.
// npm i body-parser
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// app.use(express.json());

// Agora vamos implementar nossa rota que vai receber dados no body da requisição.
// ...
app.post('/recipes', function (req, res) {
  const { id, name, price, waitTime } = req.body;
  recipes.push({ id, name, price, waitTime});
  res.status(201).json({ message: 'Recipe created successfully!'});
});

// fetch(`http://localhost:3001/recipes/`, {
//   method: 'POST',
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     id: 4,
//     name: 'Macarrão com Frango',
//     price: 30
//   })
// });

// snap install httpie
// snap refresh httpie
// http POST :3001/recipes id:=4 name='Macarrão com Frango' price:=30 waitTime:=45// execute apenas essa linha!

// ...

app.get('/validateToken', function (req, res) {
  const token = req.headers.authorization;
  if (token.length !== 16) return res.status(401).json({message: 'Invalid Token!'});

  res.status(200).json({message: 'Valid Token!'});
});

// ...
// http :3001/validateToken Authorization:abc # vai devolver token inválido
// http :3001/validateToken Authorization:S6xEzQUTypw4aj5A # vai devolver token válido


app.post('/drinks', function (req, res) {
  const { id, name, price } = req.body;
  drinks.push({ id, name, price});
  res.status(201).json({ message: 'Drink created successfully!'});
});
// http POST :3001/drinks id:=7 name='Café com Leite' price:=55// execute apenas essa linha!

// ...

app.put('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const { name, price } = req.body;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price };

  res.status(204).end();
});
// ...

// http PUT :3001/recipes/2 name='Macarrão ao alho e óleo' price:=40 # execute apenas essa linha!

//...

app.delete('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes.splice(recipeIndex, 1);

  res.status(204).end();
});

//...

// http DELETE :3001/recipes/3 # execute apenas essa linha!


// No front-end, para fazer requisições do tipo PUT e DELETE através do fetch api podemos utilizar os exemplos de código abaixo:
// Requisição do tipo PUT
// fetch(`http://localhost:3001/recipes/2`, {
//   method: 'PUT',
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     name: 'Macarrão ao alho e óleo',
//     price: 40
//   })
// });

// Requisição do tipo DELETE
// fetch(`http://localhost:3001/recipes/4`, {
//   method: 'DELETE',
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   }
// });

// Para Fixar
// Crie uma rota PUT /drinks/:id que permita editar os atributos de uma bebida.
app.put('/drinks/:id', function (req, res) {
  const { id } = req.params;
  const { name, price } = req.body;
  const drinkIndex = drinks.findIndex((d) => d.id === parseInt(id));

  if (drinkIndex === -1) return res.status(404).json({ message: 'Drinks not found!' });

  drinks[drinkIndex] = { ...drinks[drinkIndex], name, price };

  res.status(204).end();
});

// http PUT :3001/drinks/5 name='Café com Leite Forte' price:=40 # execute apenas essa linha!

// Crie uma rota DELETE /drinks/:id que permita remover uma bebida
app.delete('/drinks/:id', function (req, res) {
  const { id } = req.params;
  const drinkIndex = drinks.findIndex((d) => d.id === parseInt(id));

  if (drinkIndex === -1) return res.status(404).json({ message: 'Drink not found!' });

  drinks.splice(drinkIndex, 1);

  res.status(204).end();
});

// http DELETE :3001/drinks/6 # execute apenas essa linha!


// O que acontece se fizermos uma requisição para uma rota que não existe?


app.get('/xablau', function (req, res) {
    return res.status(404).json({ message: `Xablau!`});
});

//... app.all('*') deve ser sempre a última definição de rota da nossa API
app.all('*', function (req, res) {
  return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
});

// app.listen(3001);

// nunca vai chegar nessa rota!
// app.get('/xablau', function (req, res) {
//   return res.status(404).json({ message: `Xablau!`});
// });
