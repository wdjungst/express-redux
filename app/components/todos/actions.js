import $ from 'jquery';

export const fetchTodos = () => {
  return (dispatch) => {
    $.ajax({
      url: '/todos',
      type: 'GET'
    }).done( result => {
      dispatch(getTodos(result));
    });
  }
}

export const addTodo = (text) => {
  return (dispatch) => {
    $.ajax({
      url: '/todos',
      type: 'POST',
      data: { text: text, completed: false }
    }).done( result => {
      dispatch(todo('ADD_TODO', result));
    });
  }
}

export const toggleTodo = (id) => {
  return (dispatch) => {
    $.ajax({
      url: `/todos/${id}`,
      type: 'PUT'
    }).done( result => {
      dispatch(todo('TOGGLE_TODO', result))
    });
  }
}

export const getVisible = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter( t => t.completed );
    case 'SHOW_ACTIVE':
      return todos.filter( t => !t.completed );
  }
}

const todo = (type, item) => {
  return {
    type: type,
    text: item.text,
    completed: item.completed,
    _id: item._id
  }
}



const getTodos = (todos) => {
  return {
    type: 'GET_TODOS',
    todos
  }
}