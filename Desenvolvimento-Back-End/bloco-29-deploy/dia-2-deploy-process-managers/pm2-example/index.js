const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Inciando Process Managers'));

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));
