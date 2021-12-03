const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());  // (npm i body-parser) ou utilizar app.use(express.json()); 

const recipes = [
  { id: 1, name: 'Lasanha', preco: 40.0, tempoDePreparo: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', preco: 35.0, tempoDePreparo: 25 },
  { id: 3, name: 'Macarrão com molho branco', preco: 35.0, tempoDePreparo: 25 },
];

app.get('/recipes', function (req, res) {
  res.status(200).json(recipes);
});

app.get('/recipes/pesquisar', function (req, res) {
  const { name, maxPrice } = req.query;
  const filteredRecipes = recipes.filter((r) => r.name.includes(name) && r.preco < parseInt(maxPrice));
  res.status(200).json(filteredRecipes);
});

app.get('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === parseInt(id));
  if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});

  res.status(200).json(recipe);
});

app.post('/recipes', function (req, res) {
  const { id, name, price } = req.body;
  recipes.push({ id, name, price});
  res.status(201).json({ message: 'Recipe created successfully!'});
});

app.put('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const { name, price } = req.body;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price };

  res.status(204).end();
});

app.delete('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes.splice(recipeIndex, 1);

  res.status(204).end();
});

app.all('*', function (req, res) {
    return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});

// ==================================================================================== // =============================================================== //
// Nodemon
// npm i nodemon -D
//...
// "scripts": {
//    "test": "echo \"Error: no test specified\" && exit 1",
// "dev": "nodemon index.js"
//  },
// ...

// npm run dev

// ==================================================================================== // =============================================================== //
// const cors = require('cors'); // libera o acesso da nossa API para outras aplicações - npm i cors

// app.use(cors()); // integração entre front-end e back-end é necessário fazer esse ajuste no código da API.

// ==================================================================================== // =============================================================== //
// Para testar nossa aplicação, podemos fazer uma requisição usando o próprio navegador, colocando a URL http://localhost:3001/recipes .
// Porém como nem todo tipo de requisição HTTP pode ser feita diretamente pelo navegador, é recomendado utilizar algum cliente HTTP. 
// Os mais famosos são o Postman e o Insomnia .
// Existe uma terceira possibilidade: 

// snap install httpie
// snap refresh httpie

//Example:
// http POST :3001/recipes id:=4 name='Macarrão com Frango' price:=30 waitTime:=45// execute apenas essa linha!