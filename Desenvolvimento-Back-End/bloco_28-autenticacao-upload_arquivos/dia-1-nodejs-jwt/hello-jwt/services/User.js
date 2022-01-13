// services/User.js
const jwt = require('jsonwebtoken');
const model = require('../models/User');

const { JWT_SECRET } = process.env;

/* Recebemos o valor de `admin` que, por padrão, é `false` */
const login = async (username, password) => {
  /* Não precisamos validar os campos, pois o controler já faz isso pra nós */

    /* Buscamos as informações no arquivo Users.json */
    const user = await model.findOne(username);

    if (!user || user.password !== password) {
      return {
        error: {
          code: 'invalidCredentials',
          message: 'Invalid username or password',
        },
      };
    }

  const payload = {
    username,
    /* Passamos a utilizar o valor da variável `admin` */
    /* para determinar o valor do campo `admin` no payload do token */
    admin: user.admin,
  };

  const token = jwt.sign(payload, JWT_SECRET, {
    expiresIn: '1h',
  });

  return { token };
};

const create = async (username, password) => {
  /* A primeira coisa que precisamos fazer
  é verificar se o username informado já existe */
  const userExists = await model.findOne(username);

  /* Caso o username já exista */
  if (userExists) {
    /* Retornamos um objeto de erro */
    return {
      error: {
        message: 'Username already exists',
        code: 'usernameExists',
      },
    };
  }

  /* Caso o username não exista, "rolamos o dado" para descobrir se essa pessoa será admin */
  const admin = Math.floor(Math.random() * 100) > 50;

  /* Depois, armazenamos os dados no arquivo */
  await model.create(username, password, admin);

  /* Por fim, retornamos os dados da pessoa para o controller */
  /* Por motivos de segurança, não incluiremos a senha */
  /* Por fim, retornamos o token  */
  return login(username, password);
};

module.exports = {
  create,
  login,
};