const express = require('express');
const bodyParse = require('body-parser');

const app = express();

app.use(bodyParse.json())

/* Todas as rotas com /<alguma-coisa> entram aqui e vão para o roteador. */
const exercisesRouters = require('./routers')

app.use('/', exercisesRouters);

app.listen(3000, () => console.log("Ouvindo na porta 3000"));