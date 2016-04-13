import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo, getVisible } from './actions';
import TodoList from './TodoList';

const mapStateToProps = (state) => {
  return {
    todos: getVisible(state.todos, state.filter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id));
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList;