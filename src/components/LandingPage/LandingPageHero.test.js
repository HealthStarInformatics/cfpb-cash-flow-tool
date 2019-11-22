import React from "react";
import { shallow } from "enzyme";
import LandingPageHero from "./LandingPageHero";

describe("LandingPageHero", () => {
  it("renders properly", () => {
    const wrapper = shallow(<LandingPageHero />);
    expect(wrapper.find(".landing-page-hero-wrapper").length).toEqual(1);
  });
});
