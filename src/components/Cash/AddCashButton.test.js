import React from "react";
import { shallow } from "enzyme";
import { AddCashButton } from "./AddCashButton";

describe("AddCashButton component", () => {
  it("renders", () => {
    const wrapper = shallow(<AddCashButton addButtonText="a" />);
    expect(wrapper.find(".text-button.add-cash span").text()).toBe("a");
    expect(wrapper.find(".text-button.add-cash img").length).toBe(1);
  });

  it("clicking triggers click handler", () => {
    const editSpy = jest.fn();
    const selectSpy = jest.fn();
    const wrapper = shallow(
      <AddCashButton
        addButtonText="b"
        setEditing={editSpy}
        setSelected={selectSpy}
      />
    );

    wrapper.find(".text-button.add-cash").simulate("click");
    expect(editSpy).toHaveBeenCalled();
    expect(selectSpy).toHaveBeenCalled();
  });
});
