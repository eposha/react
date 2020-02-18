import React from "react";
import { shallow } from "enzyme";
import Header from "../Header";

describe("<Header/>", () => {
  it("Should display Header", () => {
    const wrappedComponent = shallow(<Header />);
    expect(wrappedComponent).toMatchSnapshot();
  });
});
