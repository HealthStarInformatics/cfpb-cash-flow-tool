import { formatCurrency, toCents, totalAmount } from "./currencyServices";

/**
 * formatCurrency
 */
describe("formatCurrency", () => {
  it("formats 20000 cents", () => {
    expect(formatCurrency(20000)).toEqual("$200.00");
  });

  it("formats 1000 cents", () => {
    expect(formatCurrency(1000)).toEqual("$10.00");
  });

  it("formats 50 cents", () => {
    expect(formatCurrency(50)).toEqual("$0.50");
  });

  it("formats 0 cents", () => {
    expect(formatCurrency(0)).toEqual("$0.00");
  });
});

/**
 * toCents
 */
describe("toCents", () => {
  it("converts $200.00 to cents", () => {
    expect(toCents("$200.00")).toEqual(20000);
  });

  it("converts $10.00 to cents", () => {
    expect(toCents("$10.00")).toEqual(1000);
  });

  it("converts $0.50 to cents", () => {
    expect(toCents("$0.50")).toEqual(50);
  });

  it("converts $0.00 to cents", () => {
    expect(toCents("$0.00")).toEqual(0);
  });
});

/**
 * totalAmount
 */
describe("totalAmount", () => {
  it("sums up a collection with entries", () => {
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

    expect(totalAmount(inputs)).toBe(200100);
  });

  it("sums up an empty collection", () => {
    expect(totalAmount([])).toBe(0);
  });
});
