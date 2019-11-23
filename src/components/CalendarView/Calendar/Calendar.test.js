import React from "react";
import { shallow, mount } from "enzyme";
import { Calendar } from "./Calendar";
import { AppContext } from "../../App";
import { exampleMonthlyData } from "../../mockData";

describe("Calendar", () => {
  it("shows modal when a day is selected", () => {
    const wrapper = mount(
      <AppContext.Provider
        value={{
          selectedDay: true,
          selectedMonth: { label: "October 2019" },
          monthlyData: exampleMonthlyData
        }}
      >
        <Calendar />
      </AppContext.Provider>
    );

    expect(wrapper.find("DayModal").length).toEqual(1);
  });

  it("hides modal when no day is selected", () => {
    const wrapper = mount(
      <AppContext.Provider
        value={{
          selectedDay: false,
          selectedMonth: { label: "October 2019" },
          monthlyData: exampleMonthlyData
        }}
      >
        <Calendar />
      </AppContext.Provider>
    );

    expect(wrapper.find("DayModal").length).toEqual(0);
  });

  it("renders with sufficient data", () => {
    const wrapper = mount(
      <AppContext.Provider
        value={{
          selectedDay: false,
          selectedMonth: { label: "October 2019" },
          monthlyData: exampleMonthlyData
        }}
      >
        <Calendar startingBalance={{}} />
      </AppContext.Provider>
    );

    // Check page structure
    expect(wrapper.find("DayModal").length).toEqual(0);
    expect(wrapper.find("CalendarHeader").length).toEqual(1);
    expect(wrapper.find("CalendarBody").length).toEqual(1);
    expect(wrapper.find(".calendar .row:not(.label)").length).toEqual(5);
    expect(wrapper.find("CalendarKey").length).toEqual(1);

    // Check some daily styles
    expect(wrapper.find("#day1.hasEntries.noCash").length).toEqual(1);
    expect(wrapper.find("#day4.noEntries.noCash").length).toEqual(1);
    expect(wrapper.find("#day5.hasEntries.hasCash").length).toEqual(1);
    expect(wrapper.find("#day9.noEntries.hasCash").length).toEqual(1);
  });
});
