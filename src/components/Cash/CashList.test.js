import { shallow, mount } from "enzyme";
import React from "react";
import { CashList } from "./CashList";

describe("CashList", () => {
  it("shows empty state without entries", () => {
    const wrapper = shallow(<CashList data={[]} />);

    expect(wrapper.find("CashListEmptyState").length).toEqual(1);
    expect(wrapper.find("CashListEntries").length).toEqual(0);
    expect(wrapper.find("AddCashButton").length).toEqual(1);
  });

  it("shows entry list with entries", () => {
    const data = [{ id: 1 }, { id: 2 }, { id: 3 }];
    const wrapper = mount(<CashList data={data} />);

    expect(wrapper.find("CashListEmptyState").length).toEqual(0);
    expect(wrapper.find("CashListEntries").length).toEqual(1);
    expect(wrapper.find("AddCashButton").length).toEqual(1);
    expect(wrapper.find("CashListEntry").length).toEqual(3);
  });
});
