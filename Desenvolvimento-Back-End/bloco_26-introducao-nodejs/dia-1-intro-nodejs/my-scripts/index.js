const readline = require('readline-sync');

function defineScript() {
  const arquivo = readline.questionInt(
    `Qual arquivo executar:
  
    1 - sorteio
    2 - velocidade
    3 - imc
    
    => `
  );

  switch (arquivo) {
    case 1:
      require('./sorteio.js');
      break;
    case 2:
      require('./velocidade.js');
      break;
    case 3:
      require('./imc.js')
      break;
    default:
      break;
  }

  const tente = readline.question(
    'Deseja executar algum script novamente? (Digite s para sim, e qualquer outra coisa para não) '
  );

  if (tente !== 's') return console.log('Ok, até a próxima!');

  defineScript();

};


// defineScript();

// {
//   // ...
//   "scripts": {
//     // ...
//     "start": "node index.js"
//   }
//   // ...
// }


// Criamos uma lista dos scripts disponíveis
// Utilizamos objetos com `name` e `script` para facilitar a criação da lista que será exibida
const scripts = [
  { name: 'Calcular IMC', script: './imc.js' },
  { name: 'Calcular velocidade média', script: './velocidade.js' },
  { name: 'Jogo de adivinhação', script: './sorteio.js' },
];

// Iteramos sobre os scripts para criar a lista numerada
let mensagem = scripts
  .map((script, index) => `${index + 1} - ${script.name}`);
 
// Adicionamos uma linha a mais no começo da mensagem
mensagem.unshift('Escolha um número para executar o script correspondente');

// Juntamos todos os elementos em uma string, separando-os por uma quebra de linha
mensagem = mensagem.join('\n') + '\n=> ';


const scriptNumber = readline.questionInt(mensagem) - 1;

const script = scripts[scriptNumber];

if (!script) return console.log('Número inválido. Saindo');

// Chamamos o script selecionado
// Note que, no dia a dia, é mais comum utilizarmos outras formas de executar arquivos externos
// No entanto, para fins didáticos, o `require` nos atende por enquanto.
require(script.script);