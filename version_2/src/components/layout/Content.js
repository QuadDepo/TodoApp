import React,{Component} from 'react';
import TodoAdd from '../todo/TodoAdd';
import Todo from '../todo/Todo';
import User from  '../user/User';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: []
    }

  };


  render(){

    let com = null;
    let getContent = this.props.getContent;
    // console.log(getContent);
    if (getContent === 'Home') {
      com = <Todo getInfo={this.props.getInfo} />
    }else if (getContent === 'Add') {
        com = <TodoAdd />
    }else if (getContent === 'Profile') {
      com = <User userInfo={this.props.getInfo} />
    }

    return(
      <div className="col-xs-10 col-xs-offset-1">
      {com}

      </div>
    )
  }
}

export default Content
