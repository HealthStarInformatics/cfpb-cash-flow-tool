import React from "react";
import { shallow, mount } from "enzyme";
import CalendarView from "./CalendarView";
import { AppContext } from "../../App";
import { exampleMonthlyData } from "../../mockData";
import { initializeMonthlyData } from "../../services/calendarServices";

describe("CalendarView", () => {
  it("renders properly", () => {
    const wrapper = mount(
      <AppContext.Provider
        value={{
          selectedMonth: { label: "December 2019" },
          monthlyData: exampleMonthlyData
        }}
      >
        <CalendarView />
      </AppContext.Provider>
    );
    expect(wrapper.find("#calendar-view").length).toEqual(1);
  });
});
