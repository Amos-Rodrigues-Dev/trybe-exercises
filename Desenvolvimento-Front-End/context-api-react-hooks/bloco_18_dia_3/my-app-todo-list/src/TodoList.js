import React from 'react';
import PropTypes from 'prop-types';

function TodoList({ tasks }) {
  return (
    <div>
      <h1>To-do:</h1>
      <ul>
        { tasks.map((todo, index) => <li key={ index }>{ todo }</li>)}
      </ul>
    </div>
  );
}

TodoList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TodoList;
