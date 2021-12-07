const router = require('express').Router();

const { 
  register, 
  login,
  price,
  findPost,
  postFinded, 
  routerNotFound,
}= require('../middlewares');


// Atividade 1 
// 1 - Crie uma rota POST /user/register que receba uma requisição que envie username , email e password no body da requisição, onde:
router.post('/user/register', register);

// 2 - Crie uma rota POST /user/login que receba uma requisição que envie email / password no body da requisição e devolva um token como resposta, onde:
router.post('/user/login', login)

// Atividade 2
// 3 - Crie uma rota GET /btc/price que receba uma requisição com um token na chave Authorization do headers da requisição e verifique se ele está correto, onde:
router.get('/btc/price', price)

// Atividade 3
// 4 - Crie uma rota GET /posts/:id que receba uma requisição com um id como param route , verifique existência do post com aquele id, onde:
router.get('/posts/:id', findPost);

// 5 - Crie uma rota GET /posts que deve trazer todos os posts cadastrados, onde:
router.get('/posts', postFinded);

// 6 - Faça um middleware de erro. Caso tenha sido requisitada uma rota inexistente deve ser retornado o código de status e um JSON , ex: status 404 e { "message": "Opsss router not found" }
router.use('*', (req, _res, next) => next({ statusCode: 404, message: `Opsss router not found` }));
router.use(routerNotFound)

module.exports = router;