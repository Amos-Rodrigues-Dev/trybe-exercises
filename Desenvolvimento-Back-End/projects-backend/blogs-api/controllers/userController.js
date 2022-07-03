const UserService = require('../services/userService');

const createUser = async (req, res, next) => {
  try {
    const newUser = await UserService.createUser(req.body);
    return res.status(201).json(newUser);
  } catch (error) {
    console.error(`POST CREATE_USER -> ${error.message}`);
    return next(error);
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    const users = await UserService.getAllUsers();
    return res.status(200).json(users);
  } catch (error) {
    console.error(`GET ALL_USERS -> ${error.message}`);
    return next(error);
  }
};

const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await UserService.getUserById(id);
    return res.status(200).json(user);
  } catch (error) {
    console.error(`GET USER_BY_ID -> ${error.message}`);
    return next(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    await UserService.deleteUser(req.user.id);
    return res.status(204).json();
  } catch (error) {
    console.error(`DELETE USER_BY_ID -> ${error.message}`);
    return next(error);
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  deleteUser,
};
