import React from "react";
import { shallow } from "enzyme";
import LandingViewHero from "./LandingViewHero";

describe("LandingViewHero", () => {
  it("renders properly", () => {
    const wrapper = shallow(<LandingViewHero />);
    expect(wrapper.find(".landing-page-hero-wrapper").length).toEqual(1);
  });
});
