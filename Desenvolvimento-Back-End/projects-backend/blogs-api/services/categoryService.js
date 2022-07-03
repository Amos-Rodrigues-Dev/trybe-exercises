const Joi = require('joi');
const errorConstrucor = require('../utils/functions/errorHandling');

const { Category } = require('../models');

const userSchema = Joi.object({
  name: Joi.string().required(),
});

const createCategory = async (category) => {
  const { error } = userSchema.validate(category);

  if (error) throw errorConstrucor(400, error.message); 

  const emailExists = await Category.findOne({ where: { name: category.name } });

  if (emailExists) throw errorConstrucor(409, 'Category already registered'); 

  const newCategory = await Category.create(category);

  return newCategory;
};

const getAllCategories = async () => {
  const categories = await Category.findAll({});

  if (!categories) throw errorConstrucor(404, 'Categories not found');

  return categories;
};

module.exports = {
  createCategory,
  getAllCategories,
};