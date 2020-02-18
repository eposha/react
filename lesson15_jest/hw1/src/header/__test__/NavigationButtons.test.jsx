import React from "react";
import { shallow } from "enzyme";
import NavigationButtons from "../NavigationButtons";

describe("<NavigationButtons/>", () => {
  it("Should display NavigationButtons", () => {
    const wrappedComponent = shallow(<NavigationButtons />);
    expect(wrappedComponent).toMatchSnapshot();
  });

  it("Should call function by click on nav-button__next", () => {
    const mockOnClickNext = jest.fn();
    const wrappedComponent = shallow(
      <NavigationButtons onClick={mockOnClickNext} />
    );
    wrappedComponent.find(".nav-button__next").simulate("click");
    expect(mockOnClickNext).toBeCalled();
  });

  it("Should call function by click on nav-button__prev", () => {
    const mockOnClickPrev = jest.fn();
    const wrappedComponent = shallow(
      <NavigationButtons onClickPrev={mockOnClickPrev} />
    );
    wrappedComponent.find(".nav-button__prev").simulate("click");
    expect(mockOnClickPrev).toBeCalled();
  });
});
