import React from "react";
import PrivacyNotice from "./PrivacyNotice";
import { shallow } from "enzyme";
import expect from "expect";

describe("PrivacyNotice", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<PrivacyNotice />);
    expect(wrapper.find(".privacy-notice-wrapper").length).toEqual(1);
  });
});
