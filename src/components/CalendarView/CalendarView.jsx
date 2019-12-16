import React, { useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import { AppContext } from "../App";
// import "../../css/CalendarView.css";
import { CalendarHeader } from "./CalendarHeader";
import { CalendarMonthView } from "./CalendarMonthView";
import { PrivacyNotice } from "./../shared/HeadersFooters/PrivacyNotice";
import { SectionTip } from "./../shared/SectionTip";
import { SiteFooter } from "./../shared/HeadersFooters/SiteFooter";
import { initializeMonthlyData } from "../../services/calendarServices";

export const CalendarView = () => {
  const { selectedMonth, monthlyData, setState } = useContext(AppContext);

  // Can't show data unless user has selected a month
  if (!selectedMonth) return <Redirect to="/month" />;

  // Create an entry in App's state.monthlyData if none exists for this month
  if (!monthlyData[selectedMonth.label]) {
    initializeMonthlyData(selectedMonth.label, setState);
    return null;
  }

  return (
    <section id="calendar-view">
      <CalendarHeader />
      <CalendarMonthView title={selectedMonth.label} />
      <div className="review-btn">
        <Link to="/strategies" className="Nav_link">
          <button className="lp-btn primary">
            <div>Review my cash flow strategies</div>
          </button>
        </Link>
      </div>
      <SectionTip
        text="You can access strategies for improving cash flow at any time. But
      the more information you add to the calendar, the more personalized your
      strategies will become."
      />
      <PrivacyNotice />
      <SiteFooter />
    </section>
  );
};
