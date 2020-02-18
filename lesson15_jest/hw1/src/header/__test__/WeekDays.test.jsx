import React from "react";
import { shallow } from "enzyme";
import WeekDays from "../WeekDays";

describe("<WeekDays/>", () => {
  it("Should display WeekDays", () => {
    const wrappedComponent = shallow(<WeekDays />);
    expect(wrappedComponent).toMatchSnapshot();
  });

  it("Should display WeekDays", () => {
    const wrappedComponent = shallow(<WeekDays />);
    expect(wrappedComponent).toMatchSnapshot();
  });
});
