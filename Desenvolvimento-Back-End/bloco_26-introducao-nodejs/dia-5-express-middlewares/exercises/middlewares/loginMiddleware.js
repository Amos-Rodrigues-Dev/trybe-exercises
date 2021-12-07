const crypto = require('crypto');
// Atividade 1 
// 1.2 - Crie uma rota POST /user/login que receba uma requisição que envie email / password no body da requisição e devolva um token como resposta, onde:
// (a) - O formato desse token retornado deve ser uma string aleatória com 12 caracteres;
// (b) - O email recebido deve ter o formato email@mail.com;
// (c) - O password deve conter no mínimo 4 caracteres e no máximo 8, todos números;
// (d) - Para todos os casos não atendidos acima deve ser retornado o código de status e um JSON com uma mensagem de erro, ex: status 400 e { "message": "email or password is incorrect" }
// (e) - Caso tenha sucesso deve ser retornado uma resposta com o código de status e um JSON com uma mensagem de sucesso, ex: status 200 e { "token": "86567349784e" } ;
const login = (req, res, _next) => {
  const { email, password } = req.body;

  const emailChar = /\S+@\S+\.\S+/;
  
  if (!emailChar.test(email)
    || password.length < 4
    || password.length >= 8) {
    return res.status(400).json({ message: "email or password is incorrect" });
  }

  // const getRandomstring = () => Math.random().toString(36).substr(2);
  // const generateToken = () => (getRandomstring() + getRandomstring()).substr(0, 12);
  // console.log(generateToken());

  const token = crypto.randomBytes(6).toString('hex');
  
  return res.status(201).json({ "token": token });
};

module.exports = login;

// http POST :3000/user/login email=amos@gmail.com password=12345

