import React from "react";
import { shallow } from "enzyme";
import { CalendarHeader } from "./CalendarHeader";

describe("CalendarHeader", () => {
  it("renders 7 day labels", () => {
    const count = shallow(<CalendarHeader />).find(".day.label").length;
    expect(count).toEqual(7);
  });
});
