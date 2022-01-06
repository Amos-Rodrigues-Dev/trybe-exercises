const { MongoClient } = require('mongodb');

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

const MONGO_DB_URL = 'mongodb://127.0.0.1:27017';

let db = null;

const connection = () => {
  return db
    ? Promise.resolve(db)
    : MongoClient.connect(MONGO_DB_URL, OPTIONS).then(conn => {
        db = conn.db('rest_exercicios');
        return db;
      });
};

module.exports = connection;

// const mongodb = require('mongodb').MongoClient;

// const MONGO_DB_URL = 'mongodb://localhost:27017/class';
// const DB_NAME = 'class';

// module.exports = () => mongodb.connect(MONGO_DB_URL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then((connection) => connection.db(DB_NAME))
//   .catch((err) => {
//     console.error(err);
//     process.exit(1);
//   });
