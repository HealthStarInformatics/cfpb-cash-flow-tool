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
export const newDayString = () =>
  new Date().toLocaleString("en-US", { dateStyle: "full" });

console.log(newDayString);
