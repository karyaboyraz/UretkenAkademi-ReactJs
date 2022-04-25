import React, { Component } from 'react'
import Header from './Header'
import Navbar from './Navbar'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <Header></Header>
      </div>
    )
  }
}
