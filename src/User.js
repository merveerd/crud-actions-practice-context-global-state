import React, { Component } from "react";
import UserConsumer from "./context";
import PropTypes from "prop-types";

export default class User extends Component { //could be function based, we would use hooks to setState
  state = {
    isVisible: false,
  };

  static defaultProps = {
    name: "No Info",
    salary: "No Info",
    department: "No Info",
  };
  onClickEvent = (e) => {
      console.log('gg')
    this.setState({
   isVisible: !this.state.isVisible,
    });
  };

  onDeleteUser = (dispatch, e) => { // try without binding the parameter when you call it/doesnt work at all
      const {id} = this.props;
      //consumer.dispatch
      dispatch({type: 'DELETE_USER', payload: id}); //action is send as a parameter in dispatch function
  };

  render() {
    const { name, department, salary } = this.props; 
    const { isVisible } = this.state;
    return (
      <UserConsumer>
        {(value) => {
          const { dispatch } = value; //value means this.state . And dispatch will be sent as an argument to deletUser function below
          return (
            <div>
            <h2>{name}</h2> 
              <h4 onClick={this.onClickEvent}> Click1</h4>
              <i onClick={this.onDeleteUser.bind(this, dispatch)}>Click2</i> 
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}
