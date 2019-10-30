import React from "react";
import "../../styles/CalendarView.scss";
import Calendar from "./../Calendar/Calendar";
import CashAvailableMonth from "./../CashAvailableMonth";
import CurrentMonthSummary from "./../CurrentMonthView/CurrentMonthSummary";
import CurrentMonthViewHeader from "./../CurrentMonthView/CurrentMonthViewHeader";
import NotificationCenter from "./../shared/NotificationCenter";

export const CalendarMonthView = ({ title }) => {
  return (
    <div className="calendar-month-view-wrapper">
      <div className="header-banner">
        <div className="page-title">{title}</div>
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
