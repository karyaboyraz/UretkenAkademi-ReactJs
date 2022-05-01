import React, { Component } from "react";
import "./UserList.css";
import UserCard from "../UserCard/UserCard";
import SkeletonCard from "../SkeletonCard/SkeletonCard";

export default class UserList extends Component {
  componentDidMount() {
    this.loading();
  }

  loading() {
    if (!this.state.loading) {
      setTimeout(() => {
        document.getElementById("userlist").classList.remove("d-none");
        document.getElementById("skeleton").classList.add("d-none");
        this.setState({ loading: true });
      }, 2000);
    }
  }
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  render() {
    return (
      <div className="my-5">
        <div id="skeleton" className="row m-5">
          {this.props.users.map((user) => (
            <div key={user.id} className="col-md-6 col-lg-4 col-xl-3 mt-5">
               <SkeletonCard></SkeletonCard>
            </div>
          ))}
        </div>
        <div id="userlist" className="row d-none m-5">
          {this.props.users.map((user) => (
            <div key={user.id} className="col-md-6 col-lg-4 col-xl-3 mt-5">
              <UserCard user={user}></UserCard>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
