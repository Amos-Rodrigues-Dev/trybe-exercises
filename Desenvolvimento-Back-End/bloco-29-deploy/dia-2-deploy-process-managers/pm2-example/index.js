const express = require('express');
const bodyParser = require('body-parser');
const process = require('process');

const app = express();

app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Inciando Process Managers'));

app.get('/break', (req, res) => {
  res.send('Quebrando...');

  process.exit(1);
});

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));
