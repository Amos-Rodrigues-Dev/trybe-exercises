// Atividade 3:
// 5 - Crie uma rota GET /posts que deve trazer todos os posts cadastrados, onde:
// 1. Se não existir posts cadastrados retorne um array vazio e um status code, ex: status 200 e { "posts": [] } ;
// 2. Se existir posts cadastrados retorne um array com os posts e um status code;
const posts = [{ id: 1, postName: 'card1' }, { id: 2, postName: 'card2' }, { id: 3, postName: 'card3' }];

// const posts = undefined;

const postFinded = (_req, res, _next) => {

  if (!posts) return res.status(200).json({ "posts": [] });

  res.status(200).json(posts);
};

module.exports = postFinded;