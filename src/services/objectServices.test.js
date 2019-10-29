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
      date: "2019-10-05"
    },
    {
      id: "2",
      type: { value: "retirement", label: "Retirement" },
      name: "Acme Inc. paycheck",
      amount: 100050,
      recurring: true,
      date: "2019-10-24"
    }
  ];

  it("finds entry for matching date", () => {
    expect(filterByDate(inputs, "2019-10-05")[0]).toEqual(inputs[0]);
  });

  it("doesn't find entries for non-matching date", () => {
    expect(filterByDate(inputs, "2019-10-06").length).toEqual(0);
  });
});
