function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

function calendar() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const days = document.getElementById('days');
  for (let index = 0; index < dezDaysList.length; index += 1) {
    const daysList = dezDaysList[index];
    const daysLi = document.createElement('li');
    if (daysList === 24 | daysList === 31) {
      daysLi.innerHTML = daysList;
      daysLi.className = 'day holiday';
      days.appendChild(daysLi);
    } else if (daysList === 4 | daysList === 11 | daysList === 18) {
      daysLi.innerHTML = daysList;
      daysLi.className = 'day friday';
      days.appendChild(daysLi);
    } else if (daysList === 25) {
      daysLi.innerHTML = daysList;
      daysLi.className = 'day holiday friday';
      days.appendChild(daysLi);
    } else {
      daysLi.innerHTML = daysList;
      daysLi.className = 'day';
      days.appendChild(daysLi);
    }
  }
};
calendar();

function whatHolinday(Feriados) {
  const divBtns = document.querySelector('.buttons-container')
  const btnHoliday = document.createElement('button');
  btnHoliday.innerHTML = Feriados;
  btnHoliday.id = 'btn-holiday';
  divBtns.appendChild(btnHoliday);
}
whatHolinday('Feriados');

function custonBtn() {
  let btn = document.getElementById('btn-holiday');
  let daysHoliday = document.querySelectorAll('.holiday');
  let newColor = 'white';
  let oldColor = 'rgb(238, 238, 238)';

  btn.addEventListener('click', function () {
    for (let index = 0; index < daysHoliday.length; index += 1) {
      if (daysHoliday[index].style.backgroundColor === newColor) {
        daysHoliday[index].style.backgroundColor = oldColor;
      } else {
        daysHoliday[index].style.backgroundColor = newColor;
      }
    }
  });
};
custonBtn();

function fridayBtn(friday) {
  const btnContainer = document.querySelector('.buttons-container');
  const btnFriday = document.createElement('button');
  btnFriday.innerHTML = friday;
  btnFriday.id = 'btn-friday';
  btnContainer.appendChild(btnFriday);
}
fridayBtn('Sexta-feira');

function custonBtnFriday() {
  let btnFriday = document.getElementById('btn-friday');
  let dayFriday = document.getElementsByClassName('friday');
  let textFriday = 'Sextou!!!'
  const newFriday = [];
  btnFriday.addEventListener('click', function () {
    for (let key in dayFriday) {
      newFriday.push(dayFriday[key].innerHTML);
      if (dayFriday[key].innerHTML === textFriday) {
        dayFriday[key].innerHTML = newFriday[key];
      } else {
        dayFriday[key].innerHTML = textFriday;
      }
    };
  });
}
custonBtnFriday();

function overDay() {
  let days = document.querySelectorAll('.day');

  for (let index = 0; index < days.length; index += 1) {
    days[index].addEventListener('mouseover', function (event) {
      event.target.style.fontSize = '30px';
      event.target.style.fontWeight = '600';
      console.log(event.target);
    });
  }
};

function outDay() {
  let days = document.querySelectorAll('.day');
  for (let index = 0; index < days.length; index += 1) {
    days[index].addEventListener('mouseout', function (event) {
      event.target.style.fontWeight = '200';
      event.target.style.fontSize = '20px';
    });
  }
};
overDay();
outDay();

function goTarefa(tarefa) {
  let container = document.querySelector('.my-tasks');
  let content = document.createElement('span');
  content.innerText = tarefa;
  container.appendChild(content);
};
goTarefa('cozinhar');

function corLegenda(cor) {
  const myTasks = document.querySelector('.my-tasks')
  const taskContent = document.createElement('div');
  taskContent.className = 'task';
  taskContent.style.backgroundColor = cor;
  myTasks.appendChild(taskContent);
};
corLegenda('green');

function selectTask() {
  const divTaks = document.querySelector('.task');
  const status = divTaks.style.backgroundColor;

  divTaks.addEventListener('click', function () {
    if (divTaks.className === 'task') {
      divTaks.className = 'task selected';
      divTaks.style.backgroundColor = 'red';
    } else {
      divTaks.style.backgroundColor = status;
      divTaks.className = 'task';
    }
  });
};
selectTask();

function selectCorDay() {
  let selectedTask = document.getElementsByClassName('task selected');
  let taskDiv = document.querySelector('.day');
  let taskColor = taskDiv.style.color;
  let days = document.querySelector('#days');
  days.addEventListener('click', function (event) {
    let color = selectedTask[0].style.backgroundColor;
    let eventTargetColor = event.target.style.color;
    if (eventTargetColor === taskColor) {
      event.target.style.color = color;
    } else {
      event.target.style.color = taskColor;
    };
  });
};
selectCorDay();

function addTask() {
  let textInput = document.getElementById('task-input');
  let btnAdd = document.getElementById('btn-add');
  let ulTaskList = document.querySelector('.task-list');

  btnAdd.addEventListener('click', function () {

    if (textInput.value === '') {
      alert("Necessário digitar um novo compromisso!")
    }
    let liTask = document.createElement('li');
    liTask.innerHTML = textInput.value;
    ulTaskList.appendChild(liTask);
  })
  textInput.addEventListener('keyup', function (event) {
    if (event.keyCode === 13 && textInput.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = textInput.value;
      ulTaskList.appendChild(newLi);
      textInput.value = '';
    }
  });
};
addTask();

