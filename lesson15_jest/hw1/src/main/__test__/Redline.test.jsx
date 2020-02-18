import React from "react";
import { shallow } from "enzyme";
import Redline from "../Redline";

describe("<Redline/ >", () => {
  it("should display Redline", () => {
    const wrappedComponent = shallow(<Redline />);
    expect(wrappedComponent).toMatchSnapshot();
  });
});
