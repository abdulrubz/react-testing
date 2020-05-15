import React from "react";
import Counter from "./Counter";
import CounterList from "./CounterList";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

describe("CounterList", () => {
  it("should render two counters by default", () => {
    const wrapper = shallow(<CounterList />);
    const counters = wrapper.find("Counter");
    expect(counters.length).toEqual(2);
  });

  it("can add a Counter when we click Add button", () => {
    const wrapper = shallow(<CounterList />);

    const btn = wrapper.find("button");
    btn.simulate("click");
    const counters = wrapper.find("Counter");
    expect(counters.length).toEqual(3);
  });
});
