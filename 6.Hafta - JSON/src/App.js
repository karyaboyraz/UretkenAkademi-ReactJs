import "./App.css";
import React, { Component } from "react";
import Axios from "axios";
import UserList from "./Components/UserList/UserList";
export default class App extends Component {
  
  // getUser() {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((rsponse) => rsponse.json())
  //     .then((data) => this.setState({ users: data }));
  // }

  componentDidMount() {
    // this.getUser();
    Axios.get("https://jsonplaceholder.typicode.com/users").then((result) =>
        this.setState({          
          data: [...result.data],
        })
      );       
  }

  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  render() {
    return (
      <div>
        <UserList users={this.state.data}></UserList>
      </div>
    );
  }
}
