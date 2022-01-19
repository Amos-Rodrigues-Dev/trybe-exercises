const getPosts = require('../controllers/posts');
const createUsers = require('../controllers/createUser');
const login = require('../controllers/login');
const findUserById = require('../controllers/findUserById');

module.exports = {
  getPosts,
  createUsers,
  login,
  findUserById,
};
