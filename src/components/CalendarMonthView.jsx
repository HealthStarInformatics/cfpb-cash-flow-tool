import React from "react";

import "../styles/CalendarView.scss";

import CurrentMonthViewHeader from "./CurrentMonthViewHeader";
import NotificationCenter from "./NotificationCenter";
import Calendar from "./Calendar/Calendar";
import CurrentMonthSummary from "./CurrentMonthSummary";
import CashAvailableMonth from "./CashAvailableMonth";

export const CalendarMonthView = () => (
  <div className="calendar-month-view-wrapper">
    <div className="header-banner">
      <div className="page-title">October 2019</div>
    </div>
    <div className="body">
      <CurrentMonthViewHeader />
      <NotificationCenter />
      <Calendar />
      <CurrentMonthSummary />
    </div>
    <CashAvailableMonth />
  </div>
);

export default CalendarMonthView;
