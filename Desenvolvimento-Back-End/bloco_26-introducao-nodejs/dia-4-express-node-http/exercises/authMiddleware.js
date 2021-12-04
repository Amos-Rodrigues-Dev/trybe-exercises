module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || authorization.length !== 16) {
    return res.status(401).json({ message: 'Token inválido!' });
  }

  return next();
};

// ...

// app.get('/validateToken', function (req, res) {
//   const token = req.headers.authorization;
//   if (token.length !== 16) return res.status(401).json({message: 'Invalid Token!'})';

//   res.status(200).json({message: 'Valid Token!'})'
// });

// ...

// http :3001/validateToken Authorization:abc # vai devolver token inválido
// http :3001/validateToken Authorization:S6xEzQUTypw4aj5A # vai devolver token válido