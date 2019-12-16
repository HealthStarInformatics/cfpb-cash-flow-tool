import React from "react";
// import "../../css/CalendarView.css";
import Calendar from "./Calendar/Calendar";
import CashAvailableMonth from "./CurrentMonthSummary/CashAvailableMonth";
import CurrentMonthSummary from "./CurrentMonthSummary/CurrentMonthSummary";
import CalendarMonthHeader from "../../components/CalendarView/Calendar/CalendarMonthHeader";
import { NotificationCenter } from "./../shared/NotificationCenter";

export const CalendarMonthView = ({ title }) => {
  return (
    <div className="calendar-month-view-wrapper">
      <div className="header-banner">
        <div className="page-title">{title}</div>
      </div>
      <div className="body">
        <CalendarMonthHeader />
        <NotificationCenter />
        <Calendar />
        <CurrentMonthSummary />
      </div>
      <CashAvailableMonth />
    </div>
  );
};
