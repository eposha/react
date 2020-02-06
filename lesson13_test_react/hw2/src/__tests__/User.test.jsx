import React from "react";
import { shallow } from "enzyme";
import User from "../User";

describe("User", () => {
  it("should render data from prop name", () => {
    const wrapperComponent = shallow(<User name={"Andrei"} />);

    expect(wrapperComponent.find(".user__name").text()).toEqual("Andrei");
  });

  it("should render data from prop age", () => {
    const age = 28;
    const wrapperComponent = shallow(<User age={age} />);

    expect(wrapperComponent.find(".user__age").text()).toEqual("28");
  });
});
