import React, { Component } from "react";

const UserContext = React.createContext();

//provider, consumer

const reducer = (state, action) => {
  switch(action.type){
    case 'DELETE_USER':
      return {
        ...state, // mevcut state properties we are overwriting users property with defining it again below.
        users: state.users.filter (user => action.payload !== user.id) //new state will be returned
      }
      case 'ADD_USER':
        return{
          ...state,
          users: [...state.users, action.payload],
        }
        
      default:
        return state // in case of sending undefined type
  }
}

export class UserProvider extends Component {
  state = {
    users: [
      {
        id: 1,
        name: "Jessica",
        salary: "4000",
        deparment: "Tech",
      },
      {
        id: 2,
        name: "Mike",
        salary: "4000",
        deparment: "Tech",
      },
    ],

    dispatch: (action) => {
      this.setState((state) => reducer(state, action)); //updated state will be delivered by reducer function(reducer will return the new state) and here, we will update the state.
    }, //dispatch'i provider ile zaten appjs icindeki butun componentlere gecirmis olduk
  };

  render() {
    //  {this.props.children} means app.js as we surrrounded app.js by
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

const UserConsumer = UserContext.Consumer;

export default UserConsumer;
