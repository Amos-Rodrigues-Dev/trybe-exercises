const { User } = require('../models');

const findAll = async (req, res) => {
  try {
    const users = await User.findAll();

    return res.status(200).json(users);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

// Este endpoint usa o método findByPk do Sequelize para buscar um usuário pelo id.
const findById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);

    if (!user)
      return res.status(404).json({ message: 'Usuário não encontrado' });

    return res.status(200).json(user);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado!' });
  }
};

// Este endpoint usa o método findOne do Sequelize para buscar um usuário pelo id e email.
// URL a ser utilizada para o exemplo http://localhost:3000/user/search/1?email=aqui-o-email
const findOne = async (req, res) => {
  try {
    const { id } = req.params;
    const { email } = req.query;
    const user = await User.findOne({ where: { id, email } });

    if (!user)
      return res.status(404).json({ message: 'Usuário não encontrado' });

    return res.status(200).json(user);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

// Este endpoint usa o método create do Sequelize para salvar um usuário no banco.
const createUser = async (req, res) => {
  try {
    const { fullName, email, phone_num } = req.body;
    const newUser = await User.create({ fullName, email, phone_num });

    return res.status(201).json(newUser);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

// Este endpoint usa o método update do Sequelize para alterar um usuário no banco.
const updateUser = async (req, res) => {
  try {
    const { fullName, email, phone_num } = req.body;
    const { id } = req.params;

    const [updateUser] = await User.update(
      { fullName, email, phone_num },
      { where: { id } },
    );

    console.log(updateUser); // confira o que é retornado quando o user com o id é ou não encontrado;

    if (!updateUser)
      return res.status(404).json({ message: 'Usuário não encontrado!' });

    return res.status(200).json({ message: 'Usuário atualizado com sucesso!' });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

// Este endpoint usa o método destroy do Sequelize para remover um usuário no banco.
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await User.destroy({ where: { id } });

    console.log(deleteUser); // confira o que é retornado quando o user com o id é ou não encontrado;

    return res.status(200).json({ message: 'Usuário excluído com sucesso!' });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = {
  findAll,
  findById,
  findOne,
  createUser,
  updateUser,
  deleteUser,
};
