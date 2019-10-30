import React from "react";
import { shallow } from "enzyme";
import { CashAvailableToday } from "./CashAvailableToday";

describe("CashAvailableToday component", () => {
  it("renders", () => {
    const wrapper = shallow(<CashAvailableToday />);
    const cashAvailable = wrapper.find(".cash-available");

    expect(cashAvailable.find(".label").text()).toBe(
      "Available cash as of today:"
    );
    expect(cashAvailable.find(".value").text()).toBe("$0.00");

    // Should not be styled by default
    expect(wrapper.find(".cash-available.green").length).toBe(0);
    expect(wrapper.find(".cash-available.red").length).toBe(0);
  });

  describe("without incomes/expenses", () => {
    it("shows green with a positive starting balance", () => {
      const wrapper = shallow(
        <CashAvailableToday startBalance={100} isStyled={true} />
      );

      expect(wrapper.find(".cash-available .value").text()).toEqual("$1.00");
      expect(wrapper.find(".cash-available.green").length).toEqual(1);
    });

    it("shows red with a negative starting balance", () => {
      const wrapper = shallow(
        <CashAvailableToday startBalance={-100} isStyled={true} />
      );

      expect(wrapper.find(".cash-available .value").text()).toEqual("-$1.00");
      expect(wrapper.find(".cash-available.red").length).toEqual(1);
    });
  });

  describe("with incomes/expenses", () => {
    it("shows green with enough incomes", () => {
      const incomes = [{ amount: 100 }, { amount: 200 }];
      const expenses = [{ amount: 100 }];
      const wrapper = shallow(
        <CashAvailableToday
          startBalance={-100}
          incomes={incomes}
          expenses={expenses}
        />
      );

      expect(wrapper.find(".cash-available .value").text()).toEqual("$1.00");
      expect(wrapper.find(".cash-available.green").length).toEqual(1);
    });

    it("shows red with enough expenses", () => {
      const incomes = [{ amount: 100 }, { amount: 100 }];
      const expenses = [{ amount: 100 }, { amount: 300 }];
      const wrapper = shallow(
        <CashAvailableToday
          startBalance={100}
          incomes={incomes}
          expenses={expenses}
        />
      );

      expect(wrapper.find(".cash-available .value").text()).toEqual("-$1.00");
      expect(wrapper.find(".cash-available.red").length).toEqual(1);
    });
  });
});
