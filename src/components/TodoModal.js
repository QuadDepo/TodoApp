import React, {Component} from 'react';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';
class TodoModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowingModal: this.props.active
    }
  }

   handleClose = () => this.setState({isShowingModal: false})
   render() {
     console.log(this.props.active);
     return <div onClick={this.handleClick}>
       {
         this.state.isShowingModal &&
         <ModalContainer onClose={this.handleClose}>
           <ModalDialog onClose={this.handleClose}>
             <h1>{this.props.info.title} Content</h1>
             <p>Hallo</p>
           </ModalDialog>
         </ModalContainer>
       }
     </div>;
   }
 }

export default TodoModal
