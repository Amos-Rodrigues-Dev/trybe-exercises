const register = require('./registrerMiddleware');
const login = require('./loginMiddleware');
const price = require('./authoMiddleware');

const middlewares = {
  register,
  login,
  price
};

module.exports = middlewares;