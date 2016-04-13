import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map( todo =>
      <Todo
        key={todo._id}
        {...todo}
        onClick={ () => onTodoClick(todo._id) }
      />
   )}
 </ul>
);

export default TodoList;