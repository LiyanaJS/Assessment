import React, { Component } from "react";
// import { parse } from "url";

class MultiplyFunction extends Component {
  state = { num1: "", num2: "", result: "" };

  onChangeNum1 = e => {
    this.setState({
      num1: e.target.value
    });
  };

  onChangeNum2 = e => {
    this.setState({
      num2: e.target.value
    });
  };

  execute = e => {
    this.setState({
      //Method one:
      //   result: parseInt(
      //     "i".repeat(this.state.num1).repeat(this.state.num2).length
      //   )

      //Method 2:
      result: parseInt(this.state.num1 / (1 / this.state.num2))
    });
  };

  render() {
    const result = this.state.result;
    return (
      <div>
        <h1>Multiply</h1>
        <form onSubmit={this.execute}>
          <div>
            Input number (only) for A:
            <br />
            <input
              type="text"
              value={this.state.num1}
              onChange={this.onChangeNum1}
            />
          </div>
          <div>
            Input number (only) for B:
            <br />
            <input
              type="text"
              value={this.state.num2}
              onChange={this.onChangeNum2}
            />
          </div>
          <br />
          <div>
            <button type="submit">Multiply</button>
          </div>
        </form>
        Result: {result % 2 === 0 ? this.state.result : "-1"}
      </div>
    );
  }
}

export default MultiplyFunction;
