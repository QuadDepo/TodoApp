import React, {Component} from 'react';

class Menu extends Component {
  constructor(props) {
    super(props)
    this.state ={
      menuItems: [
        {
          id: 1,
          name: "Home",
          icon: "fa fa-list-ul"
        },
        {
          id: 2,
          name: "Add",
          icon: "fa fa-plus"
        },
        {
          id: 3,
          name: "Stats",
          icon: "fa fa-bar-chart"
        },
      ],
      itemActive: 'Home'
    }
  }

  onChangeContent(page){
    this.props.changeContent(page);
  }
  render(){
    let menui;
    menui = this.state.menuItems.map(menu => {
      return(
        <div key={menu.id} className="col-xs-4">
          <a onClick={this.onChangeContent.bind(this, menu.name)} className="menu-item">
            <i className={menu.icon}></i>
          </a>
        </div>
      )
    })
    return(
      <div className="row Menu">
        {menui}
      </div>
    )
  }
}


export default Menu
