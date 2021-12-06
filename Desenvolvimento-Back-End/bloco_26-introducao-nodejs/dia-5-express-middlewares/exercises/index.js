const express = require('express');
const crypto = require('crypto');
const axios = require('axios').default;

const app = express();

app.use(express.json());

// Atividade 1
// 1. Crie uma rota POST /user/register que receba uma requisição que envie username , email e password no body da requisição, onde:
app.post('/user/register', (req, res, next) => {
  const { username, email, password } = req.body;

  if(username.length <= 3 || email !== "email@mail.com" || password.length < 4 || password.length >= 8) {
    return res.status(400).json({ message: "invalid data" });
  }

  return res.status(201).json({ message: "user created" });
});


// 2. Crie uma rota POST /user/login que receba uma requisição que envie email / password no body da requisição e devolva um token como resposta, onde:
app.post('/user/login', (req, res, next) => {
  const { email, password } = req.body;
  
  if(email !== "email@mail.com" || password.length < 4 || password.length >= 8) {
    return res.status(400).json({ message: "email or password is incorrect" });
  }

  const token = crypto.randomBytes(12).toString('hex');
  
  return res.status(201).json({ "token": token });
});

// Atividade 2:
// 3. Crie uma rota GET /btc/price que receba uma requisição com um token na chave Authorization do headers da requisição e verifique se ele está correto, onde:
app.get('/btc/price', async (req, res, next) => {
  const token = req.headers.authorization;
  const tokenRegex = !/^[a-zA-Z0-9]{12}$/;
  
  if (!token) return res.status(401).json({ message: "email or password is incorrect" });

  const result = await axios.get('https://api.coindesk.com/v1/bpi/currentprice/BTC.json');

  console.log(result);

  return res.status(200).send(result);
});













app.listen(3000, () => console.log("Ouvindo na porta 3000"));