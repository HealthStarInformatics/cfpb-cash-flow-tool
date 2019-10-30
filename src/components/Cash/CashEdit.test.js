import React from "react";
import { shallow } from "enzyme";
import { CashEdit } from "./CashEdit";
import { CashEditType } from "./CashEditType";
import { CashEditName } from "./CashEditName";
import { CashEditAmount } from "./CashEditAmount";
import { LabeledCheckbox } from "../shared/LabeledCheckbox";

const newEntry = {
  type: "retirement",
  id: "1",
  date: "date1",
  amount: "100",
  name: "item1",
  recurring: false
};

describe("CashEdit component", () => {
  describe("without a type", () => {
    it("only shows type selector", () => {
      const wrapper = shallow(<CashEdit />);

      expect(wrapper.find(CashEditType).length).toEqual(1);
      expect(wrapper.find(CashEditName).length).toEqual(0);
      expect(wrapper.find(CashEditAmount).length).toEqual(0);
      expect(wrapper.find(LabeledCheckbox).length).toEqual(0);
      expect(wrapper.find(".form-actions").length).toEqual(0);
    });
  });

  describe("with a type", () => {
    it("shows all edit fields", () => {
      const wrapper = shallow(<CashEdit current={{ type: "retirement" }} />);

      expect(wrapper.find(CashEditType).length).toEqual(1);
      expect(wrapper.find(CashEditName).length).toEqual(1);
      expect(wrapper.find(CashEditAmount).length).toEqual(1);
      expect(wrapper.find(LabeledCheckbox).length).toEqual(1);
      expect(wrapper.find(".form-actions").length).toEqual(1);
    });

    it("save button saves", () => {
      const setStateSpy = jest.fn();
      const setEditingSpy = jest.fn();
      const data = [{ type: "disability", id: "2", date: "date2" }];

      const wrapper = shallow(
        <CashEdit
          current={newEntry}
          data={data}
          setState={setStateSpy}
          setEditing={setEditingSpy}
        />
      );

      wrapper
        .find(".form-actions button.primary")
        .simulate("click", { preventDefault: () => null });

      expect(setEditingSpy).toHaveBeenCalled();
      expect(setStateSpy).toHaveBeenCalled();

      const spyFirstArgument = setStateSpy.mock.calls[0][0];
      expect(spyFirstArgument).toEqual([...data, newEntry]);
    });

    it("delete button deletes", () => {
      const setStateSpy = jest.fn();
      const setEditingSpy = jest.fn();
      const data = [{ type: "disability", id: "2", date: "date2" }];
      const deleteEntry = { id: "2", type: "disability" };

      const wrapper = shallow(
        <CashEdit
          current={deleteEntry}
          data={data}
          setState={setStateSpy}
          setEditing={setEditingSpy}
        />
      );

      wrapper
        .find(".form-actions button.secondary")
        .simulate("click", { preventDefault: () => null });

      expect(setEditingSpy).toHaveBeenCalled();
      expect(setStateSpy).toHaveBeenCalled();

      const spyFirstArgument = setStateSpy.mock.calls[0][0];
      expect(spyFirstArgument).toEqual([]);
    });
  });

  describe("passes down props", () => {
    let wrapper;

    beforeEach(() => {
      const setStateSpy = jest.fn();
      const setEditingSpy = jest.fn();
      wrapper = shallow(
        <CashEdit
          current={newEntry}
          data={[1]}
          setState={setStateSpy}
          setEditing={setEditingSpy}
        />
      );
    });

    it("to CashEditType", () => {
      const current = wrapper.find(CashEditType);

      expect(current.prop("type")).toEqual(newEntry.type);
    });

    it("to CashEditName", () => {
      const current = wrapper.find(CashEditName);
      expect(current.prop("name")).toEqual(newEntry.name);
    });

    it("to CashEditAmount", () => {
      const current = wrapper.find(CashEditAmount);
      expect(current.prop("amount")).toEqual(newEntry.amount);
    });

    it("to LabeledCheckbox", () => {
      const current = wrapper.find(LabeledCheckbox);
      expect(current.prop("checked")).toEqual(newEntry.recurring);
    });
  });
});
