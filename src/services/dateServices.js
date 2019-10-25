import { getMonthNumber } from "./calendarServices";

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

export const DAY_NAMES = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

export const MAX_DAYS_IN_MONTH = 31;

/**
 * Returns a string for the day
 * @param {Number} timestamp
 * @returns {String} ex. 'Thursday, October 31'
 */
export const dayString = timestamp => {
  let date = new Date(timestamp);
  let day = DAY_NAMES[date.getDay()];
  let month = MONTH_NAMES[date.getMonth()];
  let dayNumber = date.getDate();

  return `${day}, ${month} ${dayNumber}`;
};

/**
 * Returns the number of milliseconds since the epoch
 * @param {Number} dayOfMonth 31
 * @param {String} monthYear "October 2019"
 */
export const convertToTimestamp = (dayOfMonth, monthYear) => {
  let [month, year] = monthYear.split(" ");
  month = getMonthNumber(month);
  year = Number.parseInt(year);

  let date = new Date(year, month, dayOfMonth);

  return date.getTime();
};

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
