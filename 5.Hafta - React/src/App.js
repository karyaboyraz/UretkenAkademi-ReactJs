import Area from "./inputArea";
import Title from "./title.js";
import "./App.css";

import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="m-5">
          <Title></Title>
          <Area></Area>
        </div>
      </div>
    );
  }
}
