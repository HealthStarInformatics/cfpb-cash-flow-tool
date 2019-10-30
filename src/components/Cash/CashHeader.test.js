import { shallow } from "enzyme";
import React from "react";
import { CashHeader } from "./CashHeader";

describe("CashHeader", () => {
  let spy;

  const getWrapper = isEditing => {
    spy = jest.fn();
    return shallow(
      <CashHeader icon="i" title="t" editing={isEditing} setEditing={spy} />
    );
  };

  it("renders icon and title", () => {
    const wrapper = getWrapper(false);

    expect(wrapper.find(".cash-title img").prop("src")).toEqual("i");
    expect(wrapper.find(".cash-title span").text()).toEqual("t");
  });

  it("hides cancel button when not editing", () => {
    const wrapper = getWrapper(false);
    expect(wrapper.find(".text-button").length).toEqual(0);
  });

  describe("cancel button", () => {
    it("shows when editing", () => {
      const wrapper = getWrapper(true);

      expect(wrapper.find(".text-button").length).toEqual(1);
      expect(wrapper.find(".text-button span").text()).toEqual("Cancel");
      expect(wrapper.find(".text-button img").length).toEqual(1);
    });

    it("sets editing to false when clicked", () => {
      const wrapper = getWrapper(true);

      wrapper.find(".text-button").simulate("click");
      expect(spy).toHaveBeenCalled();
      expect(spy.mock.calls[0][0]).toEqual(false);
    });
  });
});
