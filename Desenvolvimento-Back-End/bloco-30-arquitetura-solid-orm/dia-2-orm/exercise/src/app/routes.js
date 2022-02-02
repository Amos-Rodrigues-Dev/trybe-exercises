const router = require('express').Router();

const booksController = require('../controllers/booksController');

router.get('/', booksController.findAll);
router.get('/:id', booksController.findById);
router.get('/search/:id', booksController.findOne);
router.post('/', booksController.createBook);
router.put('/:id', booksController.updateBook);
router.delete('/:id', booksController.deleteBook);

module.exports = router;
