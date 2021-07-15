const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  // escreva seu código aqui
  return arrays.reduce((acc, curr) => acc.concat(curr), []);
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);

// O método concat() retorna um novo array contendo todos os arrays ou valores passados como parâmetro
// Exemplos:
// (1)
var num1 = [1, 2, 3];
var num2 = [4, 5, 6];
var num3 = [7, 8, 9];

// creates array [1, 2, 3, 4, 5, 6, 7, 8, 9]; num1, num2, num3 are unchanged
var nums = num1.concat(num2, num3);

console.log(nums);

// (1)
const alpha = ['a', 'b', 'c'];

// creates array ["a", "b", "c", 1, 2, 3], leaving alpha unchanged
const alphaNumeric = alpha.concat(1, [2, 3]);

console.log(alphaNumeric);