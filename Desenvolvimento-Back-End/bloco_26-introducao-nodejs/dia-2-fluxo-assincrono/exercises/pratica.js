// Exercise 1 - Crie uma função que recebe três parâmetros retorna uma Promise .
function calculaSoma(num1, num2, num3) {
  return new Promise((resolve, reject) => {
    if (typeof(num1 && num2 && num3) !== "number") {
      reject(new Error("Informe apenas números"));
    }

    const result = (num1 + num2) * num3;

    if (result < 500 ) reject(new Error('valor muito baixo'));

    resolve(result);
  });
};

// Exercise 2 - Escreva um código para consumir a função construída no exercício anterior.
const num1 = Math.floor(Math.random() * 100 + 1);
const num2 = Math.floor(Math.random() * 100 + 1);
const num3 = Math.floor(Math.random() * 100 + 1);

// calculaSoma(num1, num2, num3)
//   .then(resp => console.log(`Resultado: ${resp}`))
//   .catch(err => console.log(`Erro: ${err.message}`));

// Exercise 3 - Reescreva o código do exercício anterior para que utilize async/await 
const calculaSomaSync = async () => {
  try {
    console.log(await calculaSoma(num1, num2, num3))
  } catch (err) {
    console.log("Erro: %s", err.message);
  }
}
// calculaSomaSync();

// Exercise 4 - Realize o download deste arquivo e salve-o como simpsons.json . Utilize o arquivo baixado para realizar os requisitos abaixo.
// Você pode utilizar then e catch , async/await ou uma mistura dos dois para escrever seu código. Procure não utilizar callbacks.

// (a) - Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome . Por exemplo: 1 - Homer Simpson .
const simpsons = require('./simpsons.json');

function printPerson(array) {
  array.forEach( person => console.log(`${person.id} - ${person.name}`));
}
// printPerson(simpsons);

// (b) - Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".
function checkId(id) {
  return new Promise((resolve, reject) => {
    const person = simpsons.find(person => Number(person.id) === id);

    (person) ? resolve(person) : reject(new Error('id não encontrado'));
  });
}
// checkId(11)
//   .then(resp => console.log(`${resp.id} - ${resp.name}`))
//   .catch(err => console.log("Erro: %s", err.message));

// (c) - Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.
const fs = require('fs').promises;

const simpsonsArray = require('./simpsons.json');
const simpsonsFilter = simpsonsArray
  .filter(person => person.id !== '10' && person.id !== '6');

// fs.writeFile('./simpsons.json', JSON.stringify(simpsonsFilter))
//   .then(() => console.log('Arquivo escrito com sucesso'))
//   .catch((err) => console.log(`Erro ao escrever no arquivo ${err.message}`))

// printPerson();

// (d) - Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json , contendo as personagens com id de 1 a 4.
function createNewSimpsons() {
  // const fs = require('fs').promises;
  const simpsonsData = require('./data.json');
  const simpsonsFilter = simpsonsData.filter(person => Number(person.id) < 5);

fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFilter), {flag: 'wx'})
  .then(() => console.log('Arquivo escrito com sucesso'))
  .catch((err) => console.log(`Erro ao escrever no arquivo ${err.message}`))
};
// createNewSimpsons();
// const simpsonsData = require('./simpsonsFamily.json');
// printPerson(simpsonsData);

// (e) - Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz .
function addSimpson(name) {
  const simpsonsData = require('./simpsonsFamily.json');
  const person = {'id':`${simpsonsData.length + 1}`, 'name':`${name}`};
  simpsonsData.push(person)
  fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsData), {flag: 'w'})
    .then(() => console.log('Arquivo escrito com sucesso'))
    .catch((err) => console.log(`Erro ao escrever no arquivo ${err.message}`))
};
// addSimpson("Nelson Muntz");

// (f) - Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json .
function alterPerson(origin, destin) {
  const simpsonsData = require('./simpsonsFamily.json');

  const simpsonAltered = simpsonsData.map(person => {
    if (person.name === origin) {
      person.name = destin
    }
    return person;
  });
  fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonAltered), {flag: 'w'})
    .then(() => console.log('Arquivo escrito com sucesso'))
    .catch((err) => console.log(`Erro ao escrever no arquivo ${err.message}`));
}
// alterPerson("Nelson Muntz", "Maggie Simpso");

function replaceNelson () {
  // Realizamos a leitura do arquivo
  return fs.readFile('./simpsonsFamily.json', 'utf-8')
    // Interpretamos o conteúdo como JSON
    .then((fileContent) => JSON.parse(fileContent))
    // Filtramos o array para remover o personagem Nelson
    .then((simpsons) => simpsons.filter((simpson) => simpson.id !== '8'))
    // Criamos um novo Array contendo a personagem Maggie
    .then((simpsonsWithoutNelson) => simpsonsWithoutNelson
      .concat([{ id: '8', name: 'Maggie Simpson' }]))
    // Escrevemos o novo array no arquivo
    .then((simpsonsWithMaggie) =>
      fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsWithMaggie)));
}

// Exercise 5 -