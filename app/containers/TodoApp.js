import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddTodo from '../components/todos/AddTodo';
import VisibleTodoList from '../components/todos/VisibleTodoList';
import Footer from '../components/todos/Footer';
import { fetchTodos } from '../components/todos/actions';
import $ from 'jquery';

class TodoApp extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.dispatch(fetchTodos());
  }

  render() {
    return(
      <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    )
  }
}

export default connect()(TodoApp);