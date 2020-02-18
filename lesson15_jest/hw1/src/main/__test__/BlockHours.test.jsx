import React from "react";
import { shallow } from "enzyme";
import BlockHours from "../BlockHours";

describe("<BlockHours/ >", () => {
  it("should display BlockHours", () => {
    const wrappedComponent = shallow(<BlockHours events={[]} />);
    expect(wrappedComponent).toMatchSnapshot();
  });
});
