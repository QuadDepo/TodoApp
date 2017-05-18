import React, { Component } from 'react';

class TodoItem extends Component {
  deleteTodo(id){
    this.props.onDelete(id);


  }
  render() {
    return (
        <li>

          {this.props.todo.todoName}
          <a href="#" onClick={this.deleteTodo.bind(this, this.props.todo.id)}>  <i className="fa fa-check"></i></a>
        </li>
    );
  }
}

export default TodoItem;
