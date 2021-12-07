const router = require('express').Router();

const { 
  register, 
  login,
  price 
}= require('../middlewares');

// Atividade 1 
// 1.1 - Crie uma rota POST /user/register que receba uma requisição que envie username , email e password no body da requisição, onde:
router.post('/user/register', register);

// 1.2 - Crie uma rota POST /user/login que receba uma requisição que envie email / password no body da requisição e devolva um token como resposta, onde:
router.post('/user/login', login)

// Atividade 2
// 2.1 - Crie uma rota GET /btc/price que receba uma requisição com um token na chave Authorization do headers da requisição e verifique se ele está correto, onde:
router.get('/btc/price', price)












module.exports = router;