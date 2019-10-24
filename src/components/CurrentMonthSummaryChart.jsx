import React from "react";
import Icon from "./Icon";

const CurrentMonthSummaryChart = () => (
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
            <div>2,000</div>
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
            <div>2,150</div>
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
            <div>200</div>
          </div>
        </div>
      </li>
    </ul>
  </div>
);

export default CurrentMonthSummaryChart;
