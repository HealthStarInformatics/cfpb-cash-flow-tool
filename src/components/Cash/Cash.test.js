import React from "react";
import { Cash } from "./Cash";
import { shallow, mount } from "enzyme";

describe("Cash", () => {
  describe("without a selected month", () => {
    it("does not render ", () => {
      const wrapper = shallow(<Cash />);
      expect(wrapper.find(".cash-section").length).toEqual(0);
    });
  });

  describe("with a selected month", () => {
    it("renders the CashHeader ", () => {
      const wrapper = shallow(
        <Cash selectedMonth={{ label: "December 2019" }} />
      );

      expect(wrapper.find(".cash-section").length).toEqual(1);
      expect(wrapper.find("CashHeader").length).toEqual(1);
    });

    it("show CashEdit after clicking an entry", () => {
      const data = [
        { id: 1, name: "test", amount: 1000, recurring: false, type: "job" }
      ];
      const wrapper = mount(
        <Cash selectedMonth={{ label: "December 2019" }} data={data} />
      );

      wrapper.find(".entry .text-button").simulate("click");

      expect(wrapper.find("CashEdit").length).toEqual(1);
      expect(wrapper.find("CashList").length).toEqual(0);
    });

    it("show CashList by default", () => {
      const wrapper = shallow(
        <Cash selectedMonth={{ label: "December 2019" }} />
      );

      expect(wrapper.find("CashEdit").length).toEqual(0);
      expect(wrapper.find("CashList").length).toEqual(1);
    });
  });
});
