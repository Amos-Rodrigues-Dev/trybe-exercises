const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const router = require('./routes');

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/books', router);

app.listen(PORT, () => console.log(`Escutando na porta ${PORT}`));

module.exports = app;
