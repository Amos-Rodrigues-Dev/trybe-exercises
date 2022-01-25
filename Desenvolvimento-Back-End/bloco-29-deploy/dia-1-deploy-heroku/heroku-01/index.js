const express = require('express');
require('dotenv').config();

const app = express();

app.get('/', (req, res) => res.send('Vamo que vamo Tryber!'));

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));

// Procfile
// web: node index.js

// Instalação do CLI

// sudo snap install hello-world
// apt-get update && apt-get install snapd

// sudo snap install heroku --classic
// heroku login

// npm install # Instalando as dependências em um exemplo NodeJs utilizando o npm.

// heroku local web

// npx create-react-app meu-primeiro-deploy-heroku

// heroku create

// git remote rm heroku

// heroku create meu-primeiro-deploy-2930

// heroku create meu-deploy-de-testes-29302 --remote heroku-homolog

// git remote rename heroku heroku-origin

// heroku git:remote -a meu-deploy-de-testes-29302 --remote heroku-test

// git push heroku-origin master

// git push heroku-homolog master

// Gerenciando seus apps

// heroku apps

// heroku apps:info nome-do-seu-app-12345

// heroku config:set TESTE="texto qualquer" --app nome-do-seu-app-12345

// heroku config --app nome-do-seu-app-12345

// heroku config --app nome-do-seu-app-12345

// heroku logs --app nome-do-seu-app-12345

// heroku logs -n 200 --app nome-do-seu-app-12345

// heroku logs --tail --app nome-do-seu-app-12345

// heroku destroy --app meu-deploy-de-testes-29302 --confirm meu-deploy-de-testes-29302
