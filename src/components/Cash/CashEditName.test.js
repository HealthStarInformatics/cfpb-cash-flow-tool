import React from "react";
import { shallow } from "enzyme";
import { CashEditName } from "./CashEditName";

describe("CashEditName", () => {
  describe("without input", () => {
    it("renders", () => {
      const base = shallow(<CashEditName />);
      expect(base.find("label").text()).toEqual(" name");
      expect(base.find(".description").text()).toEqual(
        "Giving your  a name will help you identify it from other similar s."
      );
      expect(base.find("#name").prop("value")).toEqual("");
    });
  });

  describe("with input", () => {
    let spy, wrapper;
    const config = { type: "type" };

    beforeEach(() => {
      spy = jest.fn();
      wrapper = shallow(
        <CashEditName name="me" setName={spy} config={config} />
      );
    });

    it("renders name correctly", () => {
      expect(wrapper.find("#name").prop("value")).toEqual("me");
    });

    it("renders description correctly", () => {
      expect(wrapper.find(".description").text()).toEqual(
        "Giving your type a name will help you identify it from other similar types."
      );
    });

    it("input calls setName on change", () => {
      wrapper.find("#name").simulate("change", { target: { value: "you" } });
      expect(spy.mock.calls[0][0]).toEqual("you");
    });
  });
});
