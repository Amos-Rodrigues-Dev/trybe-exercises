const ProductModel = require('../models/productModel');
const { ObjectId } = require('mongodb');

async function getAll() {
  const products = await ProductModel.getAll();

  if (!products || products.length === 0)
    throw { status: 400, message: 'Products not exists' };

  return products;
}

async function getById(id) {
  if (!ObjectId.isValid(id))
    throw { status: 404, message: 'Identificador Inválido' };

  const product = await ProductModel.getById(id);
  if (!product) throw { status: 404, message: 'Produto não encontrado' };
  return product;
}

module.exports = { getAll, getById };
