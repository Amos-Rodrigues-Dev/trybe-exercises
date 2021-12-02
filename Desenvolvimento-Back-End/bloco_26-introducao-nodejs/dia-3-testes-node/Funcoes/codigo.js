const fs = require("fs/promises");

// Exercício 2 : Implemente a função apresentada no exercício 1, garantindo que ela irá passar em todos os testes que você escreveu.
function verificaNumeros(number) {
  if (number > 0) return "positivo";
  if (number < 0) return "negativo";
  if (isNaN(number)) return "o valor deve ser um número" // Exercício 3 Adicione à função um tratamento para casos em que o parâmetro informado não seja do tipo Number .
  return "neutro"
  // if (typeof numero !== 'number') {
  //   return 'o parâmetro deve ser um número';
  // }
}

function escreveArquivo(arquivo, conteudo) {
  return fs.writeFile(arquivo, conteudo, { flag: "wx" })
    .then(()=> {
      return "ok"
    })
    .catch(() => {
      return null;
    } )
};

module.exports = {
  verificaNumeros,
  escreveArquivo
};