const promessa = new Promise(function (resolve, reject) {
  //   return reject('error');
  return resolve('ok');
});

// Pending: Estado inicial, assim que o Objeto da promessa é iniciado
// Fulfilled:  A promessa foi concluida com sucesso
// Rejected: A promessa foi rejeitada, houve um erro
// Settled: Seja com sucesso ou com erro, ela foi finalmente concluída

async function start() {
  try {
    const response = await promessa;
    console.log(response);
  } catch (error) {
    console.log(error);
  } finally {
    console.log('Sempre irei executar!');
  }
}

start();

// promessa
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .finally(function () {
//     console.log('sempre irei executar');
//   });
