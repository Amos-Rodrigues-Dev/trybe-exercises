// const testingScope = escopo => {
//   if (escopo === true) {
//     let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//     console.log(ifScope);
//   } else {
//     const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//     console.log(elseScope);
//   }
// }

// testingScope(true);

// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// const sortOddsAndEvens = () => {
//   oddsAndEvens[0] = 2;
//   oddsAndEvens[1] = 3;
//   oddsAndEvens[2] = 4;
//   oddsAndEvens[3] = 7;
//   oddsAndEvens[4] = 10;
//   oddsAndEvens[5] = 13;

//   return oddsAndEvens;
// }

// const sortedArray = sortOddsAndEvens();
// console.log(`Os números ${sortedArray} se encontram ordenados de forma crescente !`);


/* Bônus array.sort() */
// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// const sortArrayBonus = array => {
//   const sortOddsAndEvens = array.sort((a, b) => a - b);
//   return sortOddsAndEvens;
// }

// const sortedArrayBonus = sortArrayBonus(oddsAndEvens);
// console.log(`Os números ${sortedArrayBonus} se encontram ordenados de forma crescente !`);


// array.sort com sort em uma linha.
// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// console.log(`Os números ${oddsAndEvens.sort((a, b) => a - b)} se encontram ordenados de forma crescente !`);

/* PARTE 2
Exercício 1
Factorial */

// const factorial = number => {
//   let result = 1

//   for (let index = 2; index <= number; index += 1) {
//       result *= index;
//   }

//   return result
// }

// console.log(factorial(4))

/* Recursiva */
// const factorial = number => number > 1 ? number * factorial(number - 1) : 1;
// console.log(factorial(5))



/* Exercício 2
Longestword */

// const longestWord = text => {
//   let wordArray = text.split(' ')
//   let maxLength = 0
//   let result = ''

//   for (const word of wordArray) {
//       if (word.length > maxLength) {
//           maxLength = word.length
//           result = word
//       }
//   }

//   return result
// }
// console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"));


/* 
Longestword com sort em uma linha. */

// const longestWord = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0]

// console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"))


/* Exercício 3 */

// <!DOCTYPE html>
// <body>
//   <div>
//     <span id ="text"></span>
//   </div>
//   <button id="button_test">click aqui!</button>
// </body>
// <script>
//   let clickCount = 0
//   let textToDisplay = document.getElementById("text")

//   document.getElementById("button_test")
//           .addEventListener("click", () => textToDisplay.innerHTML = clickCount += 1)
// </script>
// </html>


/* Exercício 4 */

// const array = ["Android", "iOS", "Architecture", "Teach", "Run"]

// function buildSkillsPhrase (paramOne) {
//     const fun1 = paramInner => (
//       `Tryber ${paramInner} aqui!

//       Tudo bem?`
//     )

//     let result = `${fun1(paramOne)}

//     Minhas cinco principais habilidades são:`


//     array.forEach((skill, index) =>
//     result = `${result}
//     - ${skill}`)

//     result = `
//     ${result}

//     #goTrybe
//     `

//     return result
   
// }

// console.log(buildSkillsPhrase("Lucas"))