import React from "react";
import { shallow } from "enzyme";
import Counter from "../Counter.jsx";

describe("Counter", () => {
  it("initial value should be 0", () => {
    const wrappedComponent = shallow(<Counter />);
    expect(wrappedComponent.find(".counter__value").text()).toEqual("0");
  });

  it("after click + value should increased by 1", () => {
    const wrappedComponent = shallow(<Counter />);
    wrappedComponent
      .find(".counter__button")
      .last()
      .simulate("click");
    expect(wrappedComponent.find(".counter__value").text()).toEqual("1");
  });

  it("after click - value should be reduced by 1", () => {
    const wrappedComponent = shallow(<Counter />);
    wrappedComponent
      .find(".counter__button")
      .first()
      .simulate("click");
    expect(wrappedComponent.find(".counter__value").text()).toEqual("-1");
  });
});
