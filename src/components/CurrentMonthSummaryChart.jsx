import React, { useContext } from "react";

// import { totalAmount } from "../services/currencyServices";
import { AppContext } from "../App";
import Icon from "./Icon";

const CurrentMonthSummaryChart = () => {
  const { monthlyData, selectedMonth } = useContext(AppContext);

  const incomeTotal = Object.keys(monthlyData[selectedMonth.label].incomes)
    .map(key => monthlyData[selectedMonth.label].incomes[key].amount)
    .reduce((total, current) => total + current, 0);

  let allexpenses = Object.keys(monthlyData[selectedMonth.label].expenses)
    .map(key => monthlyData[selectedMonth.label].expenses[key])
    .map(key => ({
      amount: key.amount,
      type: key.type
    }));

  const expenseObj = allexpenses.map(key => ({
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
  console.log(
    "context startingBalance",
    monthlyData[selectedMonth.label].startingBalance
  );

  let incomePercentageOfTotal = Math.floor(
    (incomeTotal / monthlyData[selectedMonth.label].startingBalance.total) * 100
  );
  console.log("incomePercentageTotal", incomePercentageOfTotal);
  console.log("test", Math.floor((10 / 100) * 100));

  return (
    <div className="current-month-summary-chart-wrapper">
      <ul className="current-month-summary-chart">
        <li>
          <div className="title">Income</div>
          <div className="bar-chart">
            <div className="bc-1"></div>
            <div className="total-value">
              <div className="dollar-sign-icon-wrapper">
                <Icon type="dollar-sign-icon" />
              </div>
              <div>{incomeTotal}</div>
            </div>
          </div>
        </li>
        <li>
          <div className="title">Expenses</div>
          <div className="bar-chart">
            <div className="bc-2"> </div>
            <div className="total-value">
              <div className="dollar-sign-icon-wrapper">
                <Icon type="dollar-sign-icon" />
              </div>
              <div>{expenseTotal}</div>
            </div>
          </div>
        </li>
        <li>
          <div className="title">Savings</div>
          <div className="bar-chart">
            <div className="bc-3"></div>
            <div className="total-value">
              <div className="dollar-sign-icon-wrapper">
                <Icon type="dollar-sign-icon" />
              </div>
              <div>{savingsTotal}</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default CurrentMonthSummaryChart;
