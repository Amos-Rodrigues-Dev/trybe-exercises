// Excercise 1 /
// let a, b, result;
// a = 5;
// b = 3;

// result = a + b;
// console.log(result);
// result = a - b;
// console.log(result);
// result = a * b;
// console.log(result);
// result = a / b;
// console.log(result);
// result = a % b;
// console.log(result);

// Excercise 2
// let a, b;
// a = 3;
// b = 2;

// if (a > b) {
//   console.log(a);
// } else {
//   console.log(b);
// }

// Excercise 3
// let a = 5;
// let b = 10;
// let c = 8;

// if (a > b && a > c) {
//   console.log(a);
// } else if (b > a && b > c) {
//   console.log(b);
// } else if (c > a && c > b) {
//   console.log(c);
// }

// Excercise 4
// let a = 0;

// if (a > 0) {
//   console.log("positivo");
// } else if (a < 0) {
//   console.log("negativo");
// } else {
//   console.log("zero");
// }

// Excercise 5
// let a = 10;
// let b = 7;
// let c = 2;

// if ((b - c) < a && a < (b + c)){
//   console.log("Um triangulo");
// } else if ((a - c) < b && b < (a + c)){
//   console.log("Um triangulo");
// } else if ((a - b) < c && c < (a + b)){
//   console.log("Um triangulo");
// } else {
//   console.log("Erro!");
// }

// Excercise 6
// let xadrez  = "TOrrE";
// let result = xadrez.toLowerCase();


// switch (result) {
//   case "rei":
//     console.log("O rei pode mover-se em todas as direções (horizontal, vertical e diagonal) somente uma casa de cada vez.");
//     break;
//   case "rainha":
//     console.log("A rainha move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças.");
//     break;
//   case "bispo":
//     console.log("O bispo move-se ao longo da diagonal. Não pode pular outras peças.");
//     break;
//   case "cavalo":
//     console.log("É a única peça que pode pular as outras. O movimento do cavalo é em forma de “L”, quer dizer, duas casas em sentido horizontal e mais uma na vertical ou vice-versa.");
//     break;
//   case "torre":
//     console.log("A torre movimenta-se pela vertical ou horizontal, mas não pode pular outras peças.");
//     break;
//   case "peão":
//     console.log("O peão movimenta-se apenas uma casa para frente e somente captura outras peças na diagonal. Opcionalmente, cada peão pode avançar duas casas no seu primeiro movimento do jogo.");
//     break;
//   default:
//     console.log("Erro: não é uma peça de xadrez válida");
// }

// Excercise 7
// let nota = 101;

// if (nota >= 90 && nota <= 100) {
//   console.log("A");
// } else if (nota >= 80 && nota < 90) {
//   console.log("B");
// } else if (nota >= 70 && nota < 80) {
//   console.log("C");
// } else if (nota >= 60 && nota < 70) {
//   console.log("D");
// } else if (nota >= 50 && nota < 60) {
//   console.log("E");
// } else if (nota < 50 && nota >= 0) {
//   console.log("F");
// } else {
//   console.log("Nota inválida!");
// }

// Excercise 8
// let number1 = 9;
// let number2 = 7;
// let number3 = 3;

// if (number1 % 2 === 0 || number2 % 2 === 0 || number3 % 2 === 0) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// Excercise 9
// let number1 = 2;
// let number2 = 10;
// let number3 = 22;

// if (number1 % 2 === 1 || number2 % 2 === 1 || number3 % 2 === 1) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// Excercise 10
// let valorCusto = 80;
// let valorVenda = 90;

// let quant = 1000;

// valorCusto = valorCusto * quant;
// valorVenda = valorVenda * quant;
// let custoTotal = valorCusto * 1.2;
// let lucro = valorVenda - custoTotal;

// if (valorCusto < 0 || valorVenda < 0) {
//   console.log("Erro: um ou mais valores negativo(s)");
// } else if (lucro > 0) {
//   console.log("Superavit!:) seu lucro foi de R$ " + lucro.toFixed(2));
// } else {
//   console.log("Deficit!:( não obteve lucro");
// }

// Excercise 11
// let salBruto, salBase, salLiq, inss, irrf, totalDesc;

// salBruto = 3000;
// //valida salBruto
// if (salBruto < 0) {
//   console.log("Erro: valor inválido"); 
// }
// //Calcula INSS
// if (salBruto <= 1556.94) {
//   inss = salBruto * 0.8;
// } else if (salBruto > 1556.94 && salBruto <= 2594.92) {
//   inss = salBruto * 0.9;
// } else if (salBruto > 2594.92 && salBruto <= 5189.82) {
//   inss = salBruto * 0.11;
// } else if (salBruto > 5189.82) {
//   inss = 570.88;
// } 

// // Calcula IRRF 
// let baseIrrf = salBruto - inss;
// if (baseIrrf <= 1903.98) {
//   irrf = 0;
// } else if (baseIrrf > 1903.98 && baseIrrf <= 2826.65) {
//   irrf = baseIrrf * 0.075 - 142.8;
// } else if (baseIrrf > 2826.65 && baseIrrf <= 3751.05) {
//   irrf = baseIrrf * 0.15 - 354.8;
// } else if (baseIrrf > 3751.05 && baseIrrf <= 4664.68) {
//   irrf = baseIrrf * 0.225 - 636,13;
// } else if (baseIrrf > 4667,68) {
//   irrf = baseIrrf * 0.275 - 869.36;
// }

// totalDesc = inss + irrf;
// salLiq = salBruto - totalDesc;

// console.log("Salário Bruto: " + salBruto.toFixed(2));
// console.log("----------------------------");
// console.log("INSS: -" + inss.toFixed(2));
// console.log("IRRF: -" + irrf.toFixed(2));
// console.log("Total: -" + totalDesc.toFixed(2));
// console.log("----------------------------");
// console.log("Salário Líquido: " + salLiq.toFixed(2));
// console.log("----------------------------");
 
