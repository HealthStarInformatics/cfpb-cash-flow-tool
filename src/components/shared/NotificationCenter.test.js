import React from "react";
import NotificationCenter from "./NotificationCenter";
import { shallow } from "enzyme";
import expect from "expect";

describe("NotificationCenter", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<NotificationCenter />);
    expect(wrapper.find(".notification-center-wrapper").length).toEqual(1);
  });
});
