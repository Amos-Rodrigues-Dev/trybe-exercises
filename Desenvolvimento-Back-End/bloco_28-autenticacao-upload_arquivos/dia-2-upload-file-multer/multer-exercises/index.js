require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const fs = require('fs');

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
app.use(express.static(path.resolve(__dirname, '/uploads')));

// Usaremos o 'fs' pois teremos que fazer a leitura de todos os arquivos do diretório.

const fileExists = (fileName) => {
  // fs.readdirSync retorna uma lista com nome de todos os arquivos da pasta uploads.
  const files = fs.readdirSync(`${__dirname}/uploads`);
  // Aqui usamos a função some, que retorna `true` se algum dos items do array passar no teste, no nosso caso o `file.includes`.
  return files.some((file) => file.split('-').pop() === fileName);
};

const fileFilter = async (req, file, cb) => {
  if (file.mimetype !== 'image/png') {
    // Colocar uma flag de erro na requisição
    req.fileValidationError = true;
    // Rejeitar o arquivo
    return cb(null, false);
  }
  if (fileExists(file.originalname)) {
    // Colocar uma flag de erro na requisição
    req.fileDuplicated = true;

    // Rejeitar o arquivo
    return cb(null, false);
  }

  // Aceitar o arquivo
  cb(null, true);
};

const storage = multer.diskStorage({
  destination: (req, file, callback) => callback(null, 'uploads/'),  
  filename: (req, file, callback) => callback(null, `${Date.now()}-${file.originalname}`),
});

const upload = multer({ storage, fileFilter });

app.post('/upload', upload.single('file'), controllers.upload);

app.get('/ping', controllers.ping);

app.use(middlewares.error);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
