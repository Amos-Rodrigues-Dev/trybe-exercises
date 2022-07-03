const CategoryService = require('../services/categoryService');

const createCategory = async (req, res, next) => {
  try {
    const category = await CategoryService.createCategory(req.body);
    return res.status(201).json(category);
  } catch (error) {
    console.error(`POST CREATE_CATEGORY -> ${error.message}`);
    return next(error);
  }
};

const getAllCategories = async (_req, res, next) => {
  try {
    const categories = await CategoryService.getAllCategories();
    return res.status(200).json(categories);
  } catch (error) {
    console.error(`GET ALL_CATEGORIES -> ${error.message}`);
    return next(error);
  }
}; 

module.exports = {
  createCategory,
  getAllCategories,
};