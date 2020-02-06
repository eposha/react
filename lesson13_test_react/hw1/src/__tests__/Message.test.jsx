import React from "react";
import { shallow } from "enzyme";
import Message from "../Message";

describe("Message", () => {
  it("should not render component if prop text is undefined or null", () => {
    const wrapperComponent = shallow(<Message />);

    expect(wrapperComponent.isEmptyRender()).toEqual(true);
  });

  it("should render text from props", () => {
    const message = "text from props";
    const wrapperComponent = shallow(<Message text={message} />);

    expect(wrapperComponent.find(".message").text()).toEqual("text from props");
  });
});
