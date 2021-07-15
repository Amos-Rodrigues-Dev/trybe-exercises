window.onload = function() {

const body = document.getElementById('body');
body.style.backgroundColor = localStorage.corFundo;
body.style.color = localStorage.corText;
const inputContainer = document.querySelector('.input-container');

function creatOptionsFundo() {

  const ulList = document.createElement('ul');
  ulList.id = 'coresFundo';
  ulList.style.textAlign = 'left';
  ulList.style.width = '15%';
  ulList.style.height = '120px';
  ulList.style.display = 'inline-block';

  let h3List = document.createElement('h3');
  h3List.innerText = 'Escolha a cor de fundo:';
  h3List.style.fontFamily = 'Arial';
  ulList.appendChild(h3List);

  inputContainer.appendChild(ulList);

  const liFirstColor = document.createElement('li');
  liFirstColor.className = 'fundoOption';
  liFirstColor.style.backgroundColor = '#dac292';
  ulList.appendChild(liFirstColor);
  
  const liSecondColor = document.createElement('li');
  liSecondColor.className = 'fundoOption';
  liSecondColor.style.backgroundColor = '#b5e7a0';
  ulList.appendChild(liSecondColor);

  const liThirdColor = document.createElement('li');
  liThirdColor.className = 'fundoOption';
  liThirdColor.style.backgroundColor = '#92a8d1';
  ulList.appendChild(liThirdColor);

  const ulListHover = document.getElementById('coresFundo');

  ulListHover.firstChild.nextSibling.addEventListener('mouseover', function(event){
    event.target.style.padding = '3px';
    event.target.style.transform = 'translateY(-10px)';
  })
  ulListHover.firstChild.nextSibling.addEventListener('mouseout', function(event){
    event.target.style.padding = '0';
    event.target.style.transform = 'translateY(0px)';
  })

  ulListHover.firstChild.nextSibling.nextSibling.addEventListener('mouseover', function(event){
    event.target.style.padding = '3px';
    event.target.style.transform = 'translateY(-10px)';
  })
  ulListHover.firstChild.nextSibling.nextSibling.addEventListener('mouseout', function(event){
    event.target.style.padding = '0';
    event.target.style.transform = 'translateY(0px)';
  })

  ulListHover.firstChild.nextSibling.nextSibling.nextSibling.addEventListener('mouseover', function(event){
    event.target.style.padding = '3px';
    event.target.style.transform = 'translateY(-10px)';
  })
  ulListHover.firstChild.nextSibling.nextSibling.nextSibling.addEventListener('mouseout', function(event){
    event.target.style.padding = '0';
    event.target.style.transform = 'translateY(0px)';
  })

  let memoryFundo = '';
  ulListHover.firstChild.nextSibling.addEventListener('click', function(event){
    body.style.backgroundColor = event.target.style.backgroundColor;
    memoryFundo = event.target.style.backgroundColor;
    localStorage.setItem('corFundo', memoryFundo);
  })
  ulListHover.firstChild.nextSibling.addEventListener('dblclick', function(event){
    body.style.backgroundColor = 'white';
    memoryFundo = body.style.backgroundColor;
    localStorage.setItem('corFundo', memoryFundo);
  })

  ulListHover.firstChild.nextSibling.nextSibling.addEventListener('click', function(event){
    body.style.backgroundColor = event.target.style.backgroundColor;
    memoryFundo = event.target.style.backgroundColor;
    localStorage.setItem('corFundo', memoryFundo);
  })
  ulListHover.firstChild.nextSibling.nextSibling.addEventListener('dblclick', function(event){
    body.style.backgroundColor = 'white';
    memoryFundo = body.style.backgroundColor;
    localStorage.setItem('corFundo', memoryFundo);
  })
  ulListHover.firstChild.nextSibling.nextSibling.nextSibling.addEventListener('click', function(event){
    body.style.backgroundColor = event.target.style.backgroundColor;
    memoryFundo = event.target.style.backgroundColor;
    localStorage.setItem('corFundo', memoryFundo);
  })
  ulListHover.firstChild.nextSibling.nextSibling.nextSibling.addEventListener('dblclick', function(event){
    body.style.backgroundColor = 'white';
    memoryFundo = body.style.backgroundColor;
    localStorage.setItem('corFundo', memoryFundo);
  })
}
creatOptionsFundo();

function creatOptionsText() {

  const ulList2 = document.createElement('ul');
  ulList2.id = 'coresText';
  ulList2.style.textAlign = 'left';
  ulList2.style.width = '15%';
  ulList2.style.height = '120px';
  ulList2.style.display = 'inline-block';

  let h3List2 = document.createElement('h3');
  h3List2.innerText = 'Escolha a cor do texto:';
  h3List2.style.fontFamily = 'Arial';
  ulList2.appendChild(h3List2);

  inputContainer.appendChild(ulList2);

  const liFirstColor2 = document.createElement('li');
  liFirstColor2.className = 'fundoOption';
  liFirstColor2.style.backgroundColor = '#034f84';
  ulList2.appendChild(liFirstColor2);
  
  const liSecondColor2 = document.createElement('li');
  liSecondColor2.className = 'fundoOption';
  liSecondColor2.style.backgroundColor = '#50394c';
  ulList2.appendChild(liSecondColor2);

  const liThirdColor2 = document.createElement('li');
  liThirdColor2.className = 'fundoOption';
  liThirdColor2.style.backgroundColor = '#c83349';
  ulList2.appendChild(liThirdColor2);

  const ulListHover2 = document.getElementById('coresText');

  ulListHover2.firstChild.nextSibling.addEventListener('mouseover', function(event){
    event.target.style.padding = '3px';
    event.target.style.transform = 'translateY(-10px)';
  })
  ulListHover2.firstChild.nextSibling.addEventListener('mouseout', function(event){
    event.target.style.padding = '0';
    event.target.style.transform = 'translateY(0px)';
  })

  ulListHover2.firstChild.nextSibling.nextSibling.addEventListener('mouseover', function(event){
    event.target.style.padding = '3px';
    event.target.style.transform = 'translateY(-10px)';
  })
  ulListHover2.firstChild.nextSibling.nextSibling.addEventListener('mouseout', function(event){
    event.target.style.padding = '0';
    event.target.style.transform = 'translateY(0px)';
  })

  ulListHover2.firstChild.nextSibling.nextSibling.nextSibling.addEventListener('mouseover', function(event){
    event.target.style.padding = '3px';
    event.target.style.transform = 'translateY(-10px)';
  })
  ulListHover2.firstChild.nextSibling.nextSibling.nextSibling.addEventListener('mouseout', function(event){
    event.target.style.padding = '0';
    event.target.style.transform = 'translateY(0px)';
  })

  let memoryText = '';
  ulListHover2.firstChild.nextSibling.addEventListener('click', function(event){
    body.style.color = event.target.style.backgroundColor;
    memoryText =  body.style.color;
    localStorage.setItem('corText', memoryText);
  })
  ulListHover2.firstChild.nextSibling.addEventListener('dblclick', function(event){
    body.style.color = 'black';
    memoryText = body.style.color;
    localStorage.setItem('corText', memoryText);
  })

  ulListHover2.firstChild.nextSibling.nextSibling.addEventListener('click', function(event){
    body.style.color = event.target.style.backgroundColor;
    memoryText =  body.style.color;
    localStorage.setItem('corText', memoryText);
  })
  ulListHover2.firstChild.nextSibling.nextSibling.addEventListener('dblclick', function(event){
    body.style.color = 'black';
    memoryText = body.style.color;
    localStorage.setItem('corText', memoryText);
  })
  ulListHover2.firstChild.nextSibling.nextSibling.nextSibling.addEventListener('click', function(event){
    body.style.color = event.target.style.backgroundColor;
    memoryText =  body.style.color;
    localStorage.setItem('corText', memoryText);
  })
  ulListHover2.firstChild.nextSibling.nextSibling.nextSibling.addEventListener('dblclick', function(event){
    body.style.color = 'black';
    memoryText = body.style.color;
    localStorage.setItem('corText', memoryText);
  })
}
creatOptionsText();

const alertInput = document.getElementById('nome-input');
const textInput = document.getElementById('text-input')

alertInput.addEventListener('click', function(event){
let msg = textInput.value;
  alert('Olá, ' + msg + '!')
}) 

}