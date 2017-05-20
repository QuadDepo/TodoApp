import React, {Component} from 'react';
import $ from 'jquery';
import './App.css';

import Todo from './components/Todo'
import TodoAdd from './components/TodoAdd'





class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    }
  }
  getTodos(){
    $.ajax({
      // https://jsonplaceholder.typicode.com/todos
      url: 'http://localhost:3004/todos',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({todos: data}, function(){
          console.log(this.state);
        });
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }
    });
  }
  componentWillMount(){
  this.getTodos();
  }

  componentDidMount(){
    this.getTodos();
  }
  handleAddTodo(){
    this.getTodos()
  }
  handleDeleteTodo(id, name){
    $.ajax({
      // https://jsonplaceholder.typicode.com/todos
      url: 'http://localhost:3004/todos/' + id,
      type: 'DELETE',
      dataType:'json',
      cache: false,
      success: function(data){
        console.log(data + " #"+id);
        console.log("de todo was" + name);
        $("#"+id).slideUp(300, () => {
                this.getTodos();
        });

      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }
    });
  }
  handleEditTodo(name, id){
    // console.log(name + " " + id);
    let newTodoName ={
      "todoName": name
    }
    $.ajax({
      // https://jsonplaceholder.typicode.com/todos
      url: 'http://localhost:3004/todos/' + id,
      type: 'PUT',
      dataType:'json',
      data: newTodoName,
      cache: false,
      success: function(data){
        console.log(JSON.stringify(newTodoName));
        this.getTodos();

      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }
    });
  }
  render() {
    return (
      <div className="App col-xs-12">
        <TodoAdd addProject={this.handleAddTodo.bind(this)}/>
        <Todo onEdit={this.handleEditTodo.bind(this)} onDelete={this.handleDeleteTodo.bind(this)} todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
