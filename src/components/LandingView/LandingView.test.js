import React from "react";
import { shallow } from "enzyme";
import { LandingView } from "./LandingView";

describe("LandingView", () => {
  it("renders properly", () => {
    const wrapper = shallow(<LandingView />);
    expect(wrapper.find("#landing").length).toEqual(1);
  });
});
