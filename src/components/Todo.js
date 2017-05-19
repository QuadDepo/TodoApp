import React, { Component } from 'react';

import TodoItem from './TodoItem';



class Todo extends Component {
  deleteTodo(id, name){
    this.props.onDelete(id, name);
  }
  editTodo(name, id){
    this.props.onEdit(name, id);
  }
  render() {
    let todoItems;
    if (this.props.todos) {
        todoItems = this.props.todos.map(todo => {
          return(
              <TodoItem onEdit={this.editTodo.bind(this)} onDelete={this.deleteTodo.bind(this)} key={todo.id} todo={todo} />
          );
        });
    }
    return (
      <div className="Todo">
        <ul>
          {todoItems}
        </ul>
      </div>
    );
  }
}

export default Todo;
