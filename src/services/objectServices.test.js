import { filterByDate } from "./objectServices";

/**
 * filterByDate
 */
describe("filterByDate", () => {
  const inputs = [
    {
      id: "1",
      type: { value: "retirement", label: "Retirement" },
      name: "Acme Inc. paycheck",
      amount: 100050,
      recurring: true,
      date: "Saturday, October 5, 2019"
    },
    {
      id: "2",
      type: { value: "retirement", label: "Retirement" },
      name: "Acme Inc. paycheck",
      amount: 100050,
      recurring: true,
      date: "Thursday, October 24, 2019"
    }
  ];

  it("finds entry for matching date", () => {
    expect(filterByDate(inputs, "Saturday, October 5, 2019")[0]).toEqual(
      inputs[0]
    );
  });

  it("doesn't find entries for non-matching date", () => {
    expect(filterByDate(inputs, "Saturday, October 6, 2019").length).toEqual(0);
  });
});
