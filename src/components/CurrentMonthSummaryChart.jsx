import React, { useContext } from "react";

import { formatCurrency, findPercentage } from "../services/currencyServices";
import { AppContext } from "../App";
import ProgressBar from "./ProgressBar";

import "../styles/CurrentMonthSummaryChart.scss";

const CurrentMonthSummaryChart = () => {
  const { monthlyData, selectedMonth } = useContext(AppContext);

  const incomeTotal = Object.keys(monthlyData[selectedMonth.label].incomes)
    .map(key => monthlyData[selectedMonth.label].incomes[key].amount)
    .reduce((total, current) => total + current, 0);

  let expenseObj = Object.keys(monthlyData[selectedMonth.label].expenses)
    .map(key => monthlyData[selectedMonth.label].expenses[key])
    .map(key => ({
      amount: key.amount,
      type: key.type
    }));

  const savingsTotal = expenseObj
    .filter(item => item.type.value === "savings")
    .map(entry => entry.amount)
    .reduce((total, current) => total + current, 0);

  const expenseTotal = expenseObj
    .filter(item => item.type.value !== "savings")
    .map(entry => entry.amount)
    .reduce((total, current) => total + current, 0);

  // QUESTION:  What is the calculation for the TOTAL, given that the bars will show a percentage of a total
  const monthGrandTotal = incomeTotal + expenseTotal + savingsTotal;

  return (
    <div className="current-month-summary-chart-wrapper">
      <ul className="current-month-summary-chart">
        <li>
          <div className="title">Income</div>
          <ProgressBar
            percentage={findPercentage(incomeTotal, monthGrandTotal)}
          />
          <div className="total-value">{formatCurrency(incomeTotal)}</div>
        </li>
        <li>
          <div className="title">Expenses</div>
          <ProgressBar
            percentage={findPercentage(expenseTotal, monthGrandTotal)}
          />
          <div className="total-value">{formatCurrency(expenseTotal)}</div>
        </li>
        <li>
          <div className="title">Savings</div>
          <ProgressBar
            percentage={findPercentage(savingsTotal, monthGrandTotal)}
          />
          <div className="total-value">{formatCurrency(savingsTotal)}</div>
        </li>
      </ul>
    </div>
  );
};

export default CurrentMonthSummaryChart;
