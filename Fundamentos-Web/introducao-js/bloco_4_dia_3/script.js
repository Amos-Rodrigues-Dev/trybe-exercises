/* // bloco 4.3
// Exercício 1  */
// let n = 5;
// for (let index = 0; index < n; index += 1) {
//   let caixa = ' ';
//   for (let index2 = 0; index2 < n; index2 += 1) {
//     caixa += '*';
//   }
//   console.log(caixa);
// }

/* //Exercício 2 */
// let n = 5;
//   let caixa = ' ';
//   for (let index2 = 0; index2 < n; index2 += 1) {
//     caixa += '*';
//     console.log(caixa);
//   }

/* //Exercício 3 */

// let n = 5;

// let caixaA = ' ';
// let caixaB = '*';

// for (let indexA = 0; indexA < n; indexA += 1) {

//   caixaA = ' ';

//   for (let indexB = indexA + 1; indexB < n; indexB += 1) {
//     caixaA += ' ';
//   }
//   console.log(caixaA + caixaB);
//   caixaB += '*';
// }

/* // Exercício 4 */

// let n = 5;

// let caixaA = '';
// let caixaB = '';

// for (let indexA = 0; indexA < n; indexA += 1) {

//   caixaA = ' ';
//   caixaB += '*';

//   for (let indexB = indexA + 1; indexB < n; indexB += 1) {
//     caixaA += ' ';   
//   }

//   console.log(caixaA + caixaB);

//   caixaB += '*';

// }

/* //Exercício Bônus 6 */

// let n = 8;

// let divisores = 0;

// for (let index = 2; index <= n; index += 1) {

//   if (n % index === 0) {

//     divisores += 1;
//   }

// }

// if (divisores === 1) {
//   console.log(n + " é um numero primo");
// } else {
//   console.log(n + " não é um numero primo");
// }


// let n = 5;

// var numPrimo = [];

// for (let index = 2; index < n; index += 1) {

//   let divisores = 0;

//   for (let cont = 2; cont <=index; cont += 1) {

//     if (index % cont === 0) {

//       divisores += 1;

//     }
//   }  

//     if (divisores === 1) {

//       numPrimo.push(index);
//     }

// }

// console.log("Números primos entre 0 e " + n + ": " + numPrimo);

/* Exercício 5 */

// let n = 9;
// let middle = (n + 1) / 2;
// let controlLeft = middle;
// let controlRight = middle;
// let symbol = '*';
// for (let line = 1; line <= middle; line += 1) {
//   let outputLine = '';
//   for (let col = 1; col <= n; col += 1) {
//     if (col == controlLeft || col == controlRight || line == middle) {
//       outputLine += symbol;
//     } else {
//       outputLine += ' ';
//     }
//   }
//   controlLeft -= 1;
//   controlRight += 1;
//   console.log(outputLine);
// }


