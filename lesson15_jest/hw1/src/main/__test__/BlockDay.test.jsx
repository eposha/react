import React from "react";
import { shallow } from "enzyme";
import BlockDay from "../BlockDay";

describe("<BlockDay/>", () => {
  it("should display BlockDay", () => {
    const wrappedComponent = shallow(<BlockDay />);
    expect(wrappedComponent).toMatchSnapshot();
  });
});
