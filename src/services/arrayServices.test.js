import { range } from "./arrayServices";

describe("range", () => {
  it("generates a range given only a start value", () => {
    expect(range(3)).toEqual([0, 1, 2]);
  });

  it("generates a range given start and end values", () => {
    expect(range(1, 3)).toEqual([1, 2]);
  });

  it("generates a range given start, end, and step values", () => {
    expect(range(1, 10, 2)).toEqual([1, 3, 5, 7, 9]);
  });

  it("generates an empty range given no arguments", () => {
    expect(range()).toEqual([]);
  });
});
