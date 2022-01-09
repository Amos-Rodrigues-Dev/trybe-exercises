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
  if (!product) throw { status: 404, message: 'Product not found' };
  return product;
}

async function add(name, brand) {
  const productExists = await ProductModel.getByName(name);

  if (productExists) throw { status: 400, message: 'Product already exists' };
  console.log(productExists);

  const productId = await ProductModel.add(name, brand);

  const newProduct = {
    id: productId,
    name,
    brand
  };
  return newProduct;
}

async function exclude(id) {
  if (!ObjectId.isValid(id))
    throw { status: 404, message: 'Identificador Inválido' };

  const product = await ProductModel.getById(id);

  if (!product) throw { status: 400, message: 'Product not exists' };

  await ProductModel.exclude(id);
  return product;
}

async function update(id, name, brand) {
  if (!ObjectId.isValid(id))
    throw { status: 404, message: 'Identificador Inválido' };

  const product = await ProductModel.getById(id);

  if (!product) throw { status: 400, message: 'Product not exists' };

  const alteredProduct = await ProductModel.update(id, name, brand);
  return alteredProduct;

  // const product = await db
  //   .collection('products')
  //   .updateOne({ _id: ObjectID(id) }, { $set: name, brand });
  // if (!product) return add(name, brand);
  // return product;
}

module.exports = { getAll, getById, add, exclude, update };
