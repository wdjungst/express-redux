import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import todos from './reducers/todos';
import filter from './reducers/filter';
import TodoApp from './containers/TodoApp';

const todoApp = combineReducers({ todos, filter });

ReactDOM.render(
  <Provider store={createStore(todoApp, applyMiddleware(ReduxThunk))}>
    <TodoApp />
  </Provider>
  , document.getElementById('content'));
