const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();

app.use(bodyParser.json());

app
  .route('/')
  .get((req, res) => res.status(200).json({ message: 'Hello World!' }));

app.get('/users', (req, res) => {
  const { name, email } = req.query;
  res
    .status(200)
    .json({ message: `OK, tudo certo ${name} seu email é ${email}` });
});

const createUser = (req, res) => {
  const { name, email } = req.body;

  try {
    if (name && email) return res.status(201).json({ user: { name, email } });
    throw new Error('Dados inválidos ou inexistentes...');
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const uptadeUser = (req, res) => {
  const { name, email } = req.body;
  const { id } = req.params;

  try {
    if (name && email)
      return res.status(201).json({ user: { id, name, email } });
    throw new Error('Dados inválidos ou inexistentes...');
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const deleteUser = (req, res) => {
  const { id } = req.params;

  try {
    if (id)
      return res.status(202).json({ message: `Usuário com id ${id} deletado` });
    throw new Error('Dados inválidos ou inexistentes...');
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const getUserGithub = async (req, res) => {
  try {
    const url = `https://api.github.com/users/${req.query.name}`;
    const response = await axios.get(url);

    if (response)
      return res.status(200).send(`<img src="${response.data.avatar_url}" />`);
  } catch (error) {
    error.message = 'Dados inválidos ou inexistentes...';
    return res.status(400).json({ message: error.message });
  }
};

app.get('/user/github', getUserGithub);

app.post('/users', createUser);
app.put('/users/:id', uptadeUser);
app.delete('/users/:id', deleteUser);

module.exports = app;
