import React from "react";
import { shallow } from "enzyme";
import User from "../User.jsx";
import { getUserList } from "../userGateway.js";
jest.mock("../userGateway", () => {
  return {
    getUserList: jest.fn(() => Promise.resolve())
  };
});

describe("User", () => {
  it("shouldn`t display user data", () => {
    const wrappedComponent = shallow(<User />);
    expect(wrappedComponent.find(".user").exists()).toEqual(false);
  });

  it("should display user data", () => {
    const wrappedComponent = shallow(<User />);
    wrappedComponent.setState({
      userData: {
        avatar__url: "https://example.com",
        name: "John",
        location: "Planet Earth"
      }
    });
    expect(wrappedComponent.find(".user").exists()).toEqual(true);
  });

  it("function getUserList should be called", () => {
    const wrappedComponent = shallow(<User />);
    expect(getUserList).toBeCalled();
  });
});
