import { getMonthNumber } from "./calendarServices";

/**
 * Returns a string for the day
 * @param {Date} date
 * @returns {String} ex. 'Thursday, October 31'
 */
export const dayString = date =>
  date
    .split(",")
    .slice(0, 2)
    .join(",");

/**
 * @returns {String} ex. 'Thursday, October 31, 2019'
 */
export const newDayString = (date = null) => {
  const result = (date || new Date()).toLocaleString("en-US", {
    dateStyle: "full"
  });

  return result;
};

export const deriveDateString = (day, monthYear) => {
  let [month, year] = monthYear.split(" ");
  let monthNumber = getMonthNumber(month);
  year = Number.parseInt(year);

  return newDayString(new Date(year, monthNumber, day));
};

export const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

/**
 * Generates select options for MonthSelect dropdown menu
 * @param {Number} monthsAhead Number of options to generate in addition to current month
 */
export const generateMonthOptions = (monthsAhead = 6) =>
  [...Array(monthsAhead + 1).keys()].map(add => {
    const today = new Date();
    today.setMonth(today.getMonth() + add);

    const thisMonth = today.getMonth();
    const year = today.getFullYear();

    return {
      value: `${MONTH_NAMES[thisMonth].toLowerCase()}-${year}`,
      label: `${MONTH_NAMES[thisMonth]} ${year}`
    };
  });
