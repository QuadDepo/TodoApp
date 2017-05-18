import React, { Component } from 'react';
import $ from 'jquery';

class TodoAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newAddTodo: {}
    }
  }
  onTodoAdd(e){
    let newTodo = {
      "todoName": this.refs.todo.value
    }
    console.log(newTodo);
    $.ajax({
    url: "http://localhost:3004/todos",
    type: "POST",
    // data: '{"todoName":'++'}',
    data: JSON.stringify(newTodo),
    contentType: "application/json",
    success: function (newAddTodo) {
        this.setState({newAddTodo:{
          newAddTodo
        }});
        console.log(this.state.newAddTodo);
        this.props.addProject();
    }.bind(this),
    error: function(xhr, status, err){
        console.log(err);
    }

  });
      e.preventDefault();
      console.log(this.refs.todo.value);
      this.setState({newTodo: this.refs.todo.value});
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
