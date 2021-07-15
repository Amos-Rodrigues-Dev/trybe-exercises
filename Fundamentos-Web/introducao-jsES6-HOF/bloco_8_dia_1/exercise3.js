const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

function conference(rganswere, student) {
  let na = 0;
  let count = 0;
  for (let index = 0; index < rganswere.length; index += 1) {
    if (rganswere[index] === student[index]) {
      count += 1;
    } else if (student[index] === 'N.A') {
      na += 1;
    } else if (student[index] !== rganswere[index] && student[index] !== 'N.A') {
      count -= 0.5;
    }
  } return count;
}

const avaliation = (rightAnswers, studentAnswers, answersResult) => {
  
  const result = answersResult(rightAnswers, studentAnswers);
  
  if (result < 0) {
    return 0;
  } else {    
    return result;
  }
}

console.log(avaliation(rightAnswers, studentAnswers, conference));