const readline = require('readline-sync');

const calculaVelicidadeMedia = () => {
  const distancia = readline.questionInt('Qual a distância? ');
  const tempo = readline.questionInt('Qual o tempo? ');

  const velociadeMedia = (distancia / tempo).toFixed(2);

  console.log(`Velocidade Média: ${velociadeMedia} m/s.`);
};

calculaVelicidadeMedia();

// {
//   // ...
//   "scripts": {
//     // ...
//     "velocidade": "node velocidade.js"
//   }
//   // ...
// }
