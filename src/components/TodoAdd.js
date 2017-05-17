import React, { Component } from 'react';
import $ from 'jquery';

class TodoAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: {}
    }
  }
  onTodoAdd(e){
    $.ajax({
    url: "http://localhost:3004/todos",
    type: "POST",
    data: '{"todoName": "hallo"}',
    contentType: "application/json",
    success: function (data) {
        console.log(data);
    }.bind(this),
    error: function(xhr, status, err){
        console.log(err);
    }
  });
      e.preventDefault();
      console.log(this.refs.todo.value);
      this.refs.todo.value = "";
  }
  render() {
    return (
      <div>
      <form onSubmit={this.onTodoAdd.bind(this)}>
        <input type="text" ref="todo" />
        <input type="submit" value="submit" />
        </form>
      </div>
    )
  }
}

export default TodoAdd;
