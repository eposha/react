import React from "react";
import { shallow } from "enzyme";
import TimeDays from "../TimeDays";

describe("<TimeDays/ >", () => {
  it("should display TimeDays", () => {
    const wrappedComponent = shallow(<TimeDays />);
    expect(wrappedComponent).toMatchSnapshot();
  });
});
