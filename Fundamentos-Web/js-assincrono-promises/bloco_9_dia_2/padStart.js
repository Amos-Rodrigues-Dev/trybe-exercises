const celNumber = '075982376635';
const ultimos3digitos = celNumber.slice(-3);
const numeroMascarado = ultimos3digitos.padStart(celNumber.length, '*');
console.log(numeroMascarado);