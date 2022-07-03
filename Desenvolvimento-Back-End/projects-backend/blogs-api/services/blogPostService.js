const Joi = require('joi');
const Sequelize = require('sequelize');
const errorConstrucor = require('../utils/functions/errorHandling');

const config = require('../config/config.js');

const sequelize = new Sequelize(config.development);

const { Op } = Sequelize;

const { BlogPost, Category, User, PostsCategory } = require('../models');

const userSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  categoryIds: Joi.required(),
});

const handleTransaction = async (blogPost, userId) => {
  const t = await sequelize.transaction();

  const { categoryIds: passBD, ...postWithOutCategoryIds } = blogPost;
  
  const { dataValues } = await BlogPost.create({ ...postWithOutCategoryIds, userId });

  const postCategoryCreated = await blogPost.categoryIds.map(async (categoryId) => {
    await PostsCategory.create({ categoryId, postId: dataValues.id });
  });

  if (dataValues && postCategoryCreated) {
    await t.commit();
    return dataValues;
  } 
    await t.rollback();
    throw errorConstrucor(500, 'Sequelize operation not performed');
};
 
const createBlogPost = async (blogPost, userId) => {
  const { error } = userSchema.validate(blogPost);

  if (error) throw errorConstrucor(400, error.message); 

  const existsCategory = await Category.findAll({
    where: { id: blogPost.categoryIds },
  });

  if (existsCategory.length === 0) {
    throw errorConstrucor(400, '"categoryIds" not found');
  }

  const dataValues = await handleTransaction(blogPost, userId);
  
  return dataValues;
};

const getAllBlogPost = async () => {
  const blogPost = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return blogPost;
};

const getBlogPostById = async (id) => {
  const blogPost = await BlogPost.findOne({ where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } }, 
    ],
  });

  if (!blogPost) throw errorConstrucor(404, 'Post does not exist'); 

  return blogPost;
};

const updateBlogPost = async (id, post, userIdPost) => {
  if (post.categoryIds) throw errorConstrucor(400, 'Categories cannot be edited');

  const { error } = userSchema.validate({ categoryIds: [], ...post });

  if (error) throw errorConstrucor(400, error.message);

  const userFind = await BlogPost.findOne({ where: { id },
    include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } }] });

  if (userFind.userId !== userIdPost) throw errorConstrucor(401, 'Unauthorized user');

  const [updatePost] = await BlogPost.update({ 
    title: post.title, content: post.content }, { where: { id } });

  if (!updatePost) throw errorConstrucor(404, 'Post not found');

  const blogPost = await BlogPost.findOne({ where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } }, 
    ],
  });

  const { title, content, userId, categories } = blogPost;

  return { title, content, userId, categories };
};

const deleteBlogPost = async (id, userIdPost) => {
  const post = await BlogPost.findOne({ where: { id },
    include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } }] });
  
  if (!post) throw errorConstrucor(404, 'Post does not exist');

  if (post.userId !== userIdPost) throw errorConstrucor(401, 'Unauthorized user');

  const deletePost = await BlogPost.destroy({ where: { id } });

  return deletePost;
};

const searchBlogPost = async (searchQuery) => {
  const blogPost = await BlogPost.findAll({
    where: {
      [Op.or]: [
       { title: { [Op.like]: `%${searchQuery}%` } },
       { content: { [Op.like]: `%${searchQuery}%` } },
      ],
    },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } }, 
    ],
  });

  if (!blogPost) throw errorConstrucor(404, 'Posts does not exist'); 

  return blogPost;
};

module.exports = {
  createBlogPost,
  getAllBlogPost,
  getBlogPostById,
  updateBlogPost,
  deleteBlogPost,
  searchBlogPost,
};
