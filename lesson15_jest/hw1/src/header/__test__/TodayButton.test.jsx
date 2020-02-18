import React from "react";
import { shallow } from "enzyme";
import TodayButton from "../TodayButton";

describe("<TodayButton/>", () => {
  it("should show Popup o", () => {
    const mockCurrentWeek = jest.fn();
    const wrappedComponent = shallow(<TodayButton onClick={mockCurrentWeek} />);

    wrappedComponent.find(".show-today-btn").simulate("click");
    expect(mockCurrentWeek).toBeCalled();
  });
});
