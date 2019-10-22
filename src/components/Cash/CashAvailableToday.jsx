import React, { useContext } from "react";
import { AppContext } from "../../App";
import { formatCurrency, totalAmount } from "../../services/currencyServices";
import { joinClasses } from "../../services/stringServices";
import { filterByDate } from "../../services/objectServices";

export const CashAvailableToday = ({ date, startingBalance = 0 }) => {
  const { monthlyData, selectedMonth, selectedDayBalance } = useContext(
    AppContext
  );

  if (!selectedMonth) return null;

  const filteredIncomes = filterByDate(
    monthlyData[selectedMonth.label].incomes,
    date
  );

  const filteredExpenses = filterByDate(
    monthlyData[selectedMonth.label].expenses,
    date
  );

  const cashAvailable =
    startingBalance +
    totalAmount(filteredIncomes) -
    totalAmount(filteredExpenses);

  const hasEntries =
    Object.keys(filteredIncomes).length > 0 ||
    Object.keys(filteredExpenses).length > 0;

  const classname =
    selectedDayBalance || hasEntries
      ? cashAvailable > 0
        ? "green"
        : "red"
      : "";

  return (
    <div className={joinClasses(["section", "cash-available", classname])}>
      <p className="label">Available cash as of today:</p>
      <p className="value">{formatCurrency(cashAvailable)}</p>
    </div>
  );
};
