// Atividade 1 
// 1.1 - Crie uma rota POST /user/register que receba uma requisição que envie username , email e password no body da requisição, onde:
// (a) - username deve ter mais de 3 caracteres;
// (b) - email deve ter o formato email@mail.com;
// (c) - password deve conter no mínimo 4 caracteres e no máximo 8 (todos números);
// (d) - Para todos os casos não atendidos acima deve ser retornado o código de status e um JSON com uma mensagem de erro, ex: status 400 e { "message": "invalid data" } ;
// (e) - Caso tenha sucesso deve ser retornado uma resposta com o código de status e um JSON com uma mensagem de sucesso, ex: status 201 e { "message": "user created" } ;
const register = (req, res, _next) => {
  const { username, email, password } = req.body;

  const emailChar = /\S+@\S+\.\S+/

  if ( username.length <= 3
    || !emailChar.test(email)
    || password.length < 4
    || password.length >= 8) {
    return res.status(400).json({ message: "invalid data" });
  }

  return res.status(201).json({ message: "user created" });
}

module.exports = register;

// http POST :3000/user/register username=Amos email=email@mail.com password=12345