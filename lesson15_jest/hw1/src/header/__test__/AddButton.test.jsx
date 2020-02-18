import React from "react";
import { shallow } from "enzyme";
import AddButton from "../AddButton";

describe("<AddButton/>", () => {
  it("should show Popup on click", () => {
    const arrowFunction = jest.fn();
    const showPopup = jest.fn(() => arrowFunction);
    const wrappedComponent = shallow(<AddButton showPopu={showPopup} />);
    wrappedComponent.find(".add-button").simulate("click");
    expect(showPopup).toBeCalledWith();
  });
});
