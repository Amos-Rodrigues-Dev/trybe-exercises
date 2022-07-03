const containerAdd = document.getElementById('container-tasks');
const containerTasks = document.getElementById('container-tasks');
const containerButtons = document.getElementById('container-buttons');

const inputTasks = document.createElement('input');
inputTasks.id = 'texto-tarefa';
inputTasks.type = 'text';
inputTasks.placeholder = 'Digite aqui sua tarefa...';
inputTasks.size = '40';
inputTasks.className = 'item-container';
containerAdd.appendChild(inputTasks);

const btnCreateTasks = document.createElement('button');
btnCreateTasks.id = 'criar-tarefa';
btnCreateTasks.innerText = 'Adiconar';
// btnCreateTasks.style.marginLeft = '2em';
btnCreateTasks.title = 'Adiciona nova tarefa';
btnCreateTasks.className = 'item-container';
containerAdd.appendChild(btnCreateTasks);

const btnClearSelectioned = document.createElement('button');
btnClearSelectioned.id = 'remover-selecionado';
btnClearSelectioned.innerText = ' X ';
btnClearSelectioned.title = 'Excluir Seleção';
containerButtons.appendChild(btnClearSelectioned);

const btnMoveUp = document.createElement('button');
btnMoveUp.id = 'mover-cima';
btnMoveUp.innerHTML = '&#8593';
btnMoveUp.title = 'Move para cima';
containerButtons.appendChild(btnMoveUp);

const btnMoveDown = document.createElement('button');
btnMoveDown.id = 'mover-baixo';
btnMoveDown.innerHTML = '&#8595';
btnMoveDown.title = 'Move para baixo';
containerButtons.appendChild(btnMoveDown);

const btnClearCompleted = document.createElement('button');
btnClearCompleted.id = 'remover-finalizados';
btnClearCompleted.title = 'Remove tarefas riscadas';
btnClearCompleted.innerHTML = 'Limpar Concluídos';
containerButtons.appendChild(btnClearCompleted);

const btnClearAll = document.createElement('button');
btnClearAll.id = 'apaga-tudo';
btnClearAll.innerText = 'Limpar Lista';
btnClearAll.title = 'Exclui toda a lista';
containerButtons.appendChild(btnClearAll);

const btnSaveTasks = document.createElement('button');
btnSaveTasks.id = 'salvar-tarefas';
btnSaveTasks.innerText = 'Salvar Lista';
btnSaveTasks.title = 'Salva localmente a lista';
containerButtons.appendChild(btnSaveTasks);

const ordemList = document.createElement('ol');
ordemList.id = 'lista-tarefas';
containerTasks.appendChild(ordemList);

const corDefault = 'rgb(175, 175, 175)';

function clearSelect() {
  const listItem = document.getElementsByTagName('li');
  for (let index = 0; index < listItem.length; index += 1) {
    if (listItem[index].id === 'selected') {
      listItem[index].style.backgroundColor = 'transparent';
      listItem[index].id = 'deselected';
    }
  }
}

function selectioned(item) {
  const itemSelectioned = item;
  if (itemSelectioned.style.backgroundColor !== corDefault) {
    itemSelectioned.style.backgroundColor = corDefault;
    clearSelect();
    itemSelectioned.id = 'selected';
  } else {
    itemSelectioned.id = 'deselected';
    itemSelectioned.style.backgroundColor = 'transparent';
  }
}

function completed(item) {
  const itemCompleted = item;
  if (itemCompleted.className !== 'completed') {
    itemCompleted.className = 'completed';
  } else {
    itemCompleted.className = 'item-list';
  }
}

function createItemRestored(item, className, id, color) {
  const itemList = document.createElement('li');
  itemList.innerText = item;
  itemList.className = className;
  itemList.id = id;
  itemList.style.backgroundColor = color;
  ordemList.appendChild(itemList);
  itemList.addEventListener('dblclick', () => {
    completed(itemList);
  });
  itemList.addEventListener('click', () => {
    selectioned(itemList);
  });
}

function restoreList() {
  for (let index = 0; index < localStorage.length; index += 4) {
    if (localStorage[index] !== null) {
      createItemRestored(localStorage[index],
        localStorage[index + 1],
        localStorage[index + 2],
        localStorage[index + 3]);
    }
  }
}
restoreList();

btnCreateTasks.addEventListener('click', () => {
  const itemList = document.createElement('li');
  itemList.innerText = inputTasks.value;
  itemList.className = 'item-list';
  inputTasks.value = '';
  ordemList.appendChild(itemList);
  itemList.addEventListener('dblclick', () => {
    completed(itemList);
  });
  itemList.addEventListener('click', () => {
    selectioned(itemList);
  });
});

btnClearAll.addEventListener('click', () => {
  const listOrden = document.querySelectorAll('.item-list');
  const completedList = document.querySelectorAll('.completed');
  for (let index = 0; index < listOrden.length; index += 1) {
    listOrden[index].remove();
  }
  for (let index = 0; index < completedList.length; index += 1) {
    completedList[index].remove();
  }
  localStorage.clear();
});

btnClearCompleted.addEventListener('click', () => {
  const completeds = document.querySelectorAll('.completed');
  for (let index = 0; index < completeds.length; index += 1) {
    completeds[index].remove();
  }
});

btnSaveTasks.addEventListener('click', () => {
  localStorage.clear();
  let indexItem = 0;
  for (let index = 0; index < ordemList.children.length * 4; index += 4) {
    localStorage.setItem([index], ordemList.children[indexItem].innerText);
    localStorage.setItem([index + 1], ordemList.children[indexItem].className);
    localStorage.setItem([index + 2], ordemList.children[indexItem].id);
    localStorage.setItem([index + 3], ordemList.children[indexItem].style.backgroundColor);
    indexItem += 1;
  }
});

btnMoveUp.addEventListener('click', () => {
  const listItemUp = document.querySelector('#selected');
  if (listItemUp !== null && listItemUp.previousElementSibling) {
    listItemUp.parentNode.insertBefore(listItemUp, listItemUp.previousElementSibling);
  }
});

btnMoveDown.addEventListener('click', () => {
  const listItemDown = document.querySelector('#selected');
  if (listItemDown !== null && listItemDown.nextElementSibling) {
    listItemDown.parentNode.insertBefore(listItemDown.nextElementSibling, listItemDown);
  }
});

btnClearSelectioned.addEventListener('click', () => {
  const listItem = document.querySelector('#selected');
  if (listItem !== null) { listItem.remove(); }
});
