const connection = require('./connection');

const query = 'SELECT * FROM model_example.books WHERE author_id=?;';

const getAll = async () => {
  const [books] = await connection.execute(
    'SELECT * FROM model_example.books;'
  );

  return books.map(({ id, title, author_id }) => ({
    id,
    title,
    authorId: author_id
  }));
};

const getByAuthorId = async authorId => {
  const [books] = await connection.execute(query, [authorId]);

  return books.map(({ id, title, author_id }) => ({
    id,
    title,
    authorId: author_id
  }));
};

const queryBook = 'SELECT * FROM model_example.books WHERE id=?;';

const getByBookId = async bookId => {
  const [book] = await connection.execute(queryBook, [bookId]);

  return book[0];
};

module.exports = {
  getAll,
  getByAuthorId,
  getByBookId
};
