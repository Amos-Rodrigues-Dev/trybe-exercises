const containerInput = document.getElementById('container-input');
const containerText = document.getElementById('container-text');

const textInput = document.createElement('input');
textInput.id = 'carta-texto';
textInput.size = '80';
textInput.type = 'text';
textInput.placeholder = 'Digite sua carta..!';
containerInput.appendChild(textInput);

const letterView = document.createElement('p');
letterView.id = 'carta-gerada';
containerText.appendChild(letterView);

const btnCreateLetter = document.createElement('button');
btnCreateLetter.id = 'criar-carta';
btnCreateLetter.innerText = 'Gerar carta';
containerInput.appendChild(btnCreateLetter);

const styleGroup = ['newspaper', 'magazine1', 'magazine2'];
const lengthGroup = ['medium', 'big', 'reallybig'];
const rotationGroup = ['rotateleft', 'rotateright'];
const slopeGroup = ['skewleft', 'skewright'];

function stringRandom(word) {
  const itemClass = document.createElement('span');
  itemClass.classList.add(styleGroup[Math.floor(Math.random() * styleGroup.length)]);
  itemClass.classList.add(lengthGroup[Math.floor(Math.random() * lengthGroup.length)]);
  itemClass.classList.add(rotationGroup[Math.floor(Math.random() * rotationGroup.length)]);
  itemClass.classList.add(slopeGroup[Math.floor(Math.random() * slopeGroup.length)]);
  itemClass.innerText = word;
  letterView.appendChild(itemClass);
}

function removePhrase() {
  const word = letterView.children;
  if (word.length > 0) {
    for (let index = word.length - 1; index < word.length && index >= 0; index -= 1) {
      letterView.removeChild(word[index]);
    }
  }
}

function validLetter() {
  if (textInput.value === '' || textInput.value === ' ') {
    letterView.innerText = 'Por favor, digite o conteúdo da carta.';
  }
}

function stringCounter() {
  const count = letterView.children.length;
  document.querySelector('#carta-contador').innerText = count;
}

btnCreateLetter.addEventListener('click', () => {
  removePhrase();
  validLetter();
  let newPhrase = '';
  for (let index = 0; index <= textInput.value.length; index += 1) {
    if (textInput.value[index] === ' ' || index === textInput.value.length) {
      stringRandom(newPhrase);
      newPhrase = '';
    } else {
      newPhrase += textInput.value[index];
    }
  }
  stringCounter();
});
