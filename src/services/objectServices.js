/**
 * Returns only the incomes/expenses for the provided date
 * @param {Object} inputs Incomes/Expenses
 * @param {String} date ex. "Thursday, October 31, 2019"
 */
export const filterByDate = (inputs, date) => {
  if (!date) return inputs;
  const todaysKeys = Object.keys(inputs).filter(
    key => inputs[key].date === date
  );
  return todaysKeys.map(key => inputs[key]);
};
