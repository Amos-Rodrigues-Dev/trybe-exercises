const express = require('express');
const app = express();
const port = 3000;

const Author = require('./models/Author');
const Book = require('./models/Book');

app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
});

app.get('/books', async (req, res) => {
  const { author_id } = req.query;

  const books = author_id
    ? await Book.getByAuthorId(author_id)
    : await Book.getAll();

  res.status(200).json(books);
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;

  const author = await Author.findById(id);

  if (!author) return res.status(404).json({ message: 'Author not found' });

  res.status(200).json(author);
});

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;

  const book = await Book.getByBookId(id);

  if (!book) return res.status(404).json({ message: 'Book not found' });

  res.status(200).json(book);
});

app.listen(port, () => console.log('Example app listening on port ' + port));