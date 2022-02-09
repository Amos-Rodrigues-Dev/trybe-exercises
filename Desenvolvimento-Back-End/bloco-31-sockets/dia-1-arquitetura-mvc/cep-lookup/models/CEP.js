const connection = require('./connection');
const apiService = require('../services/apiService');

const findCEP = async (cep) => {
  const [cepData] = await connection.execute(
    'SELECT uf, cidade, bairro, logradouro FROM cep_lookup.ceps WHERE cep = ?',
    [cep],
  );

  if (!cepData) return null;

  return cepData;
};

const saveCEP = async (cepData) => {
  const { uf, cidade, bairro, logradouro, cep } = cepData;

  await connection.execute(
    'INSERT INTO cep_lookup.ceps (uf, cidade, bairro, logradouro, cep) VALUES (?,?,?,?,?)',
    [uf, cidade, bairro, logradouro, cep],
  );
};

const isValid = (cep) => cep && cep.match(/^\d{5}-?\d{3}$/);

const lookup = async (cep) => {
  if (!isValid(cep) && !cep) throw new Error('CEP inválido');

  const cepData = await findCEP(cep);

  if (cepData.length > 0) return cepData;

  const newCep = await apiService.findCEP(cep);

  await saveCEP(newCep);

  return newCep;
};

module.exports = {
  lookup,
};
