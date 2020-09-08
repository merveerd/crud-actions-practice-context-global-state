import UserConsumer from "./context";
import React, { Component } from "react";
import User from "./User";
export default class Users extends Component {
  render() {
    return (
      <UserConsumer>
        {(value) => {
          const { users } = value; // value means this.state in context js so we accessed to users array
          return (
            <div>
              {users.map((user) => {
                return (
                  <User
                    key={user.id}
                    id={user.id}
                    name={user.name}
                    salary={user.salary}
                  />
                );
              })}
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}


