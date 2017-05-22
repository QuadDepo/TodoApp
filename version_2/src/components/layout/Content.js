import React,{Component} from 'react';
import TodoAdd from '../todo/TodoAdd';


class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }

  };



  render(){
    let com = null;
    let getContent = this.props.getContent;
    console.log(getContent);
    if (getContent === 'Home') {
        com = <div>this is home</div>
    }else if (getContent === 'Add') {
        com = <TodoAdd />
    }

    return(
      <div className="col-xs-10 col-xs-offset-1">
      {com}
      </div>
    )
  }
}

export default Content
