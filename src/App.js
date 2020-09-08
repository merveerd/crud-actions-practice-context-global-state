import React, { Component } from "react";
import Users from './Users'
import AddUser from './AddUsers'
class App extends Component {
  render(){
      return (
          <div>
              <Users />
              <AddUser />
          </div>

      )
  }
}

export default App;
