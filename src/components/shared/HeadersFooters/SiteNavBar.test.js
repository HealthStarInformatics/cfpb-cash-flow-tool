import React from "react";
import { shallow } from "enzyme";
import SiteNavBar from "./SiteNavBar";

describe("SiteNavBar", () => {
  it("renders properly", () => {
    const wrapper = shallow(<SiteNavBar />);
    expect(wrapper.find(".lph-wrapper").length).toEqual(1);
  });
});
