import React,{Component} from 'react';
import TodoAdd from '../todo/TodoAdd';
import User from  '../user/User';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }

  };



  render(){

    let com = null;
    let getContent = this.props.getContent;
    // console.log(getContent);
    if (getContent === 'Home') {
        com = <div>this is home</div>
    }else if (getContent === 'Add') {
        com = <TodoAdd />
    }else if (getContent === 'Profile') {
      com = <User userInfo={this.props.api} />
    }

    return(
      <div className="col-xs-10 col-xs-offset-1">
      {com}
      </div>
    )
  }
}

export default Content
