import React from "react";
import { shallow } from "enzyme";
import { CalendarKey } from "./CalendarKey";

describe("CalendarKey", () => {
  it("not visible unless set to show", () => {
    const wrapper = shallow(<CalendarKey />);
    expect(wrapper.find(".calendar-key").length).toEqual(0);
  });

  it("visible when set to show", () => {
    const wrapper = shallow(<CalendarKey show={true} />);
    expect(wrapper.find(".calendar-key").length).toEqual(1);
  });
});
