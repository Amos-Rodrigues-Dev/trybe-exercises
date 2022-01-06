const express = require('express');
const ProductService = require('../services/productServices');

const router = express.Router();

router.get('/list-products', async (req, res, next) => {
  try {
    const products = await ProductService.getAll();
    res.status(200).json(products);
  } catch (error) {
    console.error(error.message);
    return next(error);
  }
});

router.get('/get-by-id/:id', async (req, res, next) => {
  try {
    const product = await ProductService.getById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    console.log(error.message);
    return next(error);
  }
});

router.post('/add-user', async (req, res, next) => {
  const { name, brand } = req.body;

  try {
    const newProduct = await ProductService.add(name, brand);

    res.status(200).json(newProduct);
  } catch (e) {
    console.log(e.message);
    return next(e);
  }
});

router.delete('/delete-user/:id', async (req, res, next) => {
  try {
    const product = await ProductService.exclude(req.params.id);

    res.status(200).json(product);
  } catch (e) {
    console.log(e.message);
    return next(e);
  }
});

router.put('/update-user/:id', async (req, res, next) => {
  const { name, brand } = req.body;

  try {
    const products = await ProductService.update(req.params.id, name, brand);

    res.status(200).json(products);
  } catch (e) {
    console.log(e.message);
    return next(e);
  }
});

module.exports = router;
