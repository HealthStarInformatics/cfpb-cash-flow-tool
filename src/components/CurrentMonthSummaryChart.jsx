import React from "react";
import { ReactComponent as DollarSign } from "../assets/dollar-sign.svg";

const CurrentMonthSummaryChart = () => (
  <div className="current-month-summary-chart-wrapper">
    <div>CurrentMonthSummaryChart</div>
    <ul>
      <li>
        <div className="title">Income</div>
        <div className="bar-chart">
          <div className="bar-chart-1"></div>
        </div>
        <div className="total-value">
          <div className="dollar-sign-icon-wrapper">
            <DollarSign className="dollar-sign-icon" />
          </div>
          <div>2,000</div>
        </div>
      </li>
      <li>
        <div className="title">Expenses</div>
        <div className="bar-chart">
          <div className="bar-chart-2"></div>
        </div>
        <div className="total-value">
          <div className="dollar-sign-icon-wrapper">
            <DollarSign className="dollar-sign-icon" />
          </div>
          <div>2,150</div>
        </div>
      </li>
      <li>
        <div className="title">Savings</div>
        <div className="bar-chart">
          <div className="bar-chart-1"></div>
        </div>
        <div className="total-value">
          <div className="dollar-sign-icon-wrapper">
            <DollarSign className="dollar-sign-icon" />
          </div>
          <div>200</div>
        </div>
      </li>
    </ul>
  </div>
);

export default CurrentMonthSummaryChart;
