import React from "react";
import Counter from "./Counter";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

describe("Counter component", () => {
  it("matches the snapshot", () => {
    const tree = renderer.create(<Counter />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("starts with 0", () => {
    const wrapper = shallow(<Counter />);
    const text = wrapper.find("h1").text();
    expect(text).toEqual("Count: 0");
  });

  it("should increment count when Increment button is clicked", () => {
    const wrapper = shallow(<Counter />);
    const incrementBtn = wrapper.find("button.increment");
    incrementBtn.simulate("click");
    const text = wrapper.find("h1").text();
    expect(text).toEqual("Count: 1");
  });

  it("shou;d decrement count when Decrement button is clicked", () => {
    const wrapper = shallow(<Counter />);
    const decrementBtn = wrapper.find("button.decrement");
    decrementBtn.simulate("click");
    const text = wrapper.find("h1").text();
    expect(text).toEqual("Count: -1");
  });
});
