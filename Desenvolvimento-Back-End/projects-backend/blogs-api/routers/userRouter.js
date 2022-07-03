const userRouter = require('express').Router();

const { auth } = require('../middlewares');

const useController = require('../controllers/userController');

userRouter.post('/', useController.createUser);
userRouter.get('/', auth, useController.getAllUsers);
userRouter.get('/:id', auth, useController.getUserById);
userRouter.delete('/me', auth, useController.deleteUser);

module.exports = userRouter;