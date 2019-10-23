import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as PlusSign } from "../assets/plus-sign-icon.svg";

import CurrentMonthSummaryChart from "./CurrentMonthSummaryChart";

const CurrentMonthSummary = () => (
  <div className="monthly-totals-wrapper">
    <div className="monthly-totals-header">
      <div className="page-subtitle">Monthly Totals</div>
      <div className="show-link">
        <Link to="/currentmonthsummarychart" className="Nav_link">
          Show
        </Link>
        <div>
          <PlusSign className="plus-sign-icon" />
        </div>
      </div>
    </div>
    <p className="description">
      Review your total income, expenses and the amount you set aside for
      savings.
    </p>
    <CurrentMonthSummaryChart />
  </div>
);

export default CurrentMonthSummary;
