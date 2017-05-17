import React, { Component } from 'react';

import TodoItem from './TodoItem';

class Todo extends Component {
  render() {
    let todoItems;
    if (this.props.todos) {
        todoItems = this.props.todos.map(todo => {
          return(
            // <li key={todo.id}>{todo.title}</li>
            <TodoItem key={todo.id} todo={todo} />
          );
        });
    }
    return (
      <div className="Todo">
        {todoItems}
      </div>
    );
  }
}

export default Todo;
