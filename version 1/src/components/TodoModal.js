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
     modalDelete(id, name){
       this.handleClose();
       this.props.modalDelete(id, name);
     }
    //  this.deleteTodo.bind(this, this.props.todo.id, this.props.todo.todoName)
   render() {

     return <div className="modal-outer">
        <button onClick={this.handleClick} className="btn-action-edit btn btn-info">
          <i className="fa fa-gear"></i>
        </button>
       {
         this.state.isShowingModal &&
         <div className="modal-container">
         <div onClick={this.handleClose} className="modal-background"></div>
            <div className="todoModal">
            <div className="inner-modal">
            <p className="modalText">{this.state.todoEdit}</p>
            <input  className="form-control" value={this.state.todoEdit} ref="todoInput" onChange={event => this.setState({todoEdit: event.target.value})} />
            <button className="close-modal btn btn-danger btn-circle" onClick={this.handleClose}><i className="fa fa-close"></i></button>
            <button className="btn pull-right btn-success"  onClick={this.submitEdit.bind(this, this.state.todoEdit, this.props.todo.id)}>Edit Modal</button>
            <button className="btn pull-right btn-danger" onClick={this.modalDelete.bind(this, this.props.todo.id, this.props.todo.TodoName)}>Delete</button>
            </div>
            </div>
            </div>
       }
     </div>;
   }
 }

export default TodoModal
