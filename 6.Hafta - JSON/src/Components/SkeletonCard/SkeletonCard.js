import React, { Component } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default class SkeletonCard extends Component {
  render() {
    return (
      <div className="container text-light">
        <div className="card p-4">
          <SkeletonTheme baseColor="#393e46" highlightColor="#222831">
            <Skeleton height={"25px"}/>
            <div className=" row">
              <div className="col-3">
                <Skeleton  height={"25px"}/>
              </div>
            </div>
            <div className="dropdown-divider my-3 mx-5"></div>
            <div className="row">
              <label className="col-4">Username:</label>
              <span className="col-8">
                <Skeleton />
              </span>
            </div>
            <div className="row">
              <label className="col-4">E-mail:</label>
              <span className="col-8">
                <Skeleton />
              </span>
            </div>
            <div className="row">
              <label className="col-4">Phone:</label>
              <span className="col-8">
                <Skeleton />
              </span>
            </div>
            <div className="row">
              <label className="col-4">Website:</label>
              <span className="col-8">
                <Skeleton />
              </span>
            </div>
            <div className="row">
              <label className="col-4">City:</label>
              <span className="col-8">
                <Skeleton />
              </span>
            </div>
            <div className="dropdown-divider my-3"></div>
            <div className="text-center">
              <div className="h6 mx-5">
                <Skeleton />
              </div>
              <small>
                <Skeleton />
              </small>
              <Skeleton className="float-right mt-3" width={"100px"} height={"30px"}></Skeleton>
            </div>
          </SkeletonTheme>
        </div>
      </div>
    );
  }
}
