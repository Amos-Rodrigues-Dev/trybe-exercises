const { default: axios } = require('axios');

const CIDADES = {
  iacu: {
    cep: '46.860-000',
  },
  itaberaba: {
    cep: '46.880-000',
  },
  valadares: {
    cep: '35.020-690',
  },
};

function validaCEP(cep) {
  const regexCEP = /^[0-9]{2}.[0-9]{3}-[0-9]{3}$/;

  return regexCEP.test(cep);
}

function consultaCEP(cidade, service) {
  const { cep } = CIDADES[`${cidade}`];

  const valida = validaCEP(cep);

  let cepTratado;

  if (valida) {
    cepTratado = cep.replace(/[^\d]+/g, '');
    service(cepTratado);
  }
}

async function brasilAPI(cep) {
  const URL = `https://brasilapi.com.br/api/cep/v1/${cep}`;

  const request = await axios.get(URL);
  console.log(request.data);
}

async function viaCEP(cep) {
  const URL = `https://viacep.com.br/ws/${cep}/json/`;

  const request = await axios.get(URL);
  console.log(request.data);
} 

// consultaCEP('valadares', brasilAPI);

consultaCEP('valadares', viaCEP);

module.exports = {
  consultaCEP,
  brasilAPI,
  viaCEP,
};