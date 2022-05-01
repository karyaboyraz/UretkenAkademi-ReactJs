import React, { Component } from "react";
import "./UserCard.css";

export default class UserCard extends Component {
  render() {
    const { name, username, email, phone, website } = this.props.user;
    const { catchPhrase } = this.props.user.company;
    const { city } = this.props.user.address;

    return (
      <div className="container text-light">
        <div className="card p-4">
          <div className="align-items-center">
            <span>
              <h4 className="mt-2">{name}</h4>
            </span>
            <div>
              <i className="fa mx-2 fa-facebook"></i>
              <i className="fa mx-2 fa-linkedin"></i>
              <i className="fa mx-2 fa-twitter"></i>
            </div>
          </div>
          <div className="dropdown-divider my-3 mx-5"></div>
          <div className="d-flex justify-content-between">
            <label>Username:</label>
            <span>{username}</span>
          </div>
          <div className="d-flex justify-content-between">
            <label>E-mail:</label>
            <a href={"tel:"+ email}>{email}</a>
          </div>
          <div className="d-flex justify-content-between">
            <label>Phone:</label>
            <a href={"tel:"+ phone}>{phone}</a>
          </div>
          <div className="d-flex justify-content-between">
            <label>Website:</label>
            <div>{website}</div>
          </div>
          <div className="d-flex justify-content-between">
            <label>City:</label>
            <div>{city}</div>
          </div>
          <div className="dropdown-divider my-3"></div>
          <div className="text-center">
            <div className="h5">{this.props.user.company.name}</div>
            <small>{catchPhrase}</small>
            <div className="d-flex justify-content-end mt-4">
              <button className="profileButton btn border-dark">
                Go to Profile <i className="fa fa-angle-right ml-2"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
