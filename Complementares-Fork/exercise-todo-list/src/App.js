import React, { Component } from 'react';
import InputTodo from './InputTodo';
import Item from './Item';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      listTodo: [],
      itemSelect:''
    };

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.addItemState = this.addItemState.bind(this);
  }

  addTodo(todo) {
    this.setState((state) => ({ listTodo: [...state.listTodo, todo] }));
  }

  removeTodo() {
    const { listTodo, itemSelect } = this.state;

    this.setState({ 
      listTodo: listTodo.filter((task) => (task !== itemSelect)),
      itemSelect: ''
    })
  }
  
  addItemState(item) {
    this.setState({ itemSelect: item })
  }

  render() {
    const { listTodo, itemSelect } = this.state;
    return (
      <div className="App">
        <InputTodo
          addTodo={(todo) => this.addTodo(todo)}
          removeTodo={ this.removeTodo }
        />
        {listTodo &&
          <ul>
            {
              listTodo.map((todo, index) => (
                <li key={index + 1}>
                  <Item content={todo} addItemState={ this.addItemState }/>
                </li>
              ))
            }
          </ul>
        }
        {
        <button 
          type="button" 
          onClick={ this.removeTodo }
          data-testid="id-remove"
          value="Remover"
          disabled={ itemSelect === ''}
        >
          Remover
        </button>
        }

      </div>
    );
  }
}

export default App;
