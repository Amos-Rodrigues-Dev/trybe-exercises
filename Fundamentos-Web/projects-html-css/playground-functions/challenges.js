function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;
  }
  return false;
}

function calcArea(base, height) {
  let result = (base * height) / 2;
  return result;
}

function splitSentence(phrase) {
  let sentence = [];
  sentence = phrase.split(' ');
  return sentence;
}

function concatName(stringArray) {
  let aux1 = stringArray[stringArray.length - 1];
  let aux2 = stringArray[0];
  let aux3 = ', ';
  return aux1 + aux3 + aux2;
}

function footballPoints(wins, ties) {
  let winner = wins * 3;
  let tied = ties * 1;
  let totalPoints = winner + tied;
  return totalPoints;
}

function highestCount(numbers) {
  let numMaior = 0;
  let indexMaior = 0;
  let contador = 0;
  for (let index in numbers) {
    if (numbers[indexMaior] < numbers[index]) {
      indexMaior = index;
      numMaior = numbers[indexMaior];
    }
  }
  for (let num of numbers) {
    if (numMaior === num) {
      contador += 1;
    }
  }
  return contador;
}

function catAndMouse(mouse, cat1, cat2) {
  let result = '';
  if (mouse - cat1 === 6 && cat2 - mouse === 12) {
    result = 'cat1';
  } else if (cat2 - mouse === 2 && cat1 - mouse === 3) {
    result = 'cat2';
  } else {
    result = 'os gatos trombam e o rato foge';
  }
  return result;
}

function fizzBuzz(divisivel) {
  let result = [];
  for (let key of divisivel) {
    if (key % 3 === 0 && key % 5 === 0) {
      result.push('fizzBuzz');
    } else if (key % 5 === 0) {
      result.push('buzz');
    } else if (key % 3 === 0) {
      result.push('fizz');
    } else {
      result.push('bug!');
    }
  }
  return result;
}

function encode(phrase) {
  let newPhrase = '';
  for (let key in phrase) {
    switch (phrase[key]) {
    case 'a':
      newPhrase += 1;
      break;
    case 'e':
      newPhrase += 2;
      break;
    case 'i':
      newPhrase += 3;
      break;
    case 'o':
      newPhrase += 4;
      break;
    case 'u':
      newPhrase += 5
      break;
    default:
      newPhrase += phrase[key]
    }
  }
  return newPhrase;
}

function decode(phrase) {
  let newPhrase = '';
  for (let key in phrase) {
    switch (phrase[key]) {
    case '1':
      newPhrase += 'a';
      break;
    case '2':
      newPhrase += 'e';
      break;
    case '3':
      newPhrase += 'i';
      break;
    case '4':
      newPhrase += 'o';
      break;
    case '5':
      newPhrase += 'u';
      break;
    default:
      newPhrase += phrase[key]
    }
  }
  return newPhrase;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
