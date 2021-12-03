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

// Exercise 5 - Crie uma função que lê e escreve vários arquivos ao mesmo tempo.

// const fs = require('fs').promises; // Importar o módulo fs e criar a função com o Array de strings

async function arrayToFile() {
  const strings = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];

  const createFilePromises = strings.map((string, index) => //Utilizar a função map para criar um Array de Promises, cada um criando um arquivo
    fs.writeFile(`./file${index + 1}.txt`, string)
  );

  await Promise.all(createFilePromises); // Utilizar Promise.all para aguardar a escrita de todos os arquivos

  const fileNames = [
    'file1.txt',
    'file2.txt',
    'file3.txt',
    'file4.txt',
    'file5.txt',
  ];

  const fileContents = await Promise.all(
    fileNames.map((fileName) => fs.readFile(fileName, 'utf-8')) // Realizar a leitura dos arquivos criados
  );

  const newFileContent = fileContents.join(' '); // Concatenar o conteúdo dos arquivos e criar o arquivo novo

  await fs.writeFile('./fileAll.txt', newFileContent);
};

// arrayToFile();

// Exercício 6 - Crie um script que mostre na tela o conteúdo de um arquivo escolhido pelo usuário:

// Para os exercícios abaixo, faremos uso de um módulo chamado readline , principalmente de seu método readline.question() . https://nodejs.org/api/readline.html
// Ele provê uma interface de leitura de dados inserida no terminal. Para mais informações, consulte a documentação .

// Pergunte à pessoa usuária qual arquivo ela deseja ler.
// Leia o arquivo indicado.
// Caso o arquivo não exista, exiba na tela "Arquivo inexistente" e encerre a execução do script.
// Caso o arquivo exista, escreva seu conteúdo na tela.

// Importamos os módulos que vamos utilizar: fs/promises e readline
// const fs = require('fs').promises;
const readline = require('readline');

// Para facilitar a solicitação de input, criamos uma função que utiliza o readline.question , mas retorna uma Promise
function question(message) {
  // Criamos uma variável rl para inicializar
  // o módulo readline, conforme visto na documentação
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    // No entanto, ao abrirmos a pergunta,
    // fazemos isso dentro de uma Promise.
    rl.question(message, (answer) => {
      rl.close();

      // Dessa forma, quando obtivermos a resposta,
      // podemos resolver nossa Promise com essa resposta.
      // Assim, quem chama nossa função não precisa
      // se preocupar com callbacks, e pode obter a resposta
      // através da Promise que retornamos.
      resolve(answer);
    });
  });
}

// Criamos a função que será responsável pelo fluxo todo. Vamos chamá-la de start :
async function start() {
  // Como nossa função `question` retorna uma Promise,
  // podemos utilzar `await` para obter a resposta.
  const fileName = await question('Digite o caminho do arquivo que deseja ler: ');

  try {
    // Tentamos realizar a leitura do arquivo
    const fileContent = await readFile(fileName, 'utf-8');
    // E exibir seu resultado na tela
    console.log(fileContent);
  } catch (err) {
    // Caso um erro aconteça, exibimos a mensagem de erro na tela.
    console.log('Arquivo inexistente');
  }
}

// start();

// Exercício 7 - Crie um script que substitua uma palavra por outra em um arquivo escolhido pela pessoa usuária:
// Pergunte à pessoa usuária qual arquivo deseja utilizar.
// Leia o arquivo.
// Caso o arquivo não exista, exiba um erro na tela e encerre a execução do script.
// Caso o arquivo exista, solicite a palavra a ser substituída.
// Solicite a nova palavra, que substituirá a palavra anterior.
// Imprima na tela o conteúdo do arquivo com as palavras já substituídas.
// Pergunte o nome do arquivo de destino.
// Salve o novo arquivo no caminho de destino.
// Dica: Utilize a classe RegExp do JS para substituir todas as ocorrências da palavra com replace(new RegExp(palavra, 'g'), novaPalavra) .

// Como no exercício anterior, começamos importando os módulos necessários e criando a função question .
// const fs = require('fs').promises;
// const readline = require('readline');

function question(message) {
  // Criamos uma variável rl para inicializar
  // o módulo readline, conforme visto na documentação
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    // No entanto, ao abrirmos a pergunta,
    // fazemos isso dentro de uma Promise.
    rl.question(message, (answer) => {
      rl.close();

      // Dessa forma, quando obtivermos a resposta,
      // podemos resolver nossa Promise com essa resposta.
      // Assim, quem chama nossa função não precisa
      // se preocupar com callbacks, e pode obter a resposta
      // através da Promise que retornamos.
      resolve(answer);
    });
  });
}

// Criamos a função start , responsável pelo fluxo, e perguntamos o nome do arquivo a ser lido
async function start() {
  const fileName = await question('Arquivo a ser lido: ');

  // Realizamos a leitura do arquivo, utilizando um catch para tratar erros.
  const originalContent = await fs.readFile(fileName, 'utf-8')
  // Caso aconteça um erro ao ler o arquivo
  .catch(err => {
    // Mostramos o erro na tela
    console.error(`Erro ao ler o arquivo: ${err}`);
    // E retornamos `false`.
    // O valor retornado aqui do catch é o valor que será armazenado
    // na variável `originalContent`.
    return false;
  })

  // Se `originalContent` estiver vazia ou contiver um valor falso,
  // quer dizer que ocorreu um erro na leitura do arquivo e não devemos prosseguir.
  // Utilizamos o `return` para encerrar a execução
  if (!originalContent) return;

  // Perguntamos quais palavras deverão ser substituídas, realizamos a substituição e exibimos o resultado na tela
  const oldWord = await question('Qual palavra deseja substituir? ');
  const newWord = await question('E qual palavra deve ficar em seu lugar? ');

  const newContent = originalContent.replace(new RegExp(oldWord, 'g'), newWord);

  console.log('Resultado da substituição: ');
  console.log(newContent);

}

// start();

// Exercício 8
// Escreva uma função que receba um número inteiro maior que 0 e retorne uma Promise.
// Se o número for múltiplo de 3, resolva a Promise com o valor "Fizz".
// Se o número for múltiplo de 5, resolva a Promise com o valor "Buzz".
// Se o número for múltiplo de 3 e 5, resolva a Promise com o valor "FizzBuzz".
// Caso contrário, rejeite a Promise com o valor do número.

function fizzBuzz(number) {
  return new Promise((resolve, reject) => {
    if (number % 3 === 0 && number % 5 === 0) {
      return resolve('FizzBuzz');
    }

    if (number % 3 === 0) {
      return resolve('Fizz');
    }

    if (number % 5 === 0) {
      return resolve('Buzz');
    }

    reject(number);
  });
}

fizzBuzz(1).catch(console.error);
fizzBuzz(3).then(console.log);
fizzBuzz(5).then(console.log);
fizzBuzz(15).then(console.log);