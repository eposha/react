import React from "react";
import { shallow } from "enzyme";
import TimeLines from "../TimeLines";

describe("<TimeLines/ >", () => {
  it("should display TimeLines", () => {
    const wrappedComponent = shallow(<TimeLines />);
    expect(wrappedComponent).toMatchSnapshot();
  });
});
