let body = document.querySelector('body');
console.log(body);

let h1 = document.createElement('h1');
h1.className = 'title';
h1.innerText = 'Exercício 5.2 - JavaScript DOM';
body.appendChild(h1);

let divPai = document.createElement('div');
divPai.className = 'main-content';
body.appendChild(divPai);

let divFilho = document.createElement('div');
divFilho.className = 'center-centent title';
divPai.appendChild(divFilho);

let p = document.createElement('p');
p.innerText = 'Fantásco esse DOM, me sinto com super poderes rsrsrs!!!';
divFilho.appendChild(p);

let divFilhoEsquerdo = document.createElement('div');
divFilhoEsquerdo.className = 'left-content';
divPai.appendChild(divFilhoEsquerdo);

let divFilhoDireito = document.createElement('div');
divFilhoDireito.className = 'right-content';
divPai.appendChild(divFilhoDireito);

let image = document.createElement('img');
image.src = 'https://picsum.photos/200';
image.className = 'small-image';
divFilhoEsquerdo.appendChild(image);

const lista = ['one', 'two', 'three', 'for', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
const ul = document.createElement('ul');

for (let index = 0; index < lista.length; index += 1) {
 let numbers = lista[index];
 
 let listNumbers = document.createElement('li');
 listNumbers.innerHTML = numbers;

 ul.appendChild(listNumbers);
};

divFilhoDireito.appendChild(ul);

for (let index = 0; index < 3; index += 1) {
  let h3 = document.createElement('h3');
  h3.className = 'description';
  divPai.appendChild(h3);
}

divPai.removeChild(divPai.firstChild.nextSibling)

divFilhoDireito.style.marginRight = 'auto';

divPai.style.backgroundColor = 'rgb(3 107 82)';

divFilhoDireito.firstChild.removeChild(divFilhoDireito.firstChild.lastChild);
divFilhoDireito.firstChild.removeChild(divFilhoDireito.firstChild.lastChild);





