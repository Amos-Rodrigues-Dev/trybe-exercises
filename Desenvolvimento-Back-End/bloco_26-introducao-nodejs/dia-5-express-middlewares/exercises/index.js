const express = require('express');
const bodyParse = require('body-parser');

const app = express();

app.use(bodyParse.json())

/* Todas as rotas com /<alguma-coisa> entram aqui e vão para o roteador. */
const exercisesRouters = require('./routers')
const teamRouter = require('./routers/teamRouter')

// app.use('/', exercisesRouters);

// Atividade 4
app.use('/teams', teamRouter);

app.listen(3000, () => console.log("Ouvindo na porta 3000"));