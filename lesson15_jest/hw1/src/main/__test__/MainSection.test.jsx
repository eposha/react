import React from "react";
import { shallow } from "enzyme";
import MainSection from "../MainSection";

describe("<MainSection/ >", () => {
  it("should display MainSection", () => {
    const wrappedComponent = shallow(<MainSection />);
    expect(wrappedComponent).toMatchSnapshot();
  });
});
