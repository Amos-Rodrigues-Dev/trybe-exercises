const containerArt = document.getElementById('container-art');
const tablePalet = document.createElement('table');
tablePalet.id = 'table-palet';
containerArt.appendChild(tablePalet);

const tableRow = document.createElement('tr');
tableRow.id = 'color-palette';
tablePalet.appendChild(tableRow);

const redColor1 = Math.floor(Math.random() * 255) + 1;
const greenColor1 = Math.floor(Math.random() * 255) + 1;
const blueColor1 = Math.floor(Math.random() * 255) + 1;
const randomColor1 = `rgb(${redColor1} ${greenColor1} ${blueColor1})`;

const redColor2 = Math.floor(Math.random() * 255) + 1;
const greenColor2 = Math.floor(Math.random() * 255) + 1;
const blueColor2 = Math.floor(Math.random() * 255) + 1;
const randomColor2 = `rgb(${redColor2} ${greenColor2} ${blueColor2})`;

const redColor3 = Math.floor(Math.random() * 255) + 1;
const greenColor3 = Math.floor(Math.random() * 255) + 1;
const blueColor3 = Math.floor(Math.random() * 255) + 1;
const randomColor3 = `rgb(${redColor3} ${greenColor3} ${blueColor3})`;

const tableDescription1 = document.createElement('td');
tableDescription1.className = 'color';
tableDescription1.style.backgroundColor = 'rgb(0 0 0)';
tableRow.appendChild(tableDescription1);
const tableDescription2 = document.createElement('td');
tableDescription2.className = 'color';
tableDescription2.style.backgroundColor = randomColor1;
tableRow.appendChild(tableDescription2);
const tableDescription3 = document.createElement('td');
tableDescription3.className = 'color';
tableDescription3.style.backgroundColor = randomColor2;
tableRow.appendChild(tableDescription3);
const tableDescription4 = document.createElement('td');
tableDescription4.className = 'color';
tableDescription4.style.backgroundColor = randomColor3;
tableRow.appendChild(tableDescription4);

const btnClear = document.createElement('button');
btnClear.id = 'clear-board';
btnClear.innerText = 'Limpar';
containerArt.appendChild(btnClear);

const inputPxels = document.createElement('input');
inputPxels.id = 'board-size';
inputPxels.type = 'number';
inputPxels.size = '10';
inputPxels.min = '1';
inputPxels.max = '50';
containerArt.appendChild(inputPxels);

const btnInput = document.createElement('button');
btnInput.id = 'generate-board';
btnInput.innerText = 'VQV';
containerArt.appendChild(btnInput);

const tablePixel = document.createElement('table');
tablePixel.className = 'table-pixel';
containerArt.appendChild(tablePixel);

function generatePixels(valuePixels) {
  for (let index = 1; index <= valuePixels; index += 1) {
    const tableRowPixels = document.createElement('tr');
    tableRowPixels.id = 'pixel-board';
    tablePixel.appendChild(tableRowPixels);
    for (let index2 = 1; index2 <= valuePixels; index2 += 1) {
      const pixelItem = document.createElement('td');
      pixelItem.className = 'pixel';
      tableRowPixels.appendChild(pixelItem);
    }
  }
}
generatePixels(inputPxels.size);

localStorage.setItem('corInitial', 'rgb(0, 0, 0)');
const { corInitial } = localStorage;
const elementInitial = document.querySelectorAll('.color');
for (let index = 0; index < elementInitial.length; index += 1) {
  const corFundo = elementInitial[index].style.backgroundColor;
  if (corFundo === corInitial) {
    elementInitial[index].className += ' selected';
  }
  elementInitial[index].addEventListener('click', () => {
    if (corFundo === corInitial) {
      localStorage.setItem('corInitial', corFundo);
    } else {
      localStorage.setItem('corInitial', corFundo);
      elementInitial[index - 1].className = 'color';
      elementInitial[index].className += ' selected';
    }
  });
}

const selectioned = document.querySelectorAll('.pixel');
for (let index = 0; index < selectioned.length; index += 1) {
  selectioned[index].addEventListener('click', () => {
    selectioned[index].style.backgroundColor = localStorage.corInitial;
  });
}

function insertWhite() {
  for (let index = 0; index < selectioned.length; index += 1) {
    selectioned[index].style.backgroundColor = 'white';
  }
}
insertWhite();

btnClear.addEventListener('click', () => {
  insertWhite();
});

function insertLintener() {
  const select = document.querySelectorAll('.pixel');
  for (let index = 0; index < select.length; index += 1) {
    select[index].addEventListener('click', () => {
      select[index].style.backgroundColor = localStorage.corInitial;
    });
  }
  insertWhite();
}

btnInput.addEventListener('click', () => {
  if (inputPxels.value === '') {
    alert('Board inválido!');
  } else if (inputPxels.value < inputPxels.size) {
    inputPxels.value = inputPxels.size;
    tablePixel.innerHTML = [];
    generatePixels(inputPxels.value);
  } else if (inputPxels.value > inputPxels.size) {
    tablePixel.innerHTML = [];
    generatePixels(inputPxels.value);
  }
  if (inputPxels.value > parseFloat(inputPxels.max)) {
    inputPxels.value = inputPxels.max;
    tablePixel.innerHTML = [];
    generatePixels(inputPxels.value);
  }
  insertLintener();
});
