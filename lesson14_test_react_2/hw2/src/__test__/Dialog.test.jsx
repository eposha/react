import React from "react";
import { shallow } from "enzyme";
import Dialog from "../Dialog.jsx";

describe("Dialog", () => {
  const mockCallback = jest.fn();
  it("should be display component Dialog if prop isOpen = true", () => {
    const wrappedComponent = shallow(<Dialog isOpen onClose={mockCallback} />);
    expect(wrappedComponent.find(".dialog").exists()).toBeTruthy();
  });

  it("shouldn`t display component Dialog if prop isOpen = false", () => {
    const wrappedComponent = shallow(<Dialog onClose={mockCallback} />);
    expect(wrappedComponent.find(".dialog").exists()).toEqual(false);
  });

  it("should display text from prop title", () => {
    const wrappedComponent = shallow(
      <Dialog isOpen title={"text"} onClose={mockCallback} />
    );
    expect(wrappedComponent.find("h4").text()).toEqual("text");
  });

  it("should display data from prop children", () => {
    const wrappedComponent = shallow(
      <Dialog isOpen children={"text"} onClose={mockCallback} />
    );
    expect(wrappedComponent.find(".dialog__content").text()).toEqual("text");
  });

  it("component Dialog should display children elements", () => {
    const wrappedComponent = shallow(<Dialog isOpen onClose={mockCallback} />);
    expect(wrappedComponent).toMatchSnapshot();
  });
});
