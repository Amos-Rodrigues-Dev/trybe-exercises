const Joi = require('joi');
const errorConstrucor = require('../utils/functions/errorHandling');

const { User } = require('../models');

const userSchema = Joi.object({
  displayName: Joi.string().min(8).required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required(),
  password: Joi.string().min(6).required(),
  image: Joi.string(),
});

const createUser = async (user) => {
  const { error } = userSchema.validate(user);
  const msg = error && error.message.replace('at least 6', '6');

  if (error) throw errorConstrucor(400, msg); 

  const emailExists = await User.findOne({ where: { email: user.email } });

  if (emailExists) throw errorConstrucor(409, 'User already registered'); 

  const newUser = await User.create(user);

  return newUser;
};

const getAllUsers = async () => {
  const users = await User.findAll({});

  if (!users) throw errorConstrucor(404, 'Users not found');

  return users;
};

const getUserById = async (id) => {
  const user = await User.findByPk(id);

  if (!user) throw errorConstrucor(404, 'User does not exist');

  return user;
};

const deleteUser = async (id) => {
  const user = await User.findByPk(id);

  if (!user) throw errorConstrucor(404, 'User does not exist');

  const userDeleted = await User.destroy({ where: { id } });

  return userDeleted;
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  deleteUser,
};