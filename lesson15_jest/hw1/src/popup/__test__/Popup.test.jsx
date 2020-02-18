import React from "react";
import { shallow } from "enzyme";
import Popup from "../Popup";

describe("<Popup/>", () => {
  it("should display Popup", () => {
    const wrappedComponent = shallow(<Popup />);
    expect(wrappedComponent).toMatchSnapshot();
  });

  it("should call function deleteEvent by click on button", () => {
    const mockdeleteEvent = jest.fn();
    const wrappedComponent = shallow(<Popup deleteEvent={mockdeleteEvent} />);
    wrappedComponent.find(".delete-ivent").simulate("click");
    expect(mockdeleteEvent).toBeCalled();
  });
});
