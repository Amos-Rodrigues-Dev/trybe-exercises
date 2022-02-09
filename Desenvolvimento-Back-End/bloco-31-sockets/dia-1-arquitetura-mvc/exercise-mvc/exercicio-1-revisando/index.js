const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const PORT = process.env.PORRT || 3000;

const jokeController = require('./controller/jokeController');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');

app.set('views', './views');

app.get('/', jokeController.getJoke);

app.listen(PORT, () => console.log(`Escutando na porta ${PORT}`));
