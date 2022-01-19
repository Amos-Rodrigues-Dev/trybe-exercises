const ObjectID = require('mongodb').ObjectId;
const connect = require('./connection');

const registerUser = async (newUser) => {
  const { username } = newUser;
  const db = await connect();
  const { insertedId } = await db.collection('users').insertOne(newUser);
  return { _id: insertedId, username };
};

const findUser = async (username) => {
  const db = await connect();
  const userData = await db.collection('users').findOne({ username });
  return userData;
};

const findUserById = async (userId) =>
  connect().then((db) =>
    db.collection('users').findOne({ _id: ObjectID(userId) }),
  );

module.exports = { registerUser, findUser, findUserById };
