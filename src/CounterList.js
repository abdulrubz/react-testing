import React, { Component } from "react";
import Counter from "./Counter";
import PropType from "prop-types";

const createRange = (num) => Array.from(Array(num).keys());

class CounterList extends Component {
  state = {
    numOfCounters: 2,
  };

  addCounter = () => {
    this.setState((prevState) => ({
      numOfCounters: prevState.numOfCounters + 1,
    }));
  };

  renderCounter(index) {
    return (
      <li key={index}>
        <Counter />
      </li>
    );
  }

  render() {
    const countersArray = createRange(this.state.numOfCounters);

    return (
      <div className="">
        <button onClick={(this, this.addCounter)}>Add Counter</button>
        <ul>{countersArray.map((num) => this.renderCounter(num))}</ul>
      </div>
    );
  }
}

export default CounterList;
