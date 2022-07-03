const blogRouter = require('express').Router();

const { auth } = require('../middlewares');

const blogPostController = require('../controllers/blogPostController');

blogRouter.get('/search', auth, blogPostController.searchBlogPost);
blogRouter.post('/', auth, blogPostController.createBlogPost);
blogRouter.get('/', auth, blogPostController.getAllBlogPost);
blogRouter.get('/:id', auth, blogPostController.getBlogPostById);
blogRouter.put('/:id', auth, blogPostController.updateBlogPost);
blogRouter.delete('/:id', auth, blogPostController.deleteBlogPost);

module.exports = blogRouter;