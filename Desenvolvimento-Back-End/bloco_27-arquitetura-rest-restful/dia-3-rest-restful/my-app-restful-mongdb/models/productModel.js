const connection = require('./connection');
const { ObjectId } = require('mongodb');

async function getAll() {
  const db = await connection();
  const products = await db.collection('products').find().toArray();
  return products;
}

async function getById(id) {
  const db = await connection();
  return db.collection('products').findOne(ObjectId(id));
}

async function getByName(name) {
  const db = await connection();
  const query = await db.collection('products').findOne({ name });
  return query;
}

async function add(name, brand) {
  const db = await connection();
  const { insertedId } = await db
    .collection('products')
    .insertOne({ name, brand });
  return insertedId;
}

async function exclude(id) {
  const db = await connection();
  await db.collection('products').deleteOne({ _id: ObjectId(id) });
}

async function update(id, name, brand) {
  const db = await connection();

  await db
    .collection('products')
    .updateOne({ _id: ObjectId(id) }, { $set: { name, brand } });
  return { id, name, brand };
}

module.exports = { getAll, add, getById, getByName, update, exclude };
