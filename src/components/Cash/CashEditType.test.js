import React from "react";
import { shallow } from "enzyme";
import { CashEditType } from "./CashEditType";
import Select from "react-select";

describe("CashEditType", () => {
  describe("without input", () => {
    it("renders", () => {
      const base = shallow(<CashEditType />);
      expect(base.find("label").text()).toEqual(" type");
      expect(base.find(Select).length).toEqual(1);
      expect(base.find(Select).prop("value")).toEqual("");
    });
  });

  describe("with input", () => {
    let spy, wrapper;

    beforeEach(() => {
      spy = jest.fn();
      wrapper = shallow(<CashEditType type="job" setType={spy} />);
    });

    it("renders type correctly", () => {
      expect(wrapper.find(Select).prop("value")).toEqual("job");
    });

    it("calls setType on Select change", () => {
      wrapper.find(Select).simulate("change", "retirement");
      expect(spy.mock.calls[0][0]).toEqual("retirement");
    });
  });
});
