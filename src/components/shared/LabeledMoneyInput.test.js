import React from "react";
import { shallow, mount } from "enzyme";
import { LabeledMoneyInput } from "./LabeledMoneyInput";
import expect from "expect";

describe("LabeledMoneyInput", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<LabeledMoneyInput />);
    expect(wrapper.find(".label").length).toEqual(1);
    expect(wrapper.find(".description").length).toEqual(1);
  });

  // it("renders given props", () => {
  //   // const amountSpy = jest.fn();
  //   const wrapper = shallow(
  //     <LabeledMoneyInput
  //       type={{ type: "Checking account(s)" }}
  //       // amount={{ amount: 20000 }}
  //       // setAmount={amountSpy}
  //     />
  //   );
  //   expect(wrapper.find(".label").text()).toEqual("Checking account(s)");
  // });
});
