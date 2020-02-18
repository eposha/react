import React from "react";
import { shallow } from "enzyme";
import TimesDay from "../TimesDay";

describe("<TimesDay/ >", () => {
  it("should display TimesDay", () => {
    const wrappedComponent = shallow(<TimesDay />);
    expect(wrappedComponent).toMatchSnapshot();
  });
});
