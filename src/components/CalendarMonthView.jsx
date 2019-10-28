import React, { useContext } from "react";

import { AppContext } from "../App";

import "../styles/CalendarView.scss";

import CurrentMonthViewHeader from "./CurrentMonthViewHeader";
import NotificationCenter from "./NotificationCenter";
import Calendar from "./Calendar/Calendar";
import CurrentMonthSummary from "./CurrentMonthSummary";
import CashAvailableMonth from "./CashAvailableMonth";

export const CalendarMonthView = () => {
  const { selectedMonth } = useContext(AppContext);

  return (
    <div className="calendar-month-view-wrapper">
      <div className="header-banner">
        <div className="page-title">{selectedMonth.label}</div>
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
};

export default CalendarMonthView;
