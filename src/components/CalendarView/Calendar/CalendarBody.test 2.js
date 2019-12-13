import React from "react";
import { shallow } from "enzyme";
import { CalendarBody } from "./CalendarBody";

describe("CalendarBody", () => {
  it("renders", () => {
    shallow(<CalendarBody />);
  });

  it("renders rows", () => {
    const wrapper = shallow(<CalendarBody rows={[1, 2, 3]} />);
    const rows = wrapper.find(".row");

    expect(rows.length).toEqual(3);

    rows.forEach((row, idx) => {
      expect(row.text()).toEqual(`${idx + 1}`);
    });
  });
});
