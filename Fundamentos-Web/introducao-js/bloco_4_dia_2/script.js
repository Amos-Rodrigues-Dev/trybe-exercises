// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Exercício 1
/* for (let index = 0; index < numbers.length; index += 1) {
  let msg = numbers[index]
  console.log(msg);
} */

/* for (let number of numbers) {
  console.log(number);
} */

//execício 2
// let total = 0;

// for (let sum of numbers) {
//   total += sum;
// }
// console.log('Soma = ' + total);

//Exercício 3
// let total = 0;

// for (let sum of numbers) {
//   total += sum;
// }
// console.log('Soma = ' + total);
// console.log('Média = ' + total / numbers.length);

//Exercício 4 
/* let total = 0;

for (let sum of numbers) {
  total += sum;
}

let media = total / numbers.length;

if (media > 20) {
  console.log('Valor maior que 20');
} else {
  console.log('Valor menor que 20');
} */

//Exercício 5
//1 
// let numMaior = 0;

// for (let index = 0; index < numbers.length; index += 1) {
  
//   if (numMaior < numbers[index]){
//     numMaior = numbers[index];
//   } 
// }
// console.log('O maior número do array é ' + numMaior);

// 2
// for (let number of numbers) {

//   if (numMaior < number) {
//     numMaior = number;
//   }
// }
// console.log(numMaior);

//Exercício 6
// let oddNumber = 0;

// for (let number of numbers) {
//   if (number % 2 == 1) {
//     oddNumber += 1;
//   }
// }
// if (oddNumber > 1) {
//   console.log(oddNumber + ' número(s) ímpares');
// } else {
//   console.log('nenhum valor ímpar encontrado');
// }

//Exercício 7

// let numMaior = 0;

// for (let index = 0; index < numbers.length; index += 1) {
  
//   if (numMaior < numbers[index]){
//     numMaior = numbers[index];
//   } 
// }

// let numMenor = numMaior;

// for (let index = 0; index < numbers.length; index += 1) {

//   if (numMenor > numbers[index]) {
    
//     numMenor = numbers[index];
//   }
// }
// console.log('O menor número do array é ' + numMenor);

//Exercício 8

// let exemplo = [];

// for (let index = 1; index <= 25; index += 1) {
//   exemplo.push([index])
// }

// console.log(exemplo);


//Exercício 9

// let exemplo = [];

// for (let index = 1; index <= 25; index += 1) {
//   exemplo.push([index]);
// }

// for (let number of exemplo) {
//   let result = number / 2;
//   console.log(result);
// }

//Bônus nº 3 

// let newNumbers = [];

// for (let index = 0; index < numbers.length; index += 1) {

//   if (index + 1 == numbers.length) {
//     newNumbers.push((numbers[numbers.length - 1]) * 2);
//     break;
//   }
//   newNumbers.push(numbers[index] * numbers[index + 1]);
// }

// console.log(newNumbers);

// //Bônus 1 ordem crescente
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


// for (let index = 1; index < numbers.length; index += 1) {

//   for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {

//     if (numbers[index] < numbers[secondIndex]) {

//       let position = numbers[index];

//       numbers[index] = numbers[secondIndex];

//       numbers[secondIndex] = position;
//     }
//   }
// }

// console.log(numbers);

//Bônus 3 ordem crescente
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let index = 1; index < numbers.length; index += 1) {

//   for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {

//     if (numbers[index] > numbers[secondIndex]) {

//       let position = numbers[index];

//       numbers[index] = numbers[secondIndex];

//       numbers[secondIndex] = position;
//     }
//   }
// }

// console.log(numbers);

//Proposta do conteúdo seguinte

// let fruits = [3, 4, 10, 1, 12];
// let sum = 0;

// for (let index = 0; index < fruits.length; inde += 1) {
//   sum += fruits[index];
// }

// if (sum > 15) {
//   console.log(sum);
// } else {
//   console.log('valor menor que 15');
// }

// for (let fruit of fruits) {
//   sum += fruit;
// }

// if (sum > 15) {
//   console.log(sum);
// } else {
//   console.log('valor menor que 15');
// }
