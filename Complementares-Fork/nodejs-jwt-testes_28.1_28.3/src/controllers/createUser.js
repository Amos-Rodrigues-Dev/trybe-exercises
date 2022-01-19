const Model = require('../models/user');

module.exports = async (req, res) => {
  try {
    const newUser = req.body;
    const user = await Model.registerUser(newUser);

    if (!user) throw Error;

    res.status(201).json({ message: 'Novo usuário criado com sucesso', user });
  } catch (err) {
    res.status(500).json({
      message: 'Erro ao salvar o usuário no banco',
      error: err.message,
    });
  }
};
