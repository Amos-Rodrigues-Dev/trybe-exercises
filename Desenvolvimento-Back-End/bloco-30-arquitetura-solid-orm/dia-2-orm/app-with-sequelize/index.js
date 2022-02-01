const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

const router = require('./routes');

app.use(bodyParser.json());

app.use(router);

app.listen(PORT, () => console.log(`Escutando na porta ${PORT}`));
