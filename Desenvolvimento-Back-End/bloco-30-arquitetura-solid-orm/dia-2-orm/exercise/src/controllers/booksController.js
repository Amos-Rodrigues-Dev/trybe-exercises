const { Book } = require('../models');

const findAll = async (req, res) => {
  try {
    const books = await Book.findAll({
      order: [
        ['title', 'ASC'],
        ['created_at', 'ASC'],
      ],
    });

    if (!books) return res.status(404).json({ message: 'Books not found' });

    return res.status(200).json(books);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

const findById = async (req, res) => {
  try {
    const { id } = req.params;

    const book = await Book.findByPk(id);

    if (!book) return res.status(404).json({ message: 'Book not found' });

    return res.status(200).json(book);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

const findOne = async (req, res) => {
  try {
    const { author } = req.query;
    const { id } = req.params;
    const book = await Book.findOne({ where: { id, author } });

    if (!book) return res.status(404).json({ message: 'Book not found' });

    return res.status(200).json(book);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const createBook = async (req, res) => {
  try {
    const { title, author, page_quantity } = req.body;

    const newBook = await Book.create({ title, author, page_quantity });

    return res.status(201).json(newBook);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const updateBook = async (req, res) => {
  try {
    const { title, author, page_quantity } = req.body;
    const { id } = req.params;

    const [updateBook] = await Book.update(
      { title, author, page_quantity },
      { where: { id } },
    );

    console.log(updateBook);

    if (!updateBook) return res.status(404).json({ message: 'Book not found' });

    return res.status(200).json({ message: 'Book created successfully!' });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBook = await Book.destroy({ where: { id } });

    console.log(deleteBook);

    return res.status(200).json({ message: 'Successfully deleted book!' });
  } catch (error) {
    console.log(e.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  findAll,
  findById,
  findOne,
  createBook,
  updateBook,
  deleteBook,
};
