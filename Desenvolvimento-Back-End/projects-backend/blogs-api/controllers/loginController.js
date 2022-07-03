const LoginService = require('../services/loginService');

const login = async (req, res, next) => {
  try {
    const userLogged = await LoginService.login(req.body);
    return res.status(200).json(userLogged);
  } catch (error) {
    console.log(`POST LOGIN -> ${error.message}`);
    return next(error);
  }
};

module.exports = {
  login,
};