import { joinClasses } from "./stringServices";

/**
 * joinClasses
 */
describe("joinClasses", () => {
  it("removes nulls and empties", () => {
    const input = ["test", null, "", undefined, "join"];
    const expected = "test join";

    expect(joinClasses(input)).toBe(expected);
  });

  it("returns empty string for empty array", () => {
    expect(joinClasses([])).toBe("");
  });
});
