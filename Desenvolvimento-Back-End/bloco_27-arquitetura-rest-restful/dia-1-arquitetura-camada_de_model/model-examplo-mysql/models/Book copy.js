const connection = require('./connection');

const Author = require('./Author');

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

const isValid = async (title, author_id) => {
  if (!title || typeof title !== 'string' || title.length < 3) return false;
  if (
    !author_id ||
    typeof author_id !== 'number' ||
    !(await Author.findById(author_id))
  )
    return false;

  return true;
};

const create = async (title, author_id) =>
  connection.execute(
    'INSERT INTO model_example.books (title, author_id) VALUES (?,?)',
    [title, author_id]
  );

module.exports = {
  getAll,
  getByAuthorId,
  getByBookId,
  isValid,
  create
};
