import React, {Component} from 'react';


class StatsItem extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }

  }
  render(){
    return(
      <div className={this.props.col}>
        {this.props.statInfo}
      </div>
    )
  }
}

export default StatsItem
