import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayCom: ''
    }

  };
  componentDidMount(){
    this.setState({displayCom: this.props.getContent});
    console.log(this.state.displayCom);
  }
  componentDidMount(){
    this.setState({displayCom: this.props.getContent});
    console.log(this.state.displayCom);
  }


  render(){
    let com = null;
    if (this.state.displayCom == 'Damm') {
      com = <h1>{this.props.getContent}</h1>
    }else if (this.state.displayCom === 'Add') {
      com = <h1>Add</h1>
    }
    return(
      <div ref="comp">
      hoi
      {com}
      {this.props.getContent}
      </div>
    )
  }
}

export default Content
