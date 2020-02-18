import React from "react";
import { shallow } from "enzyme";
import Form from "../Form";

describe("<Form/>", () => {
  it("should display Form", () => {
    const wrappedComponent = shallow(<Form />);
    expect(wrappedComponent).toMatchSnapshot();
  });
});
