const Categorie = require('../models/Categorie');

const getCategories = async (_req, res) => {
  const categories = await Categorie.getCategories();
  res.render('categories/index', { categories });
};

const redirectToCategories = (_req, res) => {
  res.redirect('/categories');
};

module.exports = { getCategories, redirectToCategories };
