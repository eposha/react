import React from "react";
import { shallow } from "enzyme";
import HolidayLine from "../HolidayLine";

describe("<HolidayLine/ >", () => {
  it("should display HolidayLine", () => {
    const wrappedComponent = shallow(<HolidayLine />);
    expect(wrappedComponent).toMatchSnapshot();
  });
});
