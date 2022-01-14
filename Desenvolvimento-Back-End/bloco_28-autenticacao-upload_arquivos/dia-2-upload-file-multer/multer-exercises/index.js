require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');

const { PORT } = process.env;

const path = require('path');

const controllers = require('./controllers');
const middlewares = require('./middlewares');

const app = express();

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  }),
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Torna a pasta uploads pública de forma que seja possível baixar os arquivos enviados anteriormente.
// __dirname é uma variável de ambiente que informa o caminho absoluto do diretório que contém o arquivo em execução no momento.
app.use(express.static(path.resolve(__dirname, '/uploads')));
app.use(express.static(path.resolve(__dirname, '/profilePics')));

app.post('/upload', middlewares.multerUpload, controllers.upload);

app.post('/multiple', middlewares.multerMultiUpload, controllers.multiple);

app.post('/profile', multer({ dest: 'profilePics' }).single('profilePic'), controllers.profile);

app.get('/profiles/:id', controllers.getProfile);

app.get('/ping', controllers.ping);

app.use(middlewares.error);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
