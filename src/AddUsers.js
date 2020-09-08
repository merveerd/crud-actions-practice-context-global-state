import UserConsumer from "./context";
import React, { Component } from "react";
import User from "./User";
var uniqid = require('uniqid');
export default class AddUser extends Component {
  state = {
    id: uniqid(),
    name: "",
    salary: "",
    department: "",
  };
  changeInput = (e) => {
    this.setState({
      //name = 'name'
      [e.target.name]: e.target.value, // [e.target.name] bracket icinde oldugundan icine string gelince yine state['gg'] olarak statete gunceleme saglar benim anladigim mantik
    });
  };
  addUser = (dispatch, e) => {
    const { name, salary, department } = this.state;
    const newUser = {
      name: name,
      salary: salary,
      department: department,
    };
    e.preventDefault();
    dispatch({ type: "ADD_USER", payload: newUser });
  };

  render() {
    const { name, salary, department } = this.state;
    return (
      <UserConsumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div>
              Add User
              <form onSubmit={this.addUser.bind(this, dispatch)}>
                <div>
                  <label htmlFor="name"> Name</label>
                  <input
                    name="name"
                    id="id"
                    placeholder="Enter Name"
                    value={name}
                    onChange={this.changeInput}
                  />
                </div>
                <div>
                  <label htmlFor="name"> Department</label>
                  <input
                    name="Deparment"
                    id="id"
                    placeholder="Enter Department"
                    value={department}
                    onChange={this.changeInput}
                  />
                </div>
                <div>
                  <label htmlFor="salary"> Salary</label>
                  <input
                    name="Salary"
                    id="id"
                    placeholder="Enter Salary"
                    value={salary}
                    onChange={this.changeInput}
                  />
                </div>

                <button type="submit">Add user</button>
              </form>
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}
