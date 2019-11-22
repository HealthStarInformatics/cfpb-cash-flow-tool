import React from "react";
import { shallow, mount } from "enzyme";
import CalendarMonthView from "./CalendarMonthView";

describe("CalendarMonthView", () => {
  it("renders correctly", () => {
    const wrapper = shallow(
      <CalendarMonthView title={{ title: "November 2019" }} />
    );
    expect(wrapper.find(".page-title").length).toEqual(1);
    expect(wrapper.find(".body").length).toEqual(1);
  });
});
