const jwt = require('jsonwebtoken');

const secret = 'seusecretdetoken';

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: 'Token não encontrado ou informado' });
  }

  try {
    const decoded = jwt.verify(token, secret);
    const user = decoded.data;
    req.user = user;
    return next();
  } catch (err) {
    err.message = 'Token não encontrado ou informado';
    err.statusCode = 401;
    return next(err);
  }
};
