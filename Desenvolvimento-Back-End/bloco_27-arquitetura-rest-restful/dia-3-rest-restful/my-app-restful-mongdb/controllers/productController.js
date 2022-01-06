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

router.post('/add-user', async (req, res) => {
  const { name, brand } = req.body;

  try {
    const newProduct = await ProductModel.add(name, brand);

    res.status(200).json(newProduct);
  } catch (e) {
    res.status(500).send({ message: 'Algo deu errado' });
  }
});

router.delete('/delete-user/:id', async (req, res) => {
  try {
    const products = await ProductModel.exclude(req.params.id);

    res.status(200).json(products);
  } catch (e) {
    res.status(500).send({ message: 'Algo deu errado' });
  }
});

router.put('/update-user/:id', async (req, res) => {
  const { name, brand } = req.body;

  try {
    const products = await ProductModel.update(req.params.id, name, brand);

    res.status(200).json(products);
  } catch (e) {
    res.status(500).send({ message: 'Algo deu errado' });
  }
});

module.exports = router;
