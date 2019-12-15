import React from "react";
import { Link } from "react-router-dom";

import img1 from "../../assets/calendar-header-img.png";

import "../../css/CalendarView.css";

export const CalendarHeader = () => (
  <div className="calendar-header-wrapper">
    <div className="img-wrapper">
      <img className="hero-image" src={img1} alt="calendar"></img>
    </div>
    <p className="page-title">OK, let's customize your calendar.</p>
    <p className="description">
      Start by updating your starting balance or select any date to enter your
      income and expenses.
      <Link to="#" className="Nav_link">
        More guidance and tips.
      </Link>
    </p>
  </div>
);
