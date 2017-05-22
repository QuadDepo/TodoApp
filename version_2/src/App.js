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
      api: [],
      content: "Home"
    };
  this.handleChangeContent = this.handleChangeContent.bind(this);

  }
  handleChangeContent(page){
    // console.log(page);
    // console.log(this.state.content);
    this.setState({content: page})

  };
  getApi(){
    $.ajax({
      // https://jsonplaceholder.typicode.com/todos
      url: 'http://localhost:3004/TodoApp',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({api: data}, function(){
          // console.log(this.state);
        });
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }
    });
  }
  componentWillMount(){
  this.getApi();
      // console.log(this.state.content);
  }

  componentDidMount(){
    this.getApi();

  }
  handleAddTodo(){
    this.getApi()
  }
  handleDeleteTodo(id, name){
    $.ajax({
      // https://jsonplaceholder.typicode.com/todos
      url: 'http://localhost:3004/TodoApp/' + id,
      type: 'DELETE',
      dataType:'json',
      cache: false,
      success: function(data){
        console.log(data + " #"+id);
        console.log("de todo was" + name);
        $("#"+id).slideUp(300, () => {
                this.getApi();
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
        this.getApi();

      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }
    });
  }

  render() {
    return (
      <div className="App">
        <Content api={this.state.api} getContent={this.state.content} />
        <Menu changeContent={this.handleChangeContent} />
      </div>
    );
  }
}

export default App;
