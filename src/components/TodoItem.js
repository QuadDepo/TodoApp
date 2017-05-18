import React, { Component } from 'react';

class TodoItem extends Component {
  deleteTodo(id, name){
    this.props.onDelete(id, name);


  }
  render() {
    return (
        <li id={this.props.todo.id} className="todoItem">
          <button className="pull-left btn btn-success btn-circle" onClick={this.deleteTodo.bind(this, this.props.todo.id, this.props.todo.todoName)}>  <i className="fa fa-check"></i></button>
          <span className="name">{this.props.todo.todoName}</span>
        </li>
    );
  }
}

export default TodoItem;
