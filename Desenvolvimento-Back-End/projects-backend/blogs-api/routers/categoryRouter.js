const categoryRouter = require('express').Router();

const { auth } = require('../middlewares');

const categoryController = require('../controllers/categoryController');

categoryRouter.post('/', auth, categoryController.createCategory);
categoryRouter.get('/', auth, categoryController.getAllCategories);

module.exports = categoryRouter;