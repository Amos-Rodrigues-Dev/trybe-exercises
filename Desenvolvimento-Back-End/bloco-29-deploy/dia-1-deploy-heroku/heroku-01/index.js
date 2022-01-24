const express = require('express');
require('dotenv').config();

const app = express();

app.get('/', (req, res) => res.send('Vamo que vamo Tryber!'));

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));
