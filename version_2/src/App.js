import React, {Component} from 'react';
import $ from 'jquery';


// import Todo from './components/Todo'
// import TodoAdd from './components/TodoAdd'
import Menu  from './components/layout/Menu';
import Content from './components/layout/Content';






class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      content: "Damm"
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
  handleChangeContent(page){
    console.log(page);
    // console.log(this.state.content);
    this.setState({content: page})

  }
  render() {
    return (
      <div className="App">
        <Content getContent={this.state.content} />
        <Menu changeContent={this.handleChangeContent.bind(this)} />
      </div>
    );
  }
}

export default App;
