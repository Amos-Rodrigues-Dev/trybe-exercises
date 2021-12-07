const register = require('./registrerMiddleware');
const login = require('./loginMiddleware');
const price = require('./authoMiddleware');
const findPost = require('./findPostMiddleware');
const routerNotFound = require('./routerNotFound');
const postFinded = require('./postFindedMiddleware');

const middlewares = {
  register,
  login,
  price,
  findPost,
  routerNotFound,
  postFinded,
};

module.exports = middlewares;