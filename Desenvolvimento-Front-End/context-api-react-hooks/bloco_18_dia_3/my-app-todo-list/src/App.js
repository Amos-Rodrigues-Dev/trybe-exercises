import { useState } from 'react';
import TodoList from './TodoList';
import useArray from './hooks/useArray';
import './App.css';

function App() {
  const [newInput, setNewInput] = useState('');
  const { addTodos, todos } = useArray();

  const handleInput = ({ target: { value } }) => {
    setNewInput(value)
  };

  const handleClick = () => {
    addTodos(newInput);
    setNewInput('')
  };
 
  return (
    <div className="App">
      <header className="App-header">

        <label htmlFor="task-input">
          Add a task:

          <input
            id="task-input"
            placeholder="task"
            name="newItem"
            value={ newInput }
            onChange={ handleInput }
          />

        </label>
        <button type="button" onClick={ handleClick }>Add</button>
        <TodoList tasks={ todos } />
      </header>
    </div>
  );
}

export default App;
