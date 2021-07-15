function betGame(check, result) {
  if (result === check) {
    return 'Parabéns você ganhou!';
  } else {
    return 'Tente novamente!'
  }
}

const drawGame = (num, callback) => {
  let draw = Math.ceil(Math.random() * 5);
  return callback(num, draw);
}

console.log(drawGame(2, betGame));