import React, {Component} from 'react';
import $ from 'jquery';
class Menu extends Component {
  constructor(props) {
    super(props)
    this.state ={
      menuItems: [
        {
          id: 1,
          name: "Home",
          icon: "fa fa-list-ul",
          active: true
        },
        {
          id: 2,
          name: "Add",
          icon: "fa fa-plus-circle",
          active: false
        },
        {
          id: 3,
          name: "Stats",
          icon: "fa fa-bar-chart",
          active: false
        },
      ],
      itemActive: 'Home'
    }
  }
  componentDidMount(){
    $('#1').addClass('active');
  }
  onChangeContent(page, active, id){
    $('.active').removeClass('active');
    this.props.changeContent(page);
    $('#'+id).addClass('active');

  }
  render(){
    let menui;


    menui = this.state.menuItems.map(menu => {
      return(
        <div id={menu.id} key={menu.id} className="col-xs-4">
          <a onClick={this.onChangeContent.bind(this, menu.name, menu.active , menu.id)} className="menu-item">
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
