import React, {Component} from 'react';
// import {ModalContainer} from 'react-modal-dialog';
class TodoModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isShowingModal: false,
      todoEdit: ''
    }
    this.submitEdit = this.submitEdit.bind(this);
  }
   componentDidMount() {
     this.setState({todoEdit: this.props.todo.todoName});

   }
   handleClose = () => this.setState({isShowingModal: false})
   handleClick = () => this.setState({isShowingModal: true})
  //  logInput = () => console.log(this.refs.todoInput.value + " " + this.state.todoEdit);
  //  submitEdit = () => this.setState({todoEdit: this.refs.todoInput.value));
     submitEdit(name, id){
       this.setState({todoEdit: this.refs.todoInput.value});
      //  console.log(this.state.todoEdit);
       this.updateTodo(name, id);
       this.handleClose();
     }
     updateTodo(name, id){
       this.props.onEdit(name, id);
     }
    //  this.deleteTodo.bind(this, this.props.todo.id, this.props.todo.todoName)
   render() {

     return <div className="">
        <button onClick={this.handleClick} className="pull-right btn-activate btn btn-info btn-circle">
          <i className="fa fa-gear"></i>
        </button>
       {
         this.state.isShowingModal &&
         <div className="modal-container">
         <div onClick={this.handleClose} className="modal-background"></div>
            <div className="todoModal">
            <p className="modalText">{this.state.todoEdit}</p>
            <input value={this.state.todoEdit} ref="todoInput" onChange={event => this.setState({todoEdit: event.target.value})} />
            <button onClick={this.handleClose}>Close</button><button onClick={this.submitEdit.bind(this, this.state.todoEdit, this.props.todo.id)}>submit</button>
            </div>
            </div>
       }
     </div>;
   }
 }

export default TodoModal
