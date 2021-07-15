// PARTE I - Onjetos

// let info = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// };

//Exercício 1
// console.log('Bem-vinda, ' + info.personagem + '!');

//Exercício 2
//info['recorrente'] = 'Sim';
// info.recorrente = 'Sim';
// console.log(info);

// Exercício 3
// for (let key in info) {
//   console.log(key);
// }

// Exercício 4
// for (let key in info) {
//   console.log(info[key]);
// }

// Exercício 5
// let info2 = {
//   personagem: 'Tio Patinhas',
//   origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
//   nota: 'O último MacPatinhas',
// };

// info2['recorrente'] = 'Sim';

// for (let key in info, info2) {

//   if (info[key] === info2[key]) {
//     console.log('Ambos recorrentes');
//     break;
//   }
//   console.log(info[key] + ' e ' + info2[key]);
// }


//PARTE II - Funções

//Exercício 1

// function verificaPalidrome(word) {

//   let newWord = '';

//   for (let index = word.length - 1; index >= 0; index -= 1) {

//     newWord += word[index];

//   }

//   if (newWord === word) {
//     return true;
//   } else {
//     return false;
//   }

// }

// let msg1 = verificaPalidrome('arara');
// let msg2 = verificaPalidrome('desenvolvimento');

// console.log('Primeira palavar: ' + msg1 + ' - ' + 'Segunda palavra: ' + msg2);

// Exercício 2 

// a)
// function greaterNumber(arrayNumer) {

//   let number = 0;

//   for (let index = 0; index < arrayNumer.length; index += 1) {

//     if (arrayNumer[index] > number) {
//       number = arrayNumer[index]
//     }

//   }

//   return arrayNumer.indexOf(number)
// }

// let newArray = [2, 3, 6, 7, 10, 1];

// let msg = greaterNumber(newArray);

// console.log(msg);

// b)
// function indiceDomaior(numeros) {

//   let indiceMaior = 0; 4

//   for (let indice in numeros) {

//     if (numeros[indiceMaior] < numeros[indice]) {

//       indiceMaior = indice;
//     }
//   }
//   return indiceMaior;
// }

// console.log(indiceDomaior([2, 3, 6, 7, 10, 1]));

// Esercício 3

// a)
// function indiceDomenor(numeros) {

//   let indiceMenor = 0;

//   for (let indice in numeros) {

//     if (numeros[indiceMenor] > numeros[indice]) {

//       indiceMenor = indice;
//     }
//   }
//   return indiceMenor;
// }

// console.log(indiceDomenor([2, 4, 6, 7, 10, 0, -3]));

// b)

// function indiceDoMenor(numeros) {

//   let indexMenor = 0;

//   for (let index = 0; index < numeros.length; index += 1) {

//     if (numeros[indexMenor] > numeros[index]) {

//       indexMenor = index;
//     }

//   }
//   return indexMenor;
// }

// let numeros = [2, 4, 6, 7, 10, 0, -3];

// console.log(indiceDoMenor(numeros));

// Exercício 4 

// function nomeMaior(nomes) {

//   let maiorNome = 0;

//   for (let key in nomes) {

//     if (nomes[maiorNome].length < nomes[key].length) {

//       maiorNome = key;
//     }

//   }

//   return nomes[maiorNome];
// }

// console.log(nomeMaior(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

// Exercício 5 

// function repeatNumber(numeros) {

//   let numReapet = 0;
//   let numeroRepetidor = 0;

//   for (let num of numeros) {

//     let numAtual = num;

//     let contador = 0;

//     for (let num of numeros) {

//       if (numAtual === num) {

//         contador += 1
//       }

//     }

//     if (contador > numReapet) {

//        numReapet = contador;

//        numeroRepetidor = numAtual;
//     }

//   }
//   return numeroRepetidor;
// }

// console.log(repeatNumber([2, 3, 2, 5, 8, 2, 3]));

// Exercício 6 

// function somaNumeros(n) {

//   let sum = 0;

//   for (let index = 0; index <= n; index += 1) {

//     sum += index;
//   }
//   return sum;
// }

// console.log(somaNumeros(5));

// Exercício 7

// function verificaFimPalavra(word, ending) {

//   if (word > ending) {

//     let final = '';

//     for (let index = word.length - 2; index < word.length; index += 1) {

//       final += word[index]
//     }

//     if (final === ending) {
//       return true;
//     } else {
//       return false;
//     }
//   }

// }

// console.log(verificaFimPalavra('trybe', 'be'));

// console.log(verificaFimPalavra('joaofernando', 'fernan'));

// Exercício Bônus 1


function numRomano(romano) {

  let algarismo = romano.toUpperCase();

  let algarismoRomanoValue = {
    I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000
  }

  let letraValue = [];

  for (let letra of algarismo) {

    for (let key in algarismoRomanoValue) {

      if (key == letra) {

        letraValue.push(algarismoRomanoValue[key]);

      }

    }

  }

  let letraValueFinal = 0;

  let value1 = '0';

  for (let key in letraValue) {

    if (letraValue[value1] > letraValue[key]) {

      letraValueFinal += letraValue[value1] + letraValue[key];
      value1 += 1;

    } else if (letraValue[value1] < letraValue[key]) {

      letraValueFinal -= letraValue[value1] - letraValue[key];
      value1 += 1;

    } else {

      letraValueFinal = letraValue[value1];
    }

  }


  return letraValueFinal;
}




console.log(numRomano('dc'));