const Joi = require('joi');
const jwt = require('jsonwebtoken');

const errorConstructor = require('../utils/functions/errorHandling');

const { User } = require('../models');

const loginSchema = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required(),
  password: Joi.string().min(6).required(),
});

const jwtConfig = {
  expiresIn: '2h',
  algorithm: 'HS256',
};

const secret = process.env.JWT_SECRET;

const login = async (loginUser) => {
  const { error } = loginSchema.validate(loginUser);

  if (error) {
    throw errorConstructor(400, error.message);
  }

  const user = await User.findOne({ where: { email: loginUser.email } });

  if (!user || user.dataValues.password !== loginUser.password) {
    throw errorConstructor(400, 'Invalid fields');
  }

  const { password: passBD, ...userWithoutPassword } = user.dataValues;

  const token = jwt.sign({ data: userWithoutPassword }, secret, jwtConfig);

  return { token };
};

module.exports = {
  login,
};