import React, { Component } from "react";

class SingleTodo extends Component {
  state = {};
  render() {
    return <li>{this.props.todo}</li>;
  }
}

export default SingleTodo;
