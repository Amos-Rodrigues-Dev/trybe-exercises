const axios = require('axios');
const ENDPOINTEXTERNALAPI = 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json';
// Atividade 2:
// 2.3. Crie uma rota GET /btc/price que receba uma requisição com um token na chave Authorization do headers da requisição e verifique se ele está correto, onde:
// (a) - O token deve ser uma string de 12 caracteres contendo letras e/ou números.
// (b) - Para todos os casos não atendidos acima deve ser retornado o código de status e um JSON com uma mensagem de erro, ex: status 401 e { "message": "invalid token" } ;
// (c) - Caso tenha sucesso deve ser feito um fetch em uma API externa de sua preferência e retorne os dados da API como resposta;
// Dicas: - Sugestão de API ( https://api.coindesk.com/v1/bpi/currentprice/BTC.json); - O token será passado pelo header da seguinte forma: authorization: 86567349784e; 
// - Utilize middlewares para validar o token; - Para fazer uma requisição a uma API externa utilizer o FETCH ou AXIOS, parecido com que vimos em Front-end;


const price = async (req, res, _next) => {
  const token = req.headers.authorization;
  const tokenRegex = /^[a-zA-Z0-9]{12}$/;

  console.log();
  
  if (!tokenRegex.test(token)) return res.status(401).json({ "message": "invalid token" } );

  const { data } = await axios.get(ENDPOINTEXTERNALAPI);

  return res.status(200).send(data);
};

module.exports = price;

// http GET :3000/btc/price Authorization:abc123dfg456