import React from "react";
import { shallow } from "enzyme";
import { LandingPage } from "./LandingPage";

describe("LandingPage", () => {
  it("renders properly", () => {
    const wrapper = shallow(<LandingPage />);
    expect(wrapper.find("#landing").length).toEqual(1);
  });
});
