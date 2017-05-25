import React, {Component} from 'react';
import Stats from './Stats';

class User extends Component {
  constructor(props) {
    super(props);
    this.state ={

    }
  }
  render(){
    console.log(this.props.userInfo);
    return(
      <div>
      name: {this.props.userInfo.user.name}
      <img onClick={this.changeUser} className="img-responsive img-circle" src={this.props.userInfo.user.user_img} />
      <Stats stat={this.props.userInfo.user.stats}/>
      </div>

    )
  }
}

export default User;
