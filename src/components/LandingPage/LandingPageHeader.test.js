import React from "react";
import { shallow } from "enzyme";
import LandingPageHeader from "./LandingPageHeader";

describe("LandingPageHeader", () => {
  it("renders properly", () => {
    const wrapper = shallow(<LandingPageHeader />);
    expect(wrapper.find(".lph-wrapper").length).toEqual(1);
  });
});
