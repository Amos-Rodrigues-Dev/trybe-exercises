function colorGenerator() {
  const colorRed = Math.floor(Math.random() * 255) + 1;
  const colorGreen = Math.floor(Math.random() * 255) + 1;
  const colorBlue = Math.floor(Math.random() * 255) + 1;
  const colorRGB = `(${colorRed} ${', '} ${colorGreen} ${', '} ${colorBlue})`;
  return colorRGB;
}

function scoreboard() {
  const answer = document.getElementById('answer');
  const text = document.createElement('span');
  text.innerText = 'Escolha uma cor';
  text.id = 'textPlacar';
  answer.appendChild(text);
}
scoreboard();

function viewResult() {
  const resultGame = document.getElementById('result-game');
  const resultPlacar = document.createElement('span');
  resultPlacar.id = 'score';
  resultPlacar.innerText = 0;
  resultGame.appendChild(resultPlacar);
}
viewResult();

let numberHits = 0;
function contHits(cont) {
  numberHits += parseFloat(cont);
  const resultGame = document.getElementById('score');
  resultGame.innerText = numberHits;
}

function validColor(circle) {
  const colorInitial = `rgb${document.getElementById('rgb-color').innerText}`;
  const text = document.getElementById('textPlacar');
  if (circle.style.backgroundColor === colorInitial) {
    text.innerText = 'Acertou!';
    contHits('3');
  } else {
    text.innerText = 'Errou! Tente novamente!';
  }
}

function circleGenerator() {
  const optionsColor = document.querySelector('.options-color');
  const numberColor = '6';
  for (let index = 0; index < numberColor; index += 1) {
    const colorCircle = colorGenerator();
    const circleColor = document.createElement('div');
    circleColor.classList = 'ball';
    circleColor.style.backgroundColor = `rgb${colorCircle}`;
    optionsColor.appendChild(circleColor);
    circleColor.addEventListener('click', () => {
      validColor(circleColor);
    });
  }
}
circleGenerator();

function generatorColorCompare() {
  const allCircle = document.querySelectorAll('.ball');
  const colorPlacar = document.getElementById('rgb-color');
  const index = Math.floor(Math.random() * allCircle.length);
  const color = allCircle[index].style.backgroundColor;
  colorPlacar.innerText = color.replace('rgb', '');
}
generatorColorCompare();

function clearGame() {
  const text = document.getElementById('textPlacar');
  text.innerText = 'Escolha uma cor';
  const allCircle = document.querySelectorAll('.ball');
  for (let index = 0; index < allCircle.length; index += 1) {
    allCircle[index].remove();
  }
}

function resetGame() {
  const containerGame = document.querySelector('#container-btn');
  const resetGameBtn = document.createElement('button');
  resetGameBtn.id = 'reset-game';
  resetGameBtn.innerText = 'Resetar o jogo/cores';
  containerGame.appendChild(resetGameBtn);
  resetGameBtn.addEventListener('click', () => {
    clearGame();
    circleGenerator();
    generatorColorCompare();
  });
}
resetGame();
