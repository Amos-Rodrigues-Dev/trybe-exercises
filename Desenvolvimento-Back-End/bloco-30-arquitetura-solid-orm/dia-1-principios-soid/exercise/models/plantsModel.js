const { ObjectId } = require('mongodb');
const connection = require('./connection');

async function getAll() {
  const db = await connection();
  const plants = await db.collection('plants').find().toArray();
  return plants;
}

async function create(plants) {
  const db = await connection();
  const { insertedIds } = await db.collection('plants').insertMany(plants);
  return insertedIds;
}

async function getById(id) {
  const db = await connection();
  const plant = await db.collection('plants').findOne({ _id: ObjectId(id) });
  return plant;
}

async function exclude(id) {
  const db = await connection();
  await db.collection('plants').deleteOne({ _id: ObjectId(id) });
}

async function add(plant) {
  const db = await connection();
  const { insertedId } = await db.collection('plants').insertOne(plant);
  return insertedId;
}

async function update(id, newPlnat) {
  const db = await connection();
  await db
    .collection('plants')
    .updateOne({ _id: ObjectId(id) }, { $set: newPlnat });
  return { id, ...newPlnat };
}

module.exports = {
  getAll,
  getById,
  create,
  exclude,
  add,
  update,
};
