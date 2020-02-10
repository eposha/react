import React from "react";
import { shallow } from "enzyme";
import Dialog from "../Dialog.jsx";

describe("Dialog", () => {
  const mockCallback = jest.fn();
  it("should be display component Dialog if prop isOpen = true", () => {
    const mockCallback = jest.fn();
    const wrappedComponent = shallow(<Dialog isOpen onClose={mockCallback} />);
    expect(wrappedComponent.find(".dialog").exists()).toBeTruthy();
  });

  it("shouldn`t display component Dialog if prop isOpen = false", () => {
    const mockCallback = jest.fn();
    const wrappedComponent = shallow(<Dialog onClose={mockCallback} />);
    expect(wrappedComponent.find(".dialog").exists()).toEqual(false);
  });

  it("should display text from prop title", () => {
    const mockCallback = jest.fn();
    const wrappedComponent = shallow(
      <Dialog isOpen title={"text"} onClose={mockCallback} />
    );
    expect(wrappedComponent.find("h4").text()).toEqual("text");
  });

  it("should display data from prop children", () => {
    const mockCallback = jest.fn();
    const wrappedComponent = shallow(
      <Dialog isOpen children={"text"} onClose={mockCallback} />
    );
    expect(wrappedComponent.find(".dialog__content").text()).toEqual("text");
  });

  it("component Dialog should display children elements", () => {
    const mockCallback = jest.fn();
    const wrappedComponent = shallow(
      <Dialog isOpen onClose={mockCallback}>
        text
      </Dialog>
    );
    expect(wrappedComponent).toMatchSnapshot();
  });

  it("should close Dialog if button X click", () => {
    const mockCallback = jest.fn();
    const wrappedComponent = shallow(<Dialog isOpen onClose={mockCallback} />);
    wrappedComponent.find(".dialog__close-btn").simulate("click");
    expect(mockCallback).toBeCalled();
  });
});
