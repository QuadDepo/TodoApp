import React, { Component } from 'react';
import TodoModal from './TodoModal';

class TodoItem extends Component {
  deleteTodo(id, name){
    this.props.onDelete(id, name);
  }
  editTodo(name, id){
      this.props.onEdit(name, id);
    }
  render() {
    return (
        <li id={this.props.todo.id} className="todoItem">
          <button className="pull-left btn btn-success btn-circle" onClick={this.deleteTodo.bind(this, this.props.todo.id, this.props.todo.todoName)}>  <i className="fa fa-check"></i></button>
          <div className="todoName">
          <span>{this.props.todo.todoName}</span>
          </div>
          <TodoModal onEdit={this.editTodo.bind(this)} todo={this.props.todo} />
        </li>
    );
  }
}

export default TodoItem;
