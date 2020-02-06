import React from "react";
import { shallow } from "enzyme";
import Mailbox from "../Mailbox";

describe("Mailbox", () => {
  it("should not render count if no unread messages", () => {
    const wrapperComponent = shallow(<Mailbox unreadMessages={[]} />);

    expect(wrapperComponent.find(".mailbox__count").exists()).toEqual(false);
  });

  it("should render correct count of unread messages", () => {
    const unreadMessages = [1, 2, 3];
    const wrapperComponent = shallow(
      <Mailbox unreadMessages={unreadMessages} />
    );

    expect(wrapperComponent.find(".mailbox__count").text()).toEqual("3");
  });
});
