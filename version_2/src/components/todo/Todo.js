import React, { Component } from 'react';

// import TodoItem from './TodoItem';

class Todo extends Component {
  componentDidMount() {


  }
  render() {
        console.log(this.props.getInfo);

    return (
      <div className="Todo">
        <ul>

        </ul>
      </div>
    );
  }
}

export default Todo;
