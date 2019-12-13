import React from "react";
import { CalendarDay } from "./CalendarDay";
import { shallow } from "enzyme";

describe("CalendarDay", () => {
  it("renders", () => {
    expect(shallow(<CalendarDay />).find(".day").length).toEqual(1);
  });

  describe("when showing styling", () => {
    it("styles correctly for positive cash balance, no entries", () => {
      const wrapper = shallow(
        <CalendarDay showCashStyling={true} hasCash={true} />
      );

      expect(wrapper.find(".day.hasCash").length).toEqual(1);
      expect(wrapper.find(".day.hasEntries").length).toEqual(0);
      expect(wrapper.find("ForwardRef(SvgDollarIcon)").length).toEqual(1);
      expect(wrapper.find(".dots").length).toEqual(1);
    });

    it("styles correctly for negative cash balance, with entries", () => {
      const wrapper = shallow(
        <CalendarDay showCashStyling={true} hasCash={false} hasEntries={true} />
      );

      expect(wrapper.find(".day.noCash").length).toEqual(1);
      expect(wrapper.find(".day.hasEntries").length).toEqual(1);
      expect(wrapper.find("ForwardRef(SvgMinusIcon)").length).toEqual(1);
      expect(wrapper.find(".dots").length).toEqual(1);
    });
  });

  describe("when not showing styling", () => {
    it("styles correctly for for a negative balance", () => {
      const wrapper = shallow(
        <CalendarDay
          showCashStyling={false}
          hasCash={false}
          hasEntries={true}
        />
      );

      expect(wrapper.find(".day.noCash").length).toEqual(0);
      expect(wrapper.find(".day.hasEntries").length).toEqual(1);
      expect(wrapper.find(".dots").length).toEqual(0);
      expect(wrapper.find("ForwardRef(SvgMinusIcon)").length).toEqual(0);
    });

    it("styles correctly for for a positive balance", () => {
      const wrapper = shallow(
        <CalendarDay showCashStyling={false} hasCash={true} />
      );

      expect(wrapper.find(".day.hasCash").length).toEqual(0);
      expect(wrapper.find(".day.hasEntries").length).toEqual(0);
      expect(wrapper.find("ForwardRef(SvgDollarIcon)").length).toEqual(0);
      expect(wrapper.find(".dots").length).toEqual(0);
    });
  });

  describe("when clicked", () => {
    it("updates app state", () => {
      const stateSpy = jest.fn();
      const wrapper = shallow(
        <CalendarDay
          setState={stateSpy}
          date="date"
          startingBalanceDay="starting"
          showCashStyling="style"
        />
      );

      wrapper.find(".day").simulate("click");

      expect(stateSpy).toHaveBeenCalled();
      expect(stateSpy.mock.calls[0][0]).toEqual({
        selectedDay: "date",
        selectedDayStartBalance: "starting",
        selectedDayIsStyled: "style"
      });
    });
  });
});
