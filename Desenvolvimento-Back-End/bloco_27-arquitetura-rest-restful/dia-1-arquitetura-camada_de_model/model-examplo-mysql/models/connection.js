const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'amos',
  password: 'Jord@s82',
  host: 'localhost',
  database: 'model_example'
});

module.exports = connection;
