require('dotenv').config();
const jwt = require('jsonwebtoken');

const errorConstructor = require('../utils/functions/errorHandling');

const secret = process.env.JWT_SECRET;

module.exports = (req, _res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    throw errorConstructor(401, 'Token not found');
  }

  try {
    const { data } = jwt.verify(token, secret);
    req.user = data;
    return next();
  } catch (error) {
    error.message = 'Expired or invalid token';
    error.status = 401;
    return next(error);
  }
};