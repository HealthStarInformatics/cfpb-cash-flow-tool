import { shallow } from "enzyme";
import React from "react";
import { CashListEntry } from "./CashListEntry";

describe("CashListEntry", () => {
  it("renders default props", () => {
    const wrapper = shallow(<CashListEntry />);
    expect(wrapper.find(".text-button").text()).toEqual("edit");
    expect(wrapper.find(".amount").text()).toEqual("$NaN");
    expect(wrapper.find(".name").text()).toEqual("");
  });

  it("renders given props", () => {
    const editSpy = jest.fn();
    const selectSpy = jest.fn();
    const wrapper = shallow(
      <CashListEntry
        current={{ name: "test", amount: -100 }}
        setEditing={editSpy}
        setSelected={selectSpy}
      />
    );
    expect(wrapper.find(".amount").text()).toEqual("-$1.00");
    expect(wrapper.find(".name").text()).toEqual("test");
  });

  it("calls callbacks when clicking edit", () => {
    const editSpy = jest.fn();
    const selectSpy = jest.fn();
    const current = { name: "test", amount: -100 };
    const wrapper = shallow(
      <CashListEntry
        current={current}
        setEditing={editSpy}
        setSelected={selectSpy}
      />
    );

    wrapper.find(".text-button").simulate("click");

    expect(editSpy).toHaveBeenCalled();
    expect(selectSpy).toHaveBeenCalled();
    expect(editSpy.mock.calls[0][0]).toEqual(true);
    expect(selectSpy.mock.calls[0][0]).toEqual(current);
  });
});
