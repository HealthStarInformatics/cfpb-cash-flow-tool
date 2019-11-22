import React from "react";
import { shallow } from "enzyme";
import CalendarHeader from "./CalendarHeader";

describe("CalendarHeader", () => {
  it("renders properly", () => {
    const wrapper = shallow(<CalendarHeader />);
    expect(wrapper.find(".calendar-header-wrapper").length).toEqual(1);
  });
});
