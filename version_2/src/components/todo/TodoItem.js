import React,{Component} from 'react';


class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render(){
    return(
      <li>
        {this.props.todo.done}
      </li>
    )
  }

}