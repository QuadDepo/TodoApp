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

          <div className="todoName">
          <span>{this.props.todo.todoName}</span>
          </div>
          <div className="btn-group btns-actions">
          <button className="btn btn-action-done btn-success" onClick={this.deleteTodo.bind(this, this.props.todo.id, this.props.todo.todoName)}>  <i className="fa fa-check"></i></button>
          <TodoModal modalDelete={this.deleteTodo.bind(this)} onEdit={this.editTodo.bind(this)} todo={this.props.todo} />

          </div>
        </li>
    );
  }
}

export default TodoItem;
