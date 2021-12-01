function calculaDivisao(num1, num2) {
  const promise = new Promise((resolve, reject) => {
    if (num2 == 0) reject(new Error("Não pode ser feito uma divisão por zero"));

    const resultado = num1 / num2;
    resolve(resultado);
  });

  return promise;
};

calculaDivisao(2, 0)
  .then(result => console.log("resultado: %s", result))
  .catch(error => console.log(`Error: ${error.message}`));
