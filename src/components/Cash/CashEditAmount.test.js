import React from "react";
import { shallow } from "enzyme";
import { CashEditAmount } from "./CashEditAmount";

describe("CashEditAmount", () => {
  describe("without input", () => {
    it("renders", () => {
      const base = shallow(<CashEditAmount />);
      expect(base.find("label").text()).toEqual("Amount");
      expect(base.find(".description").text()).toEqual("Ex: $1,000.56");
      expect(base.find("#amount").prop("value")).toEqual("$0.00");
    });
  });

  describe("with input", () => {
    let spy, wrapper;

    beforeEach(() => {
      spy = jest.fn();
      wrapper = shallow(<CashEditAmount amount="10000" setAmount={spy} />);
    });

    it("renders amount correctly", () => {
      expect(wrapper.find("#amount").prop("value")).toEqual("$100.00");
    });

    it("calls setAmount on input change", () => {
      wrapper
        .find("#amount")
        .simulate("change", { target: { value: "$2.00" } });
      expect(spy.mock.calls[0][0]).toEqual(200);
    });
  });
});
