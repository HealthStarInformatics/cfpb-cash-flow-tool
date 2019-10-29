import { range } from "./arrayServices";
import { isEmpty } from "lodash";
import {
  dayString,
  generateMonthOptions,
  convertToDateString,
  MONTH_NAMES
} from "./dateServices";

/**
 * dayString
 */
describe("#dayString", () => {
  it("formats a valid date", () => {
    expect(dayString("2019-10-31")).toBe("Thursday, October 31");
  });

  it("returns error message for invalid date", () => {
    expect(dayString("2019-100-31")).toBe("Invalid Date");
  });
});

/**
 * convertToDateString
 */
describe("convertToDateString", () => {
  it("creates a YYYY-MM-DD string", () => {
    expect(convertToDateString(31, "October 2019")).toBe("2019-10-31");
  });
});

/**
 * generateMonthOptions
 */
describe("generateMonthOptions", () => {
  const testMonthsAhead = (numberOfMonths = null) => {
    const currentDate = new Date();
    const expectedMonthNames = range(numberOfMonths).map(
      num => MONTH_NAMES[(currentDate.getMonth() + num) % 12]
    );

    const generatedOptions = generateMonthOptions(numberOfMonths);

    expectedMonthNames.forEach(monthName => {
      let match = generatedOptions.filter(gopt => {
        return gopt.label.indexOf(monthName) > -1;
      });

      expect(!isEmpty(match)).toBe(true);
    });
  };

  it("includes expected month names for current month + 6 months ahead", () => {
    testMonthsAhead();
  });

  it("includes expected month names for current month + 2 months ahead", () => {
    testMonthsAhead(2);
  });
});
