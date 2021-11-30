const readline = require('readline-sync');

function checkResultado(numberRandom, resposta) {
  if (numberRandom !== resposta) {
    return console.log(`Opa, não foi dessa vez. O número era ${numberRandom}`);
  }

  return console.log('Parabéns, número correto!');
};

function runGame() {
  const numberRandom = parseInt(Math.random() * 10);

  const resposta = readline.questionInt(
    'Digite um número entre 0 e 10 para saber se é o número que estou pensando: '
  );

  checkResultado(numberRandom, resposta);

  const novoGame = readline.question(
    'Deseja jogar novamente? (Digite s para sim, e qualquer outra coisa para não) '
  );

  if (novoGame !== 's') return console.log('Ok, até a próxima!');

  runGame();
};

runGame();

// {
//   // ...
//   "scripts": {
//     // ...
//     "sorteio": "node sorteio.js"
//   }
//   // ...
// }