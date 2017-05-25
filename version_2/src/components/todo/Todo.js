import React, { Component } from 'react';

import TodoItem from './TodoItem';

class Todo extends Component {
  componentDidMount() {


  }
  render() {
    let todoItems;
    if (this.props.getInfo.length !== 0) {
      todoItems = this.props.getInfo.user.Todos.map(todo => {
        return(
            <TodoItem key={todo.id} todo={todo} />
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
