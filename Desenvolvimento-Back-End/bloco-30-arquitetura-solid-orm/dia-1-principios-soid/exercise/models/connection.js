const mongodb = require('mongodb').MongoClient;

const MONGO_DB_URL = 'mongodb://127.0.0.1:27017/plants';
const DB_NAME = 'plants';

module.exports = () =>
  mongodb
    .connect(MONGO_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((connection) => connection.db(DB_NAME))
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
