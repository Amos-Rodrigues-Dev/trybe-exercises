import React, { Component} from 'react';

class TasksList extends Component { 
  constructor() {
    super();
    this.tasksList = ['Organizar Exercícios', 'Criar Portfólio', 'Preparar para aula'];
  }

  render() {
    return (
      <ul>
        {this.tasksList.map((task) => <li>{task}</li>)}
      </ul>
    )
  }
}

export default TasksList;