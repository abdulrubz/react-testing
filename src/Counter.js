import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  makeIncrementer = (amount) => () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + amount,
      };
    });
  };

  increment = this.makeIncrementer(1);

  decrement = this.makeIncrementer(-1);

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button className="increment" onClick={this.increment}>
          ++
        </button>
        <button className="decrement" onClick={this.decrement}>
          --
        </button>
      </div>
    );
  }
}
