const BlogPostService = require('../services/blogPostService');

const createBlogPost = async (req, res, next) => {
  try {
    const newBlog = await BlogPostService.createBlogPost(req.body, req.user.id);
    return res.status(201).json(newBlog);
  } catch (error) {
    console.error(`POST CREATE_BLOGPOST -> ${error.message}`);
    return next(error);
  }
};

const getAllBlogPost = async (_req, res, next) => {
  try {
    const post = await BlogPostService.getAllBlogPost();
    return res.status(200).json(post);
  } catch (error) {
    console.log(error.message);
    return next(error);
  }
};

const getBlogPostById = async (req, res, next) => {
  try {
    const blogPost = await BlogPostService.getBlogPostById(req.params.id);
    return res.status(200).json(blogPost);
  } catch (error) {
    console.log(error.message);
    return next(error);
  }
};

const updateBlogPost = async (req, res, next) => {
  try {
    const blogPost = await BlogPostService.updateBlogPost(req.params.id, req.body, req.user.id);
    return res.status(200).json(blogPost);
  } catch (error) {
    console.log(error.message);
    return next(error);
  }
};

const deleteBlogPost = async (req, res, next) => {
  try {
    await BlogPostService.deleteBlogPost(req.params.id, req.user.id);
    return res.status(204).json();
  } catch (error) {
    console.log(error.message);
    return next(error);
  }
};

const searchBlogPost = async (req, res, next) => {
  const { q } = req.query;
  try {
    const post = await BlogPostService.searchBlogPost(q);
    return res.status(200).json(post);
  } catch (error) {
    console.log(error.message);
    return next(error);
  }
};

module.exports = {
  createBlogPost,
  getAllBlogPost,
  getBlogPostById,
  updateBlogPost,
  deleteBlogPost,
  searchBlogPost,
};