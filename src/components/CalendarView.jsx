import React from "react";
import { Link } from "react-router-dom";
import "../styles/CalendarView.scss";
import CalendarHeader from "./CalendarHeader";
import CalendarMonthView from "./CalendarMonthView";
import PrivacyNotice from "./PrivacyNotice";
import SectionTip from "./SectionTip";
import SiteFooter from "./SiteFooter";

export const CalendarView = () => (
  <section id="calendar-view">
    <CalendarHeader />
    <CalendarMonthView />
    <div className="review-btn">
      <Link to="#" className="Nav_link">
        <button className="lp-btn primary">
          <div>Review my cash flow strategies</div>
        </button>
      </Link>
    </div>
    <SectionTip />
    <PrivacyNotice />
    <SiteFooter />
  </section>
);
